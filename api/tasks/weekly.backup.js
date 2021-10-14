const Sql = require('../db/sql');

exports.weeklyBackup = async() =>{

    return new Promise(async(resolve)=>{
        try{
            const date = new Date();
            const year = date.getFullYear();
            const month = String(date.getMonth()+1).padStart(2,'0');
            const day = String(date.getDate()).padStart(2,'0');
            const filename = `${year}-${month}-${day}_calibraciones.bak`
            const route = `C:\\backup\\Calibraciones\\Historial\\${ filename }`;
            const query = `BACKUP DATABASE calibraciones 
            TO DISK = '${ route }' WITH INIT`;
        
            await Sql.request(query);

            resolve(true);
        }catch(e){
            console.log(e);
            resolve(false);
        }
    });

}