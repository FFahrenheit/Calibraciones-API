const Tests = require('../controllers/tests.controller');

module.exports = (app) => {
    app.route('/tests/email')
    .get(Tests.testEmail);

    app.route('/tests/tasks/notice')
    .get(Tests.testNotice);
    
    app.route('/tests/tasks/expired')
    .get(Tests.testExpired);

    app.route('/tests/query')
    .get(Tests.testQueries);

    app.route('/upload/:id')
    .post(Tests.testUpload);
}