const Upload = require('../controllers/upload.controller');

module.exports = (app) => {
    app.route('/upload/ryr/:device/:id')
    .post(Upload.uploadRyr);

    app.route('/upload/certificate/:device/:id')
    .post(Upload.uploadCertificate);

    app.route('/upload/iso/:device/:name')
    .post(Upload.uploadISO);

    app.route('/upload/iso/:name')
    .post(Upload.uploadISOCertificate);

    app.route('/upload/resource/:device/:type')
    .post(Upload.uploadResource);
}