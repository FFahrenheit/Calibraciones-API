const fs = require('fs');

const tipo = 'Historial';
const path = '../../../../upload/Recursos/Historial'

let readFiles = async () => {
    let files = fs.readdirSync(path);
    let queries = [];
    let data = [];

    files.forEach(file => {
        let filename = tipo + "\\" + file;

        let id = file.substring(0, 3);

        let device = file.substring(4).substring(0, file.lastIndexOf(id) - 1);

        if (device && device.substring(0, 3) == 'FIX') {
            let query = 
            `INSERT INTO recursos(tipo, equipo, archivo) VALUES
            ('${tipo}',
            (SELECT TOP 1 id 
                FROM equipos 
                WHERE LEFT(id,3) = 'FIX'
                AND RIGHT(id, CHARINDEX('-', REVERSE(id) + '-') - 1) = '${id}'),
            '${filename}');`

            let str = `${id} => ${file} => ${device}`;
            
            data.push(str);
            queries.push(query);
        }

    });

    let dataW = data.join('\n');
    let queriesW = queries.join('\n');

    fs.writeFile('data.txt', dataW, (err) => {
        if (err) {
            console.log(err);
        }
    });

    fs.writeFile('data.sql', queriesW, (err) => {
        if (err) {
            console.log(err);
        }
    });

}

readFiles();