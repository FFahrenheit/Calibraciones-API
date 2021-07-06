var Sql = require('../db/sql');

const { sendEmail } = require('../helpers/send.email');
const Templates = require('../helpers/email.templates');

const note = `
<span style="font-weight: 600;
color: rgb(240, 0, 0);
font-size: 18px;
background-color: yellow;
text-decoration: underline;
text-align: center;
margin-bottom: 100px;">
    Esta es una copia del correo enviado hace dos días a los
    encargados
</span>
`;

exports.managerAdvise = async() =>{

    return new Promise(async(resolve)=>{
        try{
            let query = `SELECT id, descripcion, ubicacion, siguiente
            FROM equipos 
            WHERE siguiente = 
            DATEADD(d,-2,CAST(GETDATE() AS DATE)) 
            AND estado = 'Calibración Vencida'
            AND activo = 'Activo'`;
            
            let devices = await Sql.request(query);

            if(!devices || devices.length <= 0){
                return resolve(true);
            }

            query = `SELECT DISTINCT nombre, email
            FROM usuarios, responsables
            WHERE usuarios.username = responsables.usuario
            AND (responsables.equipo IN (
                SELECT id FROM equipos 
                WHERE siguiente = DATEADD(d,-2,CAST(GETDATE() AS DATE)) 
                AND estado = 'Calibración Vencida'
                AND activo = 'Activo'
            ) OR usuarios.posicion = 'encargado')`;

            let result = await Sql.request(query);

            console.log(result);
            
            var template;
            
            query = `SELECT DISTINCT nombre, email
            FROM usuarios WHERE posicion = 'gerente'`;

            let correos = await Sql.request(query);

            let emailList = correos.map(u => u['email']);
            emailList = Array.from(new Set(emailList));

            if(devices.length == 1){
                let receivers = result.map(u => u['nombre']);
                template = Templates.deviceExpired(receivers,devices[0]);
            }else{
                template = Templates.devicesExpired(devices);
            }

            template.html = template.html.replace('<body>','<body>' + note);
            template.subject = '[AVISO 2 DÍAS] ' + template.subject;

            let status = await sendEmail(emailList,template);
            resolve(status);
            
        }catch(e){
            console.log('Error on task');
            console.log(e);
            return resolve(false);
        }
    });
}