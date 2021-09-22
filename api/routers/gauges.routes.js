const Gauges = require('../controllers/gauges.controller');
const Token = require('../middlewares/interceptor');

module.exports = (app) =>{
    app.route('/gauges')
    .post([Token.verifyUser], Gauges.lendDevices);

    app.route('/gauges/:id')
    .get(Gauges.getDevice);
}