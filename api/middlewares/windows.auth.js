// const nodeSSPI = require('node-sspi');
const { sso } = require('node-expose-sspi');

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
    handleWindowsErrors
};