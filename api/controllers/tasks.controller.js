const Tasks = require('../helpers/tasks');

exports.sendProvidersExpired = async(req, res) => {
    try {
        let ok = await Tasks.providerExpired();
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

exports.sendProvidersNotice = async(req, res) => {
    try {
        let ok = await Tasks.providerNotice();
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
        let ok = await Tasks.dailyNotice();
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
        let ok = await Tasks.dailyExpired();
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
        let ok = await Tasks.monthlyReport();
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
        let ok = await Tasks.managerAdvise();
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
        let ok = await Tasks.dailyBackup();
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
        let ok = await Tasks.weeklyBackup();
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

