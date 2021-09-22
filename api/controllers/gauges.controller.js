const Sql = require('../db/sql');
const Identificator = require('../middlewares/identificator');

exports.returnDevices = async(req, res) =>{
    try{
        let devices = req.body.devices.map(d => `'${ d }'`).toString();
        let notes = req.body.notes.replace("'","''");
        let status = req.body.status;
        let returner = req.body.operator.replace("'","''");
        let receiver = Identificator.getUser(req);

        let query = `UPDATE prestamos 
        SET estado = '${status}',
        notas = '${notes}',
        retorna = 'operador',
        operadorRegresa = '${returner}',
        fechaRetorno = CURRENT_TIMESTAMP,        
        recibe = '${receiver}'
        WHERE estado = 'Entregado'
        AND equipo IN (${devices})`;

        await Sql.request(query);

        res.json({
            ok: true
        });
        
    }catch(e){
        console.log(e);
        res.status(500).send({
            ok: false,
            error: e
        });
    }
}

exports.lendDevices = async(req, res) => {
    try{
        let devices = req.body.devices;
        let borrows = [];
        devices.forEach(d => {
            borrows.push({
                equipo: d,
                estado: 'Entregado',
                fechaCompromiso: new Date().toISOString().split('T')[0],
                //fechEntrega: Automático,
                entrega: Identificator.getUser(req),
                operador: req.body.operator,
                prestatario: 'operador',
            });
        });
        
        let query = 'INSERT INTO prestamos() VALUES ?';

        await Sql.query(query, borrows);

        res.json({
            ok: true
        });
        
    }catch(e){
        console.log(e);
        res.status(500).send({
            ok: false,
            error: e
        });
    }
}

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