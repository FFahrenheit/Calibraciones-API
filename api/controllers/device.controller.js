const Sql = require('../db/sql');
const Identifcator = require('../middlewares/identificator')

exports.acceptCalibration = async(req, res) => {
    try{
        const { equipo, calibrador, fecha } = req.body;
        const verificador = Identifcator.getUser(req);

        let query = `INSERT INTO calibraciones(calibrador,fecha,verificador,equipo)
        VALUES ('${calibrador}','${fecha}','${verificador}','${equipo}')`;
        
        let id = await Sql.insertRecordset(query);

        query = `UPDATE equipos SET estado = 'Calibración Aceptada', 
        activo =  'Activo' WHERE id = '${ equipo }'`;

        await Sql.request(query);

        res.json({
            ok: true,
            id
        });
    }catch(e){
        console.log(e);
        res.status(500).send({
            ok: false,
            error: e
        });
    }
}

exports.updateStatus = async(req, res) => {
    const id = req.params.id;

    try{
        const status = req.body.estado;

        let query = `UPDATE equipos SET estado = '${status}' WHERE id = '${id}'`;

        await Sql.request(query);

        if(req.body.updateActive){
            query = `UPDATE equipos SET activo = '${status}' WHERE id = '${id}'`;
            await Sql.request(query);
        }

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
        usuarios.nombre as verifico, ryr, certificado 
        FROM calibraciones, usuarios
        WHERE equipo = '${ id }' 
        AND usuarios.username = calibraciones.verificador
        ORDER BY fecha DESC`;
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