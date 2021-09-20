const Sql = require('../db/sql');
const Identificator = require('../middlewares/identificator');

exports.returnDevice = async (req, res) => {
    try {
        const {
            id,
            estado,
            notas,
            fecha 
        } = req.body;

        const prestador = Identificator.getUser(req);

        let query = `UPDATE prestamos SET
        estado = '${estado}',
        notas = '${notas}',
        fechaRetorno = '${fecha}',
        recibe = '${prestador}',
        operadorRegresa = operador,
        retorna = prestatario
        WHERE id = ${id}`;

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

exports.borrowDevice = async (req, res) => {
    try {
        const { id, prestatario, fecha, compromiso, operador } = req.body;
        const prestador = Identificator.getUser(req);

        const body = {
            equipo: id,
            prestatario,
            fechaEntrega: fecha,
            entrega: prestador,
            estado: 'Entregado',
            operador,
            fechaCompromiso: compromiso
        };

        let query = 'INSERT INTO prestamos() VALUES ?';

        await Sql.query(query, body);

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

exports.getDetails = async (req, res) => {
    const id = req.params.id;

    try {
        let query = `SELECT *,
        (SELECT nombre FROM usuarios WHERE username = equipos.prestatario) as nombrePrestatario,
        (SELECT TOP 1 operador FROM prestamos WHERE equipo = equipos.id ORDER BY ID DESC) as operador
        FROM equipos WHERE id = '${id}'`;

        let details = await Sql.request(query);

        if (!details || details.length == 0) {
            return res.json({
                ok: false,
                error: 'No se encontro el equipo'
            });
        }

        details = details[0];

        query = `SELECT usuarios.username as username, usuarios.nombre as nombre 
        FROM usuarios, responsables 
        WHERE responsables.usuario = usuarios.username 
        AND responsables.equipo = '${id}'`;
        const responsables = await Sql.request(query);

        details['responsables'] = responsables;

        query = `SELECT id, estado, fechaEntrega, fechaRetorno, notas, fechaCompromiso, operador, 
        (SELECT nombre FROM usuarios WHERE username = prestamos.prestatario) as nombrePrestatario,
        (SELECT nombre FROM usuarios WHERE username = prestamos.entrega) as nombreEntrega,
        (SELECT nombre FROM usuarios WHERE username = prestamos.recibe) as nombreRecibe
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