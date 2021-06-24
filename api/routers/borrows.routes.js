const Borrows = require('../controllers/borrows.controller');

module.exports = (app) =>{
    app.route('/borrows/:id')
    .get(Borrows.getDetails);
}