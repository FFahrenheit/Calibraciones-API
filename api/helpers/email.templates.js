const { deviceNotice } = require('../email/controllers/device.notice');
const { devicesNotice } = require('../email/controllers/devices.notice');
const { deviceExpired } = require('../email/controllers/device.expired');
const { devicesExpired } = require('../email/controllers/devices.expired');
const { restorePassword } = require('../email/controllers/password.restore');

module.exports = {
    deviceNotice,
    devicesNotice,
    deviceExpired,
    devicesExpired,
    restorePassword
}