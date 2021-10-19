const Auth = require('../controllers/auth.controller');
const Token = require('../middlewares/interceptor')

module.exports = (app) => {
    app.route('/')
    .get( (req, res) => {return res.json({
        ok: true,
        message: "Server running!"  
    })});

    app.route('/auth/login')
    .post(Auth.login);

    app.route('/auth/refresh')
    .post([Token.verifyUser],Auth.refresh);

    app.route('/auth/recover')
    .post(Auth.recoverPassword);
}