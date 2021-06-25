const Borrows = require('../controllers/borrows.controller');
const Token = require('../middlewares/interceptor');

module.exports = (app) =>{
    app.route('/borrows/:id')
    .get(Borrows.getDetails);

    app.route('/borrow')
    .post([Token.verifyUser],Borrows.borrowDevice);
}