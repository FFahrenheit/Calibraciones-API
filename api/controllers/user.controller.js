const Sql = require('../db/sql');
const Identificator = require('../middlewares/identificator');

exports.deleteRecord = async(req, res) =>{
    try{
        let { table, id } = req.params;
        
        table = Sql.parseField(table);
        id = Sql.parseField(id);

        let query = `DELETE FROM "${table}" WHERE id = '${id}'`;

        await Sql.request(query);

        return res.json({
            ok: true
        });
        
    }catch(e){
        console.log(e);
        return res.status(500).send({
            ok : false,
            error: e
        });
    }
}

exports.addUser = async(req, res) =>{
    try{
        let body = req.body.user;
        console.log(body);

        let query = `INSERT INTO usuarios() VALUES ?`;

        await Sql.query(query,body);

        return res.json({
            ok: true
        });
        
    }catch(e){
        console.log(e);
        return res.status(500).send({
            ok : false,
            error: e
        });
    }
}

exports.changePassword = async(req, res) =>{
    try{
        const user = Identificator.getUser(req);
        const password = req.body.password;
        
        let query = `UPDATE usuarios SET password = '${password}' WHERE username = '${user}'`;

        await Sql.request(query);
        
        res.json({
            ok: true,
        });
    }catch(e){
        console.log(e);
        res.status(500).send({
            ok : false,
            error: e
        });
    }
}

exports.updateManagers = async(req, res) =>{
    try{
        let users = req.body.users;

        let promises = [ ];

        await Sql.request(
            `UPDATE usuarios 
            SET posicion = 'usuario' 
            WHERE posicion != 'usuario'`);

        users.forEach(u=>{
            promises.push(Sql.request(`
            UPDATE usuarios 
            SET posicion = '${ u.posicion }'
            WHERE username = '${ u.username }'`));
        });

        await Promise.all(promises);
        
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
        let query = `SELECT username, nombre as name, email, posicion 
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