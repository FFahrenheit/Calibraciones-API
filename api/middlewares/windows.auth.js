const nodeSSPI = require('node-sspi');

let verifyWindowsUser = (req, res, next) => {
    let windowsUser = new nodeSSPI({
        retrieveGroups: true
    });

    windowsUser.authenticate(req, res, err => {
        console.log('Error: ' + err);
        next();
        res.finished || next();
    });
}

module.exports = {
    verifyWindowsUser
};