const WindowsAuth = require('../controllers/windows.auth.controller');
const WinAuth = require('../middlewares/windows.auth');

module.exports = (app) => {
    app.route('/auth/win')
        .get([WinAuth.verifyWindowsUser, WinAuth.handleWindowsErrors], WindowsAuth.loginWithWindows);

    app.route('/auth/sso')
        .get([
            WinAuth.useCors,
            WinAuth.useSession,
            WinAuth.verifyWindowsUser
        ],
            WindowsAuth.loginWithSSO)
        .post([
            WinAuth.useCors,
            WinAuth.useSession
        ],
            WindowsAuth.loginWithCredentials
        );
}