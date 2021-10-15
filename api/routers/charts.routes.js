const Charts = require('../controllers/charts.controller');

module.exports = (app) =>{
    app.route('/charts/next')
    .get(Charts.getNextDevices);

    app.route('/charts/done')
    .get(Charts.getDoneCalibrations);
}