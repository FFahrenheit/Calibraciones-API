const fs = require('fs');

const tipo = 'Historial';
const path = '../../../../upload/Recursos/Historial'

let readFiles = async() =>{
    let files = fs.readdirSync(path);
    let queries = [];

    files.forEach(file => {
        let filename = tipo + "\\" + file;
        let device = file.substring(0,6);
        
        if(device.substring(0,3) == 'INT'){
            let query = 
            `INSERT INTO recursos(tipo, equipo, archivo) VALUES
            ('${tipo}','${device}','${filename}');`

            queries.push(query);

        }
    });

    let data = queries.join('\n');
    
    fs.writeFile('data.sql',data, (err)=>{
        if(err){
            console.log(err);
        }
    });

}

readFiles();