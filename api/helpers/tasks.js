const dailyExpired = require('../tasks/daily.expired');
const dailyNotice = require('../tasks/daily.notice');
const monthlyReport = require('../tasks/monthly.report');

module.exports = {
    dailyExpired: dailyExpired.dailyExpired,
    dailyNotice: dailyNotice.dailyNotice,
    monthlyReport: monthlyReport.monthlyReport
};