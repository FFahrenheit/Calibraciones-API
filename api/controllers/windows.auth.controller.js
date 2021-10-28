require('dotenv').config();

const Sql = require('../db/sql');
const jwt = require('jsonwebtoken');
const { sso } = require('node-expose-sspi');

exports.loginWithSSO = async (req, res) => {
    try {
        if (!req.sso) { //No se completó
            return res.json({
                ok: false,
                error: 'Credenciales inválidas'
            });
        }
        //Se completó
        if (req.session) {
            req.session.sso = req.sso;
        }

        const resp = await getToken(req.sso);

        return res.json({
            ok: true,
            ...resp
        });

    } catch (e) {
        console.log(e);
        return res.status(500).send({
            ok: false,
            error: e
        });
    }
}

exports.loginWithCredentials = async (req, res) => {
    try {
        const domain = sso.getDefaultDomain();

        const credentials = { // : UserCredential 
            domain,
            user: req.body.login,
            password: req.body.password,
        };

        // console.log(credentials);

        const ssoObject = await sso.connect(credentials);

        if (!ssoObject) {
            return res.json({
                ok: false,
                error: 'Credenciales inválidas'
            });
        }

        if (req.session) {
            req.session.sso = ssoObject;
        }

        const resp = await getToken(ssoObject);
        return res.json({
            ok: true,
            ...resp
        });

    } catch (e) {
        console.log(e);
        return res.status(500).send({
            ok: false,
            error: e
        });
    }
};

const getToken = async (sso) => {
    return new Promise(async (resolve, reject) => {
        try {
            let created = false;
            const email = typeof sso.user.adUser.mail != 'undefined' ?
                sso.user.adUser.mail[0] : 'i.lopez@mx.interplex.com';

            const user = {
                name: sso.user.name,                //Username
                domain: sso.user.domain,            //Dominio
                displayName: sso.user.displayName,  //Nombre
                mail: email                         //Email
            };
            console.log(user);

            if (user.domain != 'INTERPLEX') {
                console.log('Not in domain!');
                reject('Not in domain');
            }

            let query = `SELECT * FROM dbo.usuarios WHERE username = '${user.name}'`
            let response = await Sql.request(query);

            if (!response || response.length == 0) { //Si no existe el usuario, lo creamos

                created = true;
                const pass = Math.random();
                const body = {
                    username: user.name,
                    password: pass,
                    nombre: user.displayName,
                    email: user.mail,
                    posicion: 'usuario',
                    temporal: Math.random()
                };

                let query = 'INSERT INTO usuarios() VALUES ?';

                await Sql.query(query, body);

                response = [body];
                console.log(response);
            }

            let bdUser = response[0];

            let awtInfo = {
                username: bdUser.username,
            };

            const token = jwt.sign(awtInfo, process.env.TOKEN_SEED);
            return resolve({
                token,
                usuario: {
                    username: bdUser.username,
                    posicion: bdUser.posicion,
                    nombre: bdUser.nombre,
                    email: bdUser.email,
                    recover: created
                }
            });
        } catch (e) {
            return reject(e);
        }
    });
}

/*
Lecagy controller, doesn't have use
anymore
*/
exports.loginWithWindows = async (req, res) => {
    try {
        const baseUrl = process.env.NODE_ENV == 'production'
            ? process.env.EMAIL_LINK + '/inicio/login'
            : 'http://localhost:4200' + '/inicio/login';

        const returnUrl = req.query.redirect ?
            'http://' + req.query.redirect : baseUrl;

        console.log(returnUrl);

        if (!req.sso) {
            return res.redirect(returnUrl + '?error=incorrect');
        }

        const token = await getToken(req.sso).token;
        return res.redirect(returnUrl + '?token=' + token);

    } catch (e) {
        console.log(e);
        return res.redirect(returnUrl + '?error=' + String(e));
    }
}