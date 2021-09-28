const Sql = require('../db/sql');
const Identificator = require('../middlewares/identificator');

exports.getDetails = async (req, res) => {
    try {
        const number = req.params.id;

        if (isNaN(number)) {
            return res.json({
                ok: false,
                error: 'ID inválido'
            });
        }

        let query = `SELECT *,
        (SELECT nombre FROM usuarios WHERE username = equipos.prestatario) as nombrePrestatario,
        (SELECT TOP 1 operador FROM prestamos WHERE equipo = equipos.id ORDER BY ID DESC) as operador
        FROM equipos 
        WHERE LEFT(id,3) = 'FIX'
        AND CAST 
            (RIGHT(id, CHARINDEX('-', REVERSE(id) + '-') - 1) 
            AS NUMERIC) = ${number}`;

        let result = await Sql.request(query);

        console.log(result);

        if (!result || result.length == 0) {
            return res.json({
                ok: false,
                error: 'No se encontró el equipo especificado'
            });
        }

        let details = result[0];
        const id = result[0]['id'];

        query = `SELECT id, estado, fechaEntrega, fechaRetorno, notas, fechaCompromiso, 
        operador, operadorRegresa,   
        (SELECT nombre FROM usuarios WHERE username = prestamos.prestatario) as nombrePrestatario,
        (SELECT nombre FROM usuarios WHERE username = prestamos.entrega) as nombreEntrega,
        (SELECT nombre FROM usuarios WHERE username = prestamos.recibe) as nombreRecibe,
        (SELECT nombre FROM usuarios WHERE username = prestamos.retorna) as nombreRetorna
        FROM prestamos WHERE equipo = '${id}' ORDER BY fechaEntrega DESC`;

        const prestamos = await Sql.request(query);
        details['prestamos'] = prestamos;

        res.json({
            ok: true,
            equipo: details
        });
    } catch (e) {
        console.log(e);
        res.status(500).send({
            ok: false,
            error: e
        });
    }
}

exports.returnDevices = async (req, res) => {
    try {
        let devices = req.body.devices.map(d => `'${d}'`).toString();
        let notes = req.body.notes.replace("'", "''");
        let status = req.body.status;
        let returner = req.body.operator.replace("'", "''");
        let receiver = Identificator.getUser(req);
        let date = req.body.date || new Date();

        let query = `UPDATE prestamos 
        SET estado = '${status}',
        notas = '${notes}',
        retorna = 'operador',
        operadorRegresa = '${returner}',
        fechaRetorno = '${date}',
        recibe = '${receiver}'
        WHERE estado = 'Entregado'
        AND equipo IN (${devices})`;

        await Sql.request(query);

        res.json({
            ok: true
        });

    } catch (e) {
        console.log(e);
        res.status(500).send({
            ok: false,
            error: e
        });
    }
}

exports.lendDevices = async (req, res) => {
    try {
        let devices = req.body.devices;
        let borrows = [];
        devices.forEach(d => {
            borrows.push({
                equipo: d,
                estado: 'Entregado',
                fechaCompromiso: new Date().toISOString().split('T')[0],
                fechaEntrega: req.body.date || new Date(),
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

    } catch (e) {
        console.log(e);
        res.status(500).send({
            ok: false,
            error: e
        });
    }
}

exports.getDevice = async (req, res) => {
    try {
        let number = Number(req.params.id);

        if (isNaN(number)) {
            return res.json({
                ok: false,
                error: 'ID inválido'
            });
        }

        let query = `SELECT * 
            FROM equipos 
            WHERE LEFT(id,3) = 'FIX'
            AND CAST 
                (RIGHT(id, CHARINDEX('-', REVERSE(id) + '-') - 1) 
                AS NUMERIC) = ${number}`;

        let result = await Sql.request(query);

        if (!result || result.length == 0) {
            return res.json({
                ok: false,
                error: 'No se encontró el equipo especificado'
            });
        }

        return res.json({
            ok: true,
            device: result[0]
        });

    } catch (e) {
        console.log(e);
        res.status(500).send({
            ok: false,
            error: e
        });
    }
}