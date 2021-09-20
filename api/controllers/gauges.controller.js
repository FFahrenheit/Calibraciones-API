const Sql = require('../db/sql');

exports.getDevice = async(req, res) => {
    try{
        let number = Number(req.params.id);

        if(isNaN(number)){
           return res.json({
               ok: false,
               error: 'ID inválido'
           }) 
        }

        let query = `SELECT * 
            FROM equipos 
            WHERE LEFT(id,3) = 'FIX'
            AND CAST 
                (RIGHT(id, CHARINDEX('-', REVERSE(id) + '-') - 1) 
                AS NUMERIC) = ${number}`;

        let result = await Sql.request(query);

        if(!result || result.length == 0){
            return res.json({
                ok: false,
                error: 'No se encontró el equipo especificado'
            });
        }

        return res.json({
            ok: true,
            device: result[0]
        });

    }catch(e){
        console.log(e);
        res.status(500).send({
            ok: false,
            error: e
        });
    }
}