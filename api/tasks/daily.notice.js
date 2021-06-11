var Sql = require('../db/sql');

const { sendEmail } = require('../helpers/send.email');
const Templates = require('../helpers/email.templates');

exports.dailyNotice = async() =>{

    return new Promise(async(resolve)=>{
        try{
            let query = `SELECT id, descripcion, aviso, ubicacion 
            FROM equipos
            WHERE aviso = CAST(GETDATE() AS DATE)`;  
            
            let devices = await Sql.request(query);

            if(!devices || devices.length <= 0){
                return resolve(true);
            }

            query = `SELECT DISTINCT nombre, email
            FROM usuarios, responsables
            WHERE usuarios.username = responsables.usuario
            AND (responsables.equipo IN (
                SELECT id FROM equipos 
                WHERE aviso = CAST(GETDATE() AS DATE)
            ) OR usuarios.posicion = 'responsable')`;

            let result = await Sql.request(query);

            console.log(result);
            
            var template;

            let emailList = result.map(u => u['email']);
            emailList = Array.from(new Set(emailList));

            if(devices.length == 1){
                let receivers = result.map(u => u['nombre']);
                template = Templates.deviceNotice(receivers,devices[0]);
            }else{
                template = Templates.devicesNotice(devices);
            }

            let status = await sendEmail(emailList,template);
            resolve(status);

        }catch(e){
            console.log('Error on task');
            console.log(e);
            return resolve(false);
        }
    });

}