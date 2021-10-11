const { sendEmail } = require('../helpers/send.email');

const { dailyNotice } = require('../tasks/daily.notice');
const { dailyExpired } = require('../tasks/daily.expired');
const { monthlyReport } = require('../tasks/monthly.report');
const { managerAdvise } = require('../tasks/manager.advise');
// const { dailyBackup } = require('../tasks/daily.backup');
// const { weeklyBackup } = require('../tasks/weekly.backup');

exports.sendDailyNotice = async (req, res) => {
    try {
        let ok = await dailyNotice();
        return res.json({
            ok
        });
    } catch (e) {
        console.log(e);
        res.status(500).send({
            ok: false,
            error: e
        });
    }
}

exports.sendDailyExpired = async (req, res) => {
    try {
        let ok = await dailyExpired();
        return res.json({
            ok
        });
    } catch (e) {
        console.log(e);
        res.status(500).send({
            ok: false,
            error: e
        });
    }
}

exports.sendMonthlyReport = async (req, res) => {
    try {
        let ok = await monthlyReport();
        return res.json({
            ok
        });
    } catch (e) {
        console.log(e);
        res.status(500).send({
            ok: false,
            error: e
        });
    }
}

exports.sendManagerAdvise = async (req, res) => {
    try {
        let ok = await managerAdvise();
        return res.json({
            ok
        });
    } catch (e) {
        console.log(e);
        res.status(500).send({
            ok: false,
            error: e
        });
    }
}