const Sql = require('../db/sql');


exports.getNextDevices = async(req, res) =>{
    try{
        const query = `;WITH cte AS
        (
            SELECT CAST(GETDATE() AS DATE) AS fecha
            UNION ALL
            SELECT DATEADD(DAY, 1, fecha)
            FROM cte
            WHERE fecha <= GETDATE()+29
        )
        SELECT cte.fecha, 
        (SELECT COUNT(*) FROM equipos WHERE activo = 'Activo' AND siguiente = cte.fecha AND id LIKE 'INT%') as equipos,
        (SELECT COUNT(*) FROM equipos WHERE activo = 'Activo' AND siguiente = cte.fecha AND id LIKE 'FIX%') as fixtures,
        (SELECT COUNT(*) FROM equipos WHERE activo = 'Activo' AND siguiente = cte.fecha AND id LIKE 'DUM%') as dummies
        FROM cte`;

        let result = await Sql.request(query);

        console.log(result);

        return res.json({
            ok: true,
            data: result 
        });
        
    }catch(e){
        console.log(e);
        res.status(500).send({
            ok: false,
            error: e
        });
    }
}