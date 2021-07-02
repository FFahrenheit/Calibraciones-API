const Users = require('../controllers/user.controller');
const Token = require('../middlewares/interceptor');

module.exports = (app) =>{
    app.route('/users')
    .get(Users.getUsers);

    app.route('/mandated')
    .get(Users.getManagers)
    .put(Users.updateManagers);

    app.route('/user/recover')
    .put([Token.verifyUser], Users.changePassword);
}