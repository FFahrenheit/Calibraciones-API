const Auth = require('../controllers/auth.controller');
const Token = require('../middlewares/interceptor')

module.exports = (app) => {
    app.route('/auth/login')
    .post(Auth.login);

    app.route('/auth/refresh')
    .post([Token.verifyUser],Auth.refresh);
}