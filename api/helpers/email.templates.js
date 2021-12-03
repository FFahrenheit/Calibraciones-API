const { deviceNotice } = require('../email/controllers/device.notice');
const { devicesNotice } = require('../email/controllers/devices.notice');
const { deviceExpired } = require('../email/controllers/device.expired');
const { devicesExpired } = require('../email/controllers/devices.expired');
const { restorePassword } = require('../email/controllers/password.restore');
const { monthlyReport } = require('../email/controllers/monthly.report');
const { providerNotice } = require('../email/controllers/providers.notice');

module.exports = {
    deviceNotice,
    devicesNotice,
    deviceExpired,
    devicesExpired,
    restorePassword,
    monthlyReport,
    providerNotice
}