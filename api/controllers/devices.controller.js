const Sql = require('../db/sql');

exports.getDevices = async(req, res) => {

    try{
        let query = `SELECT TOP 50 equipos.id, descripcion, serie, estado, activo, ubicacion, 
        calibraciones.fecha 
        FROM calibraciones,equipos 
        WHERE calibraciones.equipo = equipos.id
        AND (SELECT MAX(fecha) FROM calibraciones WHERE equipo = equipos.id) = calibraciones.fecha
        AND equipos.activo = 'Activo'
        ORDER BY fecha ASC`;

        let equipos = await Sql.request(query);

        res.json({
            ok: true,
            equipos
        });
    }catch(e){
        console.log(e);
        res.status(500).send({
            ok: false,
            error: e
        });
    }
}