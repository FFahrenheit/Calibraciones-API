// const nodeSSPI = require('node-sspi');
const { sso } = require('node-expose-sspi');

let verifyWindowsUser = sso.auth();

module.exports = {
    verifyWindowsUser
};