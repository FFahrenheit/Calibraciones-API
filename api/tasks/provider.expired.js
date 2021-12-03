var Sql = require('../db/sql');

const { sendEmail } = require('../helpers/send.email');
const Templates = require('../helpers/email.templates');

exports.providerExpired = async () => {
    return new Promise(async (resolve) => {
        try {

            let query = `SELECT expiracion, nombre, id 
            FROM proveedores
            WHERE expiracion = CAST(GETDATE() AS DATE);`;

            let providers = await Sql.request(query);

            if(!providers || providers.length <= 0){
                return resolve(true);
            }

            query = `SELECT nombre, email FROM usuarios WHERE posicion = 'encargado'`;

            let result = await Sql.request(query);

            let emailList = result.map(u => u['email']);
            emailList = Array.from(new Set(emailList));

            let receivers = result.map(u => u['nombre']);
            
            const template = Templates.providersExpired(
                receivers,
                providers
            );
            let ok = await sendEmail(emailList, template);

            resolve(ok);

        } catch (e) {
            console.log('Error on task');
            console.log(e);
            return resolve(false);
        }
    });
}