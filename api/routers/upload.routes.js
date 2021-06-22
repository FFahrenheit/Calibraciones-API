const Upload = require('../controllers/upload.controller');

module.exports = (app) => {
    app.route('/upload/ryr/:device/:id')
    .post(Upload.uploadRyr);

    app.route('/upload/certificate/:device/:id')
    .post(Upload.uploadCertificate);
}