const Sql = require('../db/sql');
const fs = require('fs');

exports.dailyBackup = async () => {

    return new Promise(async (resolve) => {
        try {
            const date = new Date();

            const filename = getFilename(date);

            const route = `C:\\backup\\Calibraciones\\${filename}`;

            const query = `BACKUP DATABASE calibraciones 
            TO DISK = '${route}' WITH INIT`;

            await Sql.request(query);

            //Delete old file
            date.setDate(date.getDate() - 7);

            const deletePath = `C:\\backup\\Calibraciones\\${getFilename(date)}`;
            console.log('Delete file: ' + deletePath);
            fs.unlink(deletePath, err => {
                if (err) {
                    resolve(err.code == 'ENOENT');
                } else {
                    resolve(true);
                }
            });

            resolve(true);
        } catch (e) {
            console.log(e);
            resolve(false);
        }
    });

}

let getFilename = (date) => {
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const day = String(date.getDate()).padStart(2, '0');

    return `calibraciones_${year}-${month}-${day}.bak`
}