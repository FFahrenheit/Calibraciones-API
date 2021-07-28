const Sql = require('../db/sql');

exports.dailyBackup = async() =>{

    return new Promise(async(resolve)=>{
        try{
            const route = `C:\\backup\\Calibraciones\\calibraciones.bak`;
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