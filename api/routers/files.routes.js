const Files = require('../controllers/files.controller');

module.exports = (app) =>{
    app.route('/files/:name')
    .get(Files.retrieveFiles);

    app.route('/file/:name')
    .get(Files.retrieveFile);

    app.route('/resource/:name')
    .get(Files.retrieveResource);
}