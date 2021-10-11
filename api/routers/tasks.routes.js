const Tasks = require('../controllers/tasks.controller');

module.exports = (app) => {
    app.route('/tasks/expired')
    .get(Tasks.sendDailyExpired);

    app.route('/tasks/notice')
    .get(Tasks.sendDailyNotice);

    app.route('/tasks/monthly')
    .get(Tasks.sendMonthlyReport);

    app.route('/tasks/advise')
    .get(Tasks.sendManagerAdvise);

    app.route('/tasks/backup/daily')
    .get(Tasks.forceDailyBackup);

    app.route('/tasks/backup/weekly')
    .get(Tasks.forceWeeklyBackup);
}