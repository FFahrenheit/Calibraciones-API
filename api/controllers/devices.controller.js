const Sql = require('../db/sql');

exports.getDevices = async(req, res) => {

    try{
        let query;
        if(Sql.hasQuery(req)){
            console.log(req.query);
            let filters = Sql.applyFilters(req.query);
            console.log(filters);
            query = `SELECT TOP 50 
            id, serie, descripcion, estado, activo, ubicacion, 
            ultima, siguiente  
            FROM equipos 
            WHERE ${ filters } 
            ORDER BY siguiente ASC`;

        }else{
            query = `SELECT TOP 50 
            id, serie, descripcion, estado, activo, ubicacion, 
            ultima, siguiente  
            FROM equipos 
            WHERE activo = 'Activo'
            ORDER BY siguiente ASC`;

        }
        
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