const dailyExpired = require('../tasks/daily.expired');
const dailyNotice = require('../tasks/daily.notice');
const monthlyReport = require('../tasks/monthly.report');
const managerAdvise = require('../tasks/manager.advise');

module.exports = {
    dailyExpired: dailyExpired.dailyExpired,
    dailyNotice: dailyNotice.dailyNotice,
    monthlyReport: monthlyReport.monthlyReport,
    managerAdvise: managerAdvise.managerAdvise
};