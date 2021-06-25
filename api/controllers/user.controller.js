const Sql = require('../db/sql');

exports.getUsers = async(req, res) =>{
    try{
        let query = "SELECT username, nombre as name FROM usuarios";
        let usuarios = await Sql.request(query);
        
        return res.json({
            ok: true, 
            usuarios
        });

    }catch(e){
        console.log(e);
        res.status(500).send({
            ok : false,
            error: e
        });
    }
}