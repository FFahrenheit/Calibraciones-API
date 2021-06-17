const { sendEmail } = require('../helpers/send.email');
const { dailyNotice } = require('../tasks/daily.notice');
const { dailyExpired } = require('../tasks/daily.expired'); 

exports.testExpired = async(req, res) =>{
    console.log('THIS IS A TEST REQUEST');
    let ok = await dailyExpired();

    return res.json({
        ok
    });
}

exports.testNotice = async(req, res) =>{
    console.log('THIS IS A TEST REQUEST');
    let ok = await dailyNotice();

    return res.json({
        ok
    });
}

exports.testEmail = async(req, res) =>{
    console.log('THIS IS A TEST REQUEST');
    
    let template = {
        subject: 'Test',
        html: '<p>Nodemailer working!</p><p>Dismiss this email</p>'
    };

    let email = 'i.lopez@mx.interplex.com';

    let response = await sendEmail(email,template);

    console.log(response);

    res.json({
        ok: true,
        response
    });
}