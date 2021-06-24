const Sql = require('../db/sql');

exports.getDetails = async(req, res) =>{
    const id = req.params.id;
    
    try{
        let query = `SELECT *,
        (SELECT nombre FROM usuarios WHERE username = equipos.prestatario) as nombrePrestatario 
        FROM equipos WHERE id = '${ id }'`;

        let details = await Sql.request(query);
        
        if(!details || details.length == 0){
            return res.json({
                ok: false,
                error: 'No se encontro el equipo'
            });
        }

        details = details[0];

        query = `SELECT usuarios.username as username, usuarios.nombre as nombre 
        FROM usuarios, responsables 
        WHERE responsables.usuario = usuarios.username 
        AND responsables.equipo = '${ id }'`;
        responsables = await Sql.request(query);

        details['responsables'] = responsables;

        details['prestamos'] = new Array(5);

        res.json({
            ok: true,
            equipo: details
        });
    }catch(e){
        console.log(e);
        res.status(500).send({
            ok: false,
            error: e
        });
    }
}