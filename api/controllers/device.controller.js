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

        details = details[0]

        query = `SELECT id, nombre FROM verificadores WHERE equipo = '${ id }'`;
        verificadores = await Sql.request(query);

        details['verificadores'] = verificadores;

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