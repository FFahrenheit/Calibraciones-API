var Sql = require('../db/sql');

const { sendEmail } = require('../helpers/send.email');
const Templates = require('../helpers/email.templates');

exports.monthlyReport = async () => {
    return new Promise(async (resolve) => {
        try {

            const months = ['Enero','Febrero','Marzo','Abril','Mayo','Junio',
            'Julio','Agosto','Septiembre','Octubre','Noviembre','Diciembre'];
            let date = new Date();
        
            let month = date.getMonth();
            month = month == 11 ? 1 : month + 2;
            let year = date.getFullYear();
            if(month == 1){
                year += 1;
            }
        
            let query = `SELECT id, descripcion, ubicacion, siguiente FROM
            equipos WHERE MONTH(siguiente) = '${month}'
            AND YEAR(siguiente) = '${year}'
            AND activo = 'Activo'
            AND estado = 'Calibración Vigente'
            AND LEFT(id,3) = 'INT'
            ORDER BY siguiente ASC`;
        
            let devices = await Sql.request(query);

            if(!devices || devices.length <= 0){
                return resolve(true);
            }

            query = `SELECT nombre, email FROM usuarios WHERE posicion = 'encargado'`;

            let result = await Sql.request(query);

            let emailList = result.map(u => u['email']);
            emailList = Array.from(new Set(emailList));

            let receivers = result.map(u => u['nombre']);
            let template = Templates.monthlyReport(
                devices,
                months[parseInt(month)-1] + ' ' + year,
                receivers
            );

            let status = await sendEmail(emailList,template);
            resolve(status);

        } catch (e) {
            console.log('Error on task');
            console.log(e);
            return resolve(false);
        }
    });
}