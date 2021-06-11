const Tests = require('../controllers/tests.controller');

module.exports = (app) => {
    app.route('/tests/email')
    .get(Tests.testEmail);

    app.route('/tests/tasks/notice')
    .get(Tests.testNotice);
}