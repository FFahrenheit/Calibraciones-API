const Sql = require('../db/sql');
const jwt = require('jsonwebtoken');
const Identifcador = require('../middlewares/identificator')

require('dotenv').config();

exports.refresh = async(req,res) => {
    console.log(Identifcador.getUser(req));
    res.json({
        'date':Date.now()
    });
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
        res.json({
            ok : false,
            error: e
        });
    }

}