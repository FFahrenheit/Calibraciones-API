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

        res.json({
            ok: true,
            equipo: details[0]
        });
    }catch(e){
        console.log(e);
        res.status(500).send({
            ok: false,
            error: e
        });
    }
}