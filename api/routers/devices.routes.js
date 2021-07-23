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

    app.route('/devices/borrowed')
    .get(Devices.getBorrowedDevices);

    app.route('/devices/inactive')
    .get(Devices.getToUpdateDevices);

    app.route('/devices/attach')
    .get(Devices.getAttachmentDevices)

    app.route('/devices/parameter/:arg')
    .get(Devices.getParameter);
}