const { dailyNotice } = require('../tasks/daily.notice');
const { dailyExpired } = require('../tasks/daily.expired');
const { monthlyReport } = require('../tasks/monthly.report');
const { managerAdvise } = require('../tasks/manager.advise');
const { dailyBackup } = require('../tasks/daily.backup');
const { weeklyBackup } = require('../tasks/weekly.backup');
const { providerNotice } = require('../tasks/provider.notice');

exports.sendProvidersNotice = async(req, res) => {
    try {
        let ok = await providerNotice();
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

exports.forceDailyBackup = async (req, res) => {
    try {
        let ok = await dailyBackup();
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

exports.forceWeeklyBackup = async (req, res) => {
    try {
        let ok = await weeklyBackup();
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

