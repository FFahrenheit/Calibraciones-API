const Sql = require('../db/sql');
const jwt = require('jsonwebtoken');
const Identifcator = require('../middlewares/identificator')

require('dotenv').config();

exports.refresh = async(req,res) => {
    let username = Identifcator.getUser(req);

    try{

        let query = `SELECT * FROM dbo.usuarios WHERE username = '${ username }'`
        let response = await Sql.request(query);

        if(!response || response.length == 0){
            return res.json({
                ok: false,
                error: 'No se encontró el usuario'
            });
        }
        
        let user = response[0];

        let awtInfo = {
            username : user.username,
        };

        const token = jwt.sign(awtInfo, process.env.TOKEN_SEED);

        return res.json({
            ok: true,
            token,
            usuario : {
                username: user.username,
                posicion: user.posicion,
                nombre: user.nombre,
                email: user.email, 
            }
        });
    }
    catch{
        console.log(e);
        res.status(500).send({
            ok : false,
            error: e
        });
    }
}

exports.login = async(req,res) => {
    let { username, password } = req.body;

    username = Sql.parseField(username);
    
    try{
        let query = `SELECT * FROM dbo.usuarios WHERE username = '${ username }'`
        let response = await Sql.request(query);

        if(!response || response.length == 0){
            res.json({
                ok: false,
                error: 'No se encontró el usuario'
            });
        }
        
        let user = response[0];

        if(user.password == password){
            let awtInfo = {
                username : user.username,
            };

            const token = jwt.sign(awtInfo, process.env.TOKEN_SEED);

            res.json({
                ok: true,
                token,
                usuario : {
                    username: user.username,
                    posicion: user.posicion,
                    nombre: user.nombre,
                    email: user.email, 
                }
            });
        }else{
            res.json({
                ok: false,
                error: 'Usuario o contraseña incorrectas'
            });
        }

        
    }catch(e){
        console.log(e);
        res.status(500).send({
            ok : false,
            error: e
        });
    }

}