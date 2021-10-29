const Charts = require('../controllers/charts.controller');

module.exports = (app) =>{
    app.route('/charts/next')
    .get(Charts.getNextDevices);

    app.route('/charts/done')
    .get(Charts.getDoneCalibrations);

    app.route('/charts/borrows')
    .get(Charts.getBorrowsMovement);

    app.route('/charts/comparison')
    .get(Charts.getCalibrationComparison);
}