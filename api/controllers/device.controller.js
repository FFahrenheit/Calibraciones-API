const Sql = require('../db/sql');

exports.getDevice = async(req, res) => {
    const id = req.params.id;
    
    try{
        let query = `SELECT * FROM equipos WHERE id = '${ id }'`;

        let details = await Sql.request(query);
        
        if(!details || details.length == 0){
            return res.json({
                ok: false,
                error: 'No se encontro el equipo'
            });
        }

        details = details[0];

        query = `SELECT id, nombre FROM verificadores WHERE equipo = '${ id }'`;
        verificadores = await Sql.request(query);

        details['verificadores'] = verificadores;

        query = `SELECT usuarios.username as username, usuarios.nombre as nombre 
        FROM usuarios, responsables 
        WHERE responsables.usuario = usuarios.username 
        AND responsables.equipo = '${ id }'`;
        responsables = await Sql.request(query);

        details['responsables'] = responsables;

        query = `SELECT id, fecha, calibrador, verificador, 
        usuarios.nombre as verifico
        FROM calibraciones, usuarios
        WHERE equipo = '${ id }' 
        AND usuarios.username = calibraciones.verificador
        ORDER BY fecha DESC`
        calibraciones = await Sql.request(query);

        details['calibraciones'] = calibraciones;

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