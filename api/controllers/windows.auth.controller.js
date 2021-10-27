require('dotenv').config();

const Sql = require('../db/sql');
const jwt = require('jsonwebtoken');
const { sso } = require('node-expose-sspi');

exports.loginWithSSO = async(req, res) => {
    console.log(req.sso);
    if (!req.sso) {
      return res.status(401).end();
    }
    if (req.session) {
      req.session.sso = req.sso;
    }
    return res.json({
      sso: req.sso,
    });

}

exports.loginWithCredentials = async(req, res) => {
    console.log('connect', req.body);
    const domain = sso.getDefaultDomain();
    console.log('domain: ', domain);
  
    const credentials = { // : UserCredential 
      domain,
      user: req.body.login,
      password: req.body.password,
    };

    console.log('credentials: ', credentials);
    const ssoObject = await sso.connect(credentials);
    console.log('ssoObject: ', ssoObject);
    if (ssoObject && req.session) {
      req.session.sso = ssoObject;
      return res.json({
        sso: req.session.sso,
      });
    }
    return res.status(401).json({
      error: 'bad login/password.',
    });
};


let baseUrl;
if (process.env.NODE_ENV == 'production') {
    baseUrl = process.env.EMAIL_LINK + '/inicio/login';
} else {
    baseUrl = 'http://localhost:4200' + '/inicio/login';
}

let getToken = async(sso)=> {
    return new Promise(async(resolve, reject) => {
        const user = {
            name: sso.user.name,                //Username
            domain: sso.user.domain,            //Dominio
            displayName: sso.user.displayName,  //Nombre
            mail: sso.user.adUser.mail[0] || '' //Email
        };

        console.log(user);
        
        if (user.domain != 'INTERPLEX') {
            console.log('Not in domain!');
            reject('Not in domain');
        }

        let query = `SELECT * FROM dbo.usuarios WHERE username = '${ user.name }'`
        let response = await Sql.request(query);

        if (!response || response.length == 0) { //Si no existe el usuario, lo creamos
            
            const awtInfo = {
                username: 'i.lopez'
            };

            const token = jwt.sign(awtInfo, process.env.TOKEN_SEED);
            return resolve(token);
        }

        let bdUser = response[0];

        let awtInfo = {
            username: bdUser.username,
        };

        const token = jwt.sign(awtInfo, process.env.TOKEN_SEED);
        return resolve(token);
    });
}

exports.loginWithWindows = async (req, res) => {
    try {
        const returnUrl = req.query.redirect? 
        'http://' + req.query.redirect : baseUrl;

        console.log(returnUrl);

        if (!req.sso) {
            return res.redirect(returnUrl + '?error=incorrect');
        }

        const token = await getToken(req.sso);
        return res.redirect(returnUrl + '?token=' + token);

    } catch (e) {
        console.log(e);
        return res.redirect(returnUrl + '?error=' + String(e));
    }
}