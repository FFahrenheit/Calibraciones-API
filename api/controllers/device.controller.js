const Sql = require('../db/sql');
const Identifcator = require('../middlewares/identificator')

exports.createDevice = async(req, res) =>{
    try{
        console.log(req.body);
        let query = `SELECT (MAX(SUBSTRING(id,4,3))+1) as id FROM equipos WHERE LEFT(id,3) = 'INT'`;
        
        let resp = await Sql.request(query);
        let id = 'INT' + resp[0]['id'];

        console.log('New id ' + id);

        let device = req.body.device;
        device.id = id;

        query = `INSERT INTO equipos() VALUES ?`;
        await Sql.query(query, device);

        let responsables = req.body.responsables.map( r => ( { ...r, equipo : id } ));
        query = `INSERT INTO responsables() VALUES ?`;
        await Sql.query(query, responsables);

        let verificadores = req.body.verificadores.map( v => ( { ...v, equipo: id } ));
        query = `INSERT INTO verificadores() VALUES ?`;
        await Sql.query(query, verificadores);

        let calibraciones = req.body.calibraciones.map( c => ( { ...c, equipo: id } ));
        query = `INSERT INTO calibraciones() VALUES ?`;
        await Sql.query(query, calibraciones);

        let proveedores = req.body.proveedores.map( p => ( { ...p, equipo: id } ));
        if(proveedores.length > 0){
            query = `INSERT INTO proveedores() VALUES ?`;
            await Sql.query(query, proveedores);
        }

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

        query = `SELECT id, nombre FROM verificadores WHERE equipo = '${ id }'`;
        const verificadores = await Sql.request(query);

        details['verificadores'] = verificadores;

        query = `SELECT usuarios.username as username, usuarios.nombre as nombre 
        FROM usuarios, responsables 
        WHERE responsables.usuario = usuarios.username 
        AND responsables.equipo = '${ id }'`;
        const responsables = await Sql.request(query);

        details['responsables'] = responsables;

        query = `SELECT id, fecha, calibrador, verificador, 
        usuarios.nombre as verifico, ryr, certificado 
        FROM calibraciones, usuarios
        WHERE equipo = '${ id }' 
        AND usuarios.username = calibraciones.verificador
        ORDER BY fecha DESC`;
        const calibraciones = await Sql.request(query);

        details['calibraciones'] = calibraciones;

        query = `SELECT nombre, certificado FROM proveedores WHERE equipo = '${ id }'`;
        const proveedores = await Sql.request(query);
        
        details['proveedores'] = proveedores;

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