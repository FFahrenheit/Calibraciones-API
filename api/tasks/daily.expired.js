var Sql = require('../db/sql');

const { sendEmail } = require('../helpers/send.email');
const Templates = require('../helpers/email.templates');

exports.dailyExpired = async() =>{

    return new Promise(async(resolve)=>{
        try{
            let query = `SELECT id, descripcion, ubicacion, siguiente
            FROM equipos 
            WHERE siguiente = CAST(GETDATE() AS DATE) 
            AND estado = 'Calibración Vigente'`;
            
            let devices = await Sql.request(query);

            if(!devices || devices.length <= 0){
                return resolve(true);
            }

            query = `SELECT DISTINCT nombre, email
            FROM usuarios, responsables
            WHERE usuarios.username = responsables.usuario
            AND (responsables.equipo IN (
                SELECT id FROM equipos 
                WHERE siguiente = CAST(GETDATE() AS DATE)
                AND estado = 'Calibración Vigente'
            ) OR usuarios.posicion = 'responsable')`;

            let result = await Sql.request(query);

            query = `UPDATE equipos
            SET estado = 'Calibración Vencida',
            activo = 'Inactivo'
            WHERE siguiente < CAST(GETDATE() AS DATE) 
            AND estado = 'Calibración Vigente' AND activo = 'Activo'`;

            // await Sql.request(query);

            console.log(result);
            
            var template;

            let emailList = result.map(u => u['email']);
            emailList = Array.from(new Set(emailList));

            if(devices.length == 1){
                let receivers = result.map(u => u['nombre']);
                template = Templates.deviceExpired(receivers,devices[0]);
            }else{
                template = Templates.devicesExpired(devices);
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