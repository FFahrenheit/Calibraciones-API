const Sql = require('../db/sql');


exports.getNextDevices = async(req, res) =>{
    try{
        
    }catch(e){
        console.log(e);
        res.status(500).send({
            ok: false,
            error: e
        });
    }
}