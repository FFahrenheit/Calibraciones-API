const Providers = require('../controllers/providers.controller');

module.exports = (app)=>{
    app.route('/providers')
    .get(Providers.getProviders)
    .put(Providers.updateProviders);
}