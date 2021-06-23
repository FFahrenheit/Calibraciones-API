const Sql = require('../db/sql');

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
            WHERE estado = 'Calibración Pendiente'
            AND ${filters} 
            ORDER BY siguiente DES`;

        } else {
            query = `SELECT TOP 50 
            id, serie, descripcion, estado, activo, ubicacion, 
            ultima, siguiente  
            FROM equipos 
            WHERE estado = 'Calibración Pendiente'
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
            query = `SELECT TOP 50 
            id, serie, descripcion, estado, activo, ubicacion, 
            ultima, siguiente  
            FROM equipos 
            WHERE activo = 'Activo'
            AND estado != 'En Proceso de Calibración'
            AND estado != 'Calibración Pendiente'
            AND ${filters} 
            ORDER BY siguiente ASC`;

        } else {
            query = `SELECT TOP 50 
            id, serie, descripcion, estado, activo, ubicacion, 
            ultima, siguiente  
            FROM equipos 
            WHERE activo = 'Activo'
            AND estado != 'En Proceso de Calibración'
            AND estado != 'Calibración Pendiente'
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
            ORDER BY siguiente ASC`;

        } else {
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
    } catch (e) {
        console.log(e);
        res.status(500).send({
            ok: false,
            error: e
        });
    }
}