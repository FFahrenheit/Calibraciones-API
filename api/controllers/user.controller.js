const Sql = require('../db/sql');

exports.updateManagers = async(req, res) =>{
    try{
        let users = req.body.users;
        
        users = users.map(u => "'" + u + "'");
        users = users.toString();

        console.log(users);
        let query = `UPDATE usuarios SET posicion = 'usuario' WHERE posicion = 'encargado'`;
 
        await Sql.request(query);

        query = `UPDATE usuarios SET posicion = 'encargado' WHERE username IN (${ users })`;

        await Sql.request(query);
        
        return res.json({
            ok: true
        });

    }catch(e){
        console.log(e);
        res.status(500).send({
            ok : false,
            error: e
        });
    }
}

exports.getManagers = async(req, res) =>{
    try{
        let query = `SELECT username, nombre as name, email 
        FROM usuarios
        WHERE posicion != 'usuario'`;
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

exports.getUsers = async(req, res) =>{
    try{
        let query = "SELECT username, nombre as name, email FROM usuarios";
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