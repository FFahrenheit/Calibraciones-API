const Files = require('../controllers/files.controller');

module.exports = (app) =>{
    app.route('/files/:name')
    .get(Files.retrieveFile);
}