const Users = require('../controllers/user.controller');
const Token = require('../middlewares/interceptor');

module.exports = (app) =>{
    app.route('/users')
    .get(Users.getUsers)
    .post(Users.addUser);

    app.route('/mandated')
    .get(Users.getManagers)
    .put(Users.updateManagers);

    app.route('/user/recover')
    .put([Token.verifyUser], Users.changePassword);

    app.route('/admin/:table/:id')
    .delete([Token.verifyUser], Users.deleteRecord);
}