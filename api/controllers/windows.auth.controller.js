require('dotenv').config();

const Sql = require('../db/sql');
const jwt = require('jsonwebtoken');

let baseUrl;
if (process.env.NODE_ENV == 'production') {
    baseUrl = process.env.EMAIL_LINK + '/inicio/login';
} else {
    baseUrl = 'http://localhost:4200' + '/inicio/login';
}

exports.loginWithWindows = async (req, res) => {
    try {
        const returnUrl = req.query.redirect? 
        'http://' + req.query.redirect : baseUrl;

        console.log(returnUrl);

        if (!req.sso) {
            return res.redirect(returnUrl + '?error=incorrect');
        }

        const user = {
            name: req.sso.user.name,                //Username
            domain: req.sso.user.domain,            //Dominio
            displayName: req.sso.user.displayName,  //Name
            mail: req.sso.user.adUser.mail[0] || '' //Email
        };

        console.log({
            user,
            returnUrl
        });

        if (user.domain != 'INTERPLEX') {
            console.log('Not in domain!');
            return res.redirect(returnUrl + '?error=forbidden');
        }

        let query = `SELECT * FROM dbo.usuarios WHERE username = '${user.name}'`
        let response = await Sql.request(query);

        if (!response || response.length == 0) { //Si no existe el usuario, lo creamos
        }

        let bdUser = response[0];

        let awtInfo = {
            username: bdUser.username,
        };

        const token = jwt.sign(awtInfo, process.env.TOKEN_SEED);
        return res.redirect(returnUrl + '?token=' + token);

        // return res.json({
        //     ok: true,
        //     user
        // });
    } catch (e) {
        console.log(e);
        return res.status(500).send({
            ok: false,
            error: e
        });
    }
}