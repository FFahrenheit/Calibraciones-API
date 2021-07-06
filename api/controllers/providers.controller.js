const Sql = require('../db/sql');

exports.updateProviders = async (req, res) =>{
    try{
        let deleted =  req.body.deleted;
        let providers = req.body.providers;
        let query;

        if(deleted.length > 0){

            deleted = deleted.toString();

            query = `DELETE FROM proveedores WHERE id in (${deleted})`;

            await Sql.request(query);
        }
        
        if(providers.length > 0){
            providers = providers.map(p => ({nombre: p.nombre}));

            query = 'INSERT INTO proveedores() VALUES ?';

            await Sql.query(query,providers);
        }

        res.json({
            ok: true
        });

    }catch(e){
        return res.status(500).send({
            ok: false,
            error: e
        });
    }
}

exports.getProviders = async (req, res) => {
    try {
        let query = `SELECT id, nombre, certificado, agregado FROM proveedores`;

        let proveedores = await Sql.request(query);

        return res.json({
            ok: true,
            proveedores
        });
    } catch (e) {
        return res.status(500).send({
            ok: false,
            error: e
        });
    }
}