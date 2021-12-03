const dailyExpired = require('../tasks/daily.expired');
const dailyNotice = require('../tasks/daily.notice');
const monthlyReport = require('../tasks/monthly.report');
const managerAdvise = require('../tasks/manager.advise');
const dailyBackup = require('../tasks/daily.backup');
const weeklyBackup = require('../tasks/weekly.backup');
const providerNotice = require('../tasks/provider.notice');
const providerExpired = require('../tasks/provider.expired');

module.exports = {
    dailyExpired: dailyExpired.dailyExpired,
    dailyNotice: dailyNotice.dailyNotice,
    monthlyReport: monthlyReport.monthlyReport,
    managerAdvise: managerAdvise.managerAdvise,
    dailyBackup: dailyBackup.dailyBackup,
    weeklyBackup: weeklyBackup.weeklyBackup,
    providerNotice: providerNotice.providerNotice,
    providerExpired: providerExpired.providerExpired
};