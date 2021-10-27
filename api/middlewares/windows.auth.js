// const nodeSSPI = require('node-sspi');
const { sso } = require('node-expose-sspi');
const cors = require('cors');
const session = require('express-session');

let useCors = cors((req, callback) => {
    const options = {
        credentials: true,
        origin: req.headers.origin
    };
    callback(null, options);
});

let useSession = session({
    secret: 'MySecret',
    resave: false,
    saveUninitialized: true
});



let verifyWindowsUser = sso.auth({
    useSession: false,
    useGroups: false,
    forceNTLM: true,
    allowsAnonymousLogon: true,
    allowsGuest: true
});

let handleWindowsErrors = (err, req, res, next) => {
    if(err){
        console.log(err);
    }
    next();
}

module.exports = {
    verifyWindowsUser,
    handleWindowsErrors,
    useCors,
    useSession
};