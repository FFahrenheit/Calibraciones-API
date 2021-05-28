const Device = require('../controllers/device.controller');

module.exports = (app) => {
    app.route('/device/:id')
    .get(Device.getDevice);
}