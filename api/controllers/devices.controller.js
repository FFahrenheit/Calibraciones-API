const Sql = require('../db/sql');

exports.getBorrowedDevices = async(req, res) =>{
    try {
        let query;
        if (Sql.hasQuery(req)) {
            console.log(req.query);
            let filters = Sql.applyFilters(req.query);
            console.log(filters);
            query = `SELECT TOP 100 
            id, serie, descripcion, estado, activo, ubicacion, 
            ultima, siguiente, 
            (SELECT nombre FROM usuarios WHERE username = equipos.prestatario)
            as nombrePrestatario
            FROM equipos 
            WHERE ${filters}
            AND prestatario IS NOT NULL
            ORDER BY siguiente ASC`;

        } else {
            query = `SELECT TOP 100 
            id, serie, descripcion, estado, activo, ubicacion, 
            ultima, siguiente,
            (SELECT nombre FROM usuarios WHERE username = equipos.prestatario)
            as nombrePrestatario
            FROM equipos 
            WHERE prestatario IS NOT NULL
            ORDER BY siguiente ASC`;
        }

        let equipos = await Sql.request(query);

        res.json({
            ok: true,
            equipos
        });
    } catch (e) {
        console.log(e);
        res.status(500).send({
            ok: false,
            error: e
        });
    }
}

exports.getAvailableDevices = async (req, res) => {
    try {
        let query;
        if (Sql.hasQuery(req)) {
            console.log(req.query);
            let filters = Sql.applyFilters(req.query);
            console.log(filters);
            query = `SELECT TOP 100 
            id, serie, descripcion, estado, activo, ubicacion, 
            ultima, siguiente
            FROM equipos 
            WHERE ${filters}
            AND activo = 'Activo' 
            AND prestatario IS NULL
            ORDER BY siguiente ASC`;

        } else {
            query = `SELECT TOP 100 
            id, serie, descripcion, estado, activo, ubicacion, 
            ultima, siguiente  
            FROM equipos 
            WHERE prestatario IS NULL
            AND activo = 'Activo'
            ORDER BY siguiente ASC`;
        }

        let equipos = await Sql.request(query);

        res.json({
            ok: true,
            equipos
        });
    } catch (e) {
        console.log(e);
        res.status(500).send({
            ok: false,
            error: e
        });
    }
}

exports.getAllDevices = async (req, res) => {
    try {
        let query;
        if (Sql.hasQuery(req)) {
            console.log(req.query);
            let filters = Sql.applyFilters(req.query);
            console.log(filters);
            query = `SELECT TOP 100 
            id, serie, descripcion, estado, activo, ubicacion, 
            ultima, siguiente  
            FROM equipos 
            WHERE ${filters} 
            ORDER BY siguiente ASC`;

        } else {
            query = `SELECT TOP 100 
            id, serie, descripcion, estado, activo, ubicacion, 
            ultima, siguiente  
            FROM equipos 
            ORDER BY siguiente ASC`;
        }

        let equipos = await Sql.request(query);

        res.json({
            ok: true,
            equipos
        });
    } catch (e) {
        console.log(e);
        res.status(500).send({
            ok: false,
            error: e
        });
    }
}

exports.getPendingDevices = async (req, res) => {

    try {
        let query;
        if (Sql.hasQuery(req)) {
            console.log(req.query);
            let filters = Sql.applyFilters(req.query);
            console.log(filters);
            query = `SELECT TOP 50 
            id, serie, descripcion, estado, activo, ubicacion, 
            ultima, siguiente  
            FROM equipos 
            WHERE estado = 'Calibración Vencida'
            AND ${filters} 
            ORDER BY siguiente DES`;

        } else {
            query = `SELECT TOP 50 
            id, serie, descripcion, estado, activo, ubicacion, 
            ultima, siguiente  
            FROM equipos 
            WHERE estado = 'Calibración Vencida'
            ORDER BY siguiente DESC`;

        }

        let equipos = await Sql.request(query);

        res.json({
            ok: true,
            equipos
        });
    } catch (e) {
        console.log(e);
        res.status(500).send({
            ok: false,
            error: e
        });
    }
}

exports.getProcessDevices = async (req, res) => {

    try {
        let query;
        if (Sql.hasQuery(req)) {
            console.log(req.query);
            let filters = Sql.applyFilters(req.query);
            console.log(filters);
            query = `SELECT TOP 50 
            id, serie, descripcion, estado, activo, ubicacion, 
            ultima, siguiente  
            FROM equipos 
            WHERE estado = 'En Proceso de Calibración'
            AND ${filters} 
            ORDER BY siguiente DES`;

        } else {
            query = `SELECT TOP 50 
            id, serie, descripcion, estado, activo, ubicacion, 
            ultima, siguiente  
            FROM equipos 
            WHERE estado = 'En Proceso de Calibración'
            ORDER BY siguiente DESC`;

        }

        let equipos = await Sql.request(query);

        res.json({
            ok: true,
            equipos
        });
    } catch (e) {
        console.log(e);
        res.status(500).send({
            ok: false,
            error: e
        });
    }
}


exports.getNextDevices = async (req, res) => {

    try {
        let query;
        if (Sql.hasQuery(req)) {
            console.log(req.query);
            let filters = Sql.applyFilters(req.query);
            console.log(filters);
            query = `SELECT
            id, serie, descripcion, estado, activo, ubicacion, 
            ultima, siguiente  
            FROM equipos 
            WHERE activo = 'Activo'
            AND estado != 'En Proceso de Calibración'
            AND estado != 'Calibración Vencida'
            AND DATEDIFF(day,GETDATE(), siguiente) <= 30
            AND ${filters} 
            ORDER BY siguiente ASC`;

        } else {
            query = `SELECT 
            id, serie, descripcion, estado, activo, ubicacion, 
            ultima, siguiente  
            FROM equipos 
            WHERE activo = 'Activo'
            AND estado != 'En Proceso de Calibración'
            AND DATEDIFF(day,GETDATE(), siguiente) <= 30
            AND estado != 'Calibración Vencida'
            ORDER BY siguiente ASC`;

        }

        let equipos = await Sql.request(query);

        res.json({
            ok: true,
            equipos
        });
    } catch (e) {
        console.log(e);
        res.status(500).send({
            ok: false,
            error: e
        });
    }
}

exports.getDevices = async (req, res) => {

    try {
        let query;
        if (Sql.hasQuery(req)) {
            console.log(req.query);
            let filters = Sql.applyFilters(req.query);
            console.log(filters);
            query = `SELECT TOP 50 
            id, serie, descripcion, estado, activo, ubicacion, 
            ultima, siguiente  
            FROM equipos 
            WHERE ${filters} 
            ORDER BY activo, siguiente ASC`;

        } else {
            query = `SELECT TOP 50 
            id, serie, descripcion, estado, activo, ubicacion, 
            ultima, siguiente  
            FROM equipos 
            WHERE activo = 'Activo'
            ORDER BY activo, siguiente ASC`;

        }

        let equipos = await Sql.request(query);

        res.json({
            ok: true,
            equipos
        });
    } catch (e) {
        console.log(e);
        res.status(500).send({
            ok: false,
            error: e
        });
    }
}