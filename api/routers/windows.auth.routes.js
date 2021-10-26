const WindowsAuth = require('../controllers/windows.auth.controller');
const WinAuth = require('../middlewares/windows.auth');

module.exports = (app) => {
    app.route('/auth/win')
    .get([WinAuth.verifyWindowsUser, WinAuth.handleWindowsErrors], WindowsAuth.loginWithWindows);
}