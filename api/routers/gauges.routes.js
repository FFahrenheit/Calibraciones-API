const Gauges = require('../controllers/gauges.controller');

module.exports = (app) =>{
    app.route('/gauges/get/:id')
    .get(Gauges.getDevice);

}