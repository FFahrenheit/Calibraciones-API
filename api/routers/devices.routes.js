const Devices = require('../controllers/devices.controller');

module.exports = (app) => {
    app.route('/devices/all')
    .get(Devices.getDevices);

    app.route('/devices/next')
    .get(Devices.getNextDevices);

    app.route('/devices/process')
    .get(Devices.getProcessDevices);

    app.route('/devices/pending')
    .get(Devices.getPendingDevices);

    app.route('/devices/complete')
    .get(Devices.getAllDevices);

    app.route('/devices/available')
    .get(Devices.getAvailableDevices);
}