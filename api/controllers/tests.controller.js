const { sendEmail } = require('../helpers/send.email');
const path = require('path');

const { dailyNotice } = require('../tasks/daily.notice');
const { dailyExpired } = require('../tasks/daily.expired');
const { monthlyReport } = require('../tasks/monthly.report');
const { managerAdvise } = require('../tasks/manager.advise');
const { dailyBackup } = require('../tasks/daily.backup');
const { weeklyBackup } = require('../tasks/weekly.backup');

const Sql = require('../db/sql');
const Upload = require('../middlewares/upload');

exports.getWindowsData = async (req, res) => {
    try {
        console.log({
            user: req.connection.user,
            id: req.connection.userSid,
            groups: req.connection.userGroups
        });
        return res.json({
            ok: true,
            user: req.connection.user,
            id: req.connection.userSid,
            groups: req.connection.userGroups
        });
    } catch (e) {
        return res.status(500).send({
            ok: false,
            error: e
        });
    }
}

exports.testWeekBackup = async(req, res) =>{
    console.log('THIS IS A TEST REQUEST');
    let ok = await weeklyBackup();
    
    return res.json({
        ok
    });    
}

exports.testBackup = async(req, res) =>{
    console.log('THIS IS A TEST REQUEST');
    let ok = await dailyBackup();
    
    return res.json({
        ok
    });    
}

exports.testManager = async(req, res) =>{
    console.log('THIS IS A TEST REQUEST');
    let ok = await managerAdvise();
    
    return res.json({
        ok
    });    
}

exports.testMonthly = async(req, res) =>{
    console.log('THIS IS A TEST REQUEST');
    let ok = await monthlyReport();
    
    return res.json({
        ok
    });
}

exports.testUpload = async (req, res) => {
    console.log('THIS IS A TEST REQUEST');
    try {
        await Upload.addRyr(req, res);
        console.log(req.file);
    } catch (error) {
        console.log(error);
    } finally {
        res.json({
            ok: true
        });
    }
}

exports.testQueries = async (req, res) => {
    console.log('THIS IS A TEST REQUEST');
    const nombre = Math.random(0, 9999999999);
    let id = await Sql.insertRecordset(`INSERT INTO verificadores(nombre,equipo) VALUES ('${nombre}','INT777')`);
    console.log(id);
    return res.json({
        ok: true,
        id
    });
}

exports.testExpired = async (req, res) => {
    console.log('THIS IS A TEST REQUEST');
    let ok = await dailyExpired();

    return res.json({
        ok
    });
}

exports.testNotice = async (req, res) => {
    console.log('THIS IS A TEST REQUEST');
    let ok = await dailyNotice();

    return res.json({
        ok
    });
}

exports.testEmail = async (req, res) => {
    console.log('THIS IS A TEST REQUEST');

    let template = {
        subject: 'Test',
        html: '<p>Nodemailer working!</p><p>Dismiss this email</p>'
    };

    let email = 'i.lopez@mx.interplex.com';

    let response = await sendEmail(email, template);

    console.log(response);

    res.json({
        ok: true,
        response
    });
}

exports.returnIco = (req, res) => {
    return res.sendFile(path.resolve('api/assets/logo.ico'), (err) => {
        if (err) {
            console.log(err);
            res.json({
                ok: false,
                message: err
            });
        }
    });
}