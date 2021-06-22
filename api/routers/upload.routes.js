const Upload = require('../controllers/upload.controller');

module.exports = (app) => {
    app.route('/upload/ryr/:device/:id')
    .post(Upload.uploadRyr);
}