const Devices = require('../controllers/devices.controller');

module.exports = (app) => {
    app.route('/devices/all')
    .get(Devices.getDevices);
}