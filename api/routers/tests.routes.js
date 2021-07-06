const Tests = require('../controllers/tests.controller');

module.exports = (app) => {
    app.route('/tests/email')
    .get(Tests.testEmail);

    app.route('/tests/tasks/notice')
    .get(Tests.testNotice);
    
    app.route('/tests/tasks/expired')
    .get(Tests.testExpired);

    app.route('/tests/tasks/monthly')
    .get(Tests.testMonthly);

    app.route('/tests/tasks/manager')
    .get(Tests.testManager);

    app.route('/tests/query')
    .get(Tests.testQueries);

    app.route('/tests/upload/:id')
    .post(Tests.testUpload);
}