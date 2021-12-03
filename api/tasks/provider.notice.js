var Sql = require('../db/sql');

const { sendEmail } = require('../helpers/send.email');
const Templates = require('../helpers/email.templates');

exports.providerNotice = async () => {
    return new Promise(async (resolve) => {
        try {

            let query = `SELECT expiracion, nombre 
            FROM proveedores
            WHERE expiracion = DATEADD(d,20,CAST(GETDATE() AS DATE));`;

            let providers = await Sql.request(query);

            if(!providers || providers.length <= 0){
                return resolve(true);
            }

            query = `SELECT nombre, email FROM usuarios WHERE posicion = 'encargado'`;

            let result = await Sql.request(query);

            let emailList = result.map(u => u['email']);
            emailList = Array.from(new Set(emailList));

            let receivers = result.map(u => u['nombre']);
            
            let ok = 0;

            for (const p of providers) {
                let template = Templates.providerNotice(
                    receivers,
                    p['nombre'],
                    p['expiracion']
                );
    
                let status = await sendEmail(emailList, template);
                console.log(status);
                if(status){
                    ok += 1;
                }
            }

            resolve(ok == providers.length);

        } catch (e) {
            console.log('Error on task');
            console.log(e);
            return resolve(false);
        }
    });
}