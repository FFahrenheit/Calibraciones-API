const Sql = require('../db/sql');
const Identifcator = require('../middlewares/identificator')

exports.updateActive = async(req, res) =>{
    const id = req.params.id;

    try{
        const status = req.body.activo;

        let query = `UPDATE equipos SET activo = '${status}' WHERE id = '${id}'`;

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

exports.editDevice = async(req, res) =>{
    let id = req.params.id;

    try{
        console.log(req.body);

        const body = req.body.equipo;
        let query = `UPDATE equipos SET () WHERE ?`;
        await Sql.update(query,body);

        query = `DELETE FROM verificadores WHERE equipo = '${id}'`;
        await Sql.request(query);

        query = `DELETE FROM responsables WHERE equipo = '${id}'`;
        await Sql.request(query);

        // const __proveedores = req.body.__proveedores;
        // if(__proveedores.length > 0){
        //     query = `DELETE FROM proveedores WHERE equipo = '${id}' AND id NOT IN (${__proveedores.toString()})`;
        //     await Sql.request(query);
        // }else{
        //     query = `DELETE FROM proveedores WHERE equipo = '${id}'`;
        //     await Sql.request(query);
        // }

        const responsables = req.body.responsables;
        query = `INSERT INTO responsables() VALUES ?`;
        await Sql.query(query,responsables)

        // if(req.body._proveedores.length>0){
        //     const _proveedores = req.body._proveedores;
        //     query = `INSERT INTO proveedores() VALUES ?`;
        //     await Sql.query(query,_proveedores);
        // }

        verificadores = req.body.verificadores;
        query = `INSERT INTO verificadores() VALUES ?`;
        await Sql.query(query,verificadores);

        res.json({
            ok: true,
        });

    }catch(e){
        console.log(e);
        res.status(500).send({
            ok: false,
            error: e
        });
    }
}

exports.createDevice = async(req, res) =>{
    try{
        // console.log(req.body);
        const type = req.body.type;
        /***
         * Code for generate the next consecutive number!
         */

        let query;
        if(!type.startsWith('FIX')){
            query =  `SELECT COALESCE(
            MAX(
                CAST(
                    SUBSTRING(id, LEN('${type}')+1 , LEN(id) - LEN('${type}')) 
                    AS NUMERIC)
                +1),
            1) as id FROM equipos 
            WHERE LEFT(id, LEN('${type}') ) = '${type}'`;
        }else{
            query = `SELECT COALESCE(
                MAX(
                    CAST(
                        RIGHT(id, CHARINDEX('-', REVERSE(id) + '-') - 1) AS NUMERIC
                    )
                +1),
            1) AS id FROM equipos
            WHERE LEFT(id,3) = 'FIX'`
        }
        
        let resp = await Sql.request(query);
        let n = resp[0]['id'].toString();
        let lens;
        if(type.startsWith('INT')){
            lens = 3;
        }else if(type.startsWith('DUM')){
            lens = 4
        }else if(type.startsWith('FIX')){
            lens = 3;
        }else{
            lens = 3;
        }

        n = n.padStart(lens[type],'0');
        let id = type + n;

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
        // await Sql.query(query, calibraciones);
        let calibrationId = await Sql.insertRecordSetQuery(query,calibraciones)

        console.log('Calibration ID => ' + calibrationId);

        // let proveedores = req.body.proveedores.map( p => ( { ...p, equipo: id } ));
        // if(proveedores.length > 0){
        //     query = `INSERT INTO proveedores() VALUES ?`;
        //     await Sql.query(query, proveedores);
        // }

        res.json({
            ok: true,
            id,
            calibrationId
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

        query = `UPDATE equipos SET estado = 'Calibraci??n Vigente' 
        WHERE id = '${ equipo }'`;
        //activo =  'Activo'
        
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
        (SELECT nombre FROM usuarios WHERE username = equipos.prestatario) as nombrePrestatario,
        (SELECT email FROM usuarios WHERE username = equipos.prestatario) as emailPrestatario,
        (SELECT TOP 1 operador FROM prestamos WHERE equipo = equipos.id ORDER BY ID DESC) as operador  
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

        query = `SELECT usuarios.username as username, usuarios.nombre as nombre, 
        usuarios.email as email 
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

        query = `SELECT id, tipo, version, archivo, fecha 
        FROM recursos
        WHERE equipo = '${ id }'
        ORDER BY fecha DESC`;

        const recursos = await Sql.request(query);

        details['recursos'] = recursos;

        // query = `SELECT id, nombre, certificado FROM proveedores WHERE equipo = '${ id }'`;
        // const proveedores = await Sql.request(query);
        
        // details['proveedores'] = proveedores;

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