const dailyExpired = require('../tasks/daily.expired');
const dailyNotice = require('../tasks/daily.notice');

module.exports = {
    dailyExpired: dailyExpired.dailyExpired,
    dailyNotice: dailyNotice.dailyNotice
};