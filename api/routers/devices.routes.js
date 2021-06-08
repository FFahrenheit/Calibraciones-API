const Devices = require('../controllers/devices.controller');

module.exports = (app) => {
    app.route('/devices/all')
    .get(Devices.getDevices);

    app.route('/devices/next')
    .get(Devices.getNextDevices);

    app.route('/devices/process')
    .get(Devices.getProcessDevices);
}