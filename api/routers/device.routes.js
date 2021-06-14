const Device = require('../controllers/device.controller');
const Token = require('../middlewares/interceptor')

module.exports = (app) => {
    app.route('/device/:id')
    .get(Device.getDevice);

    app.route('/device/status/:id')
    .put([Token.verifyUser],Device.updateStatus);

    app.route('/device/calibrated')
    .post([Token.verifyUser],Device.acceptCalibration);
}