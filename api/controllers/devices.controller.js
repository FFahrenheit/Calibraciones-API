const Sql = require('../db/sql');

exports.getParameter = async (req, res) => {
    try {
        let parameter = req.params.arg;
        let query = `SELECT DISTINCT ${parameter} FROM equipos ORDER BY ${parameter}`;

        let values = await Sql.request(query);
        values = values.map(v => v['ubicacion']);

        res.json({
            ok: true,
            [parameter]: values
        });

    } catch (e) {
        console.log(e);
        res.status(500).send({
            ok: false,
            error: e
        });
    }
}

exports.getAttachmentDevices = async (req, res) => {
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
                AND LEFT(id, 3) != 'DUM' 
                ORDER BY activo, siguiente ASC`;

        } else {
            query = `SELECT TOP 100 
                id, serie, descripcion, estado, activo, ubicacion, 
                ultima, siguiente  
                FROM equipos 
                WHERE activo = 'Activo'
                AND LEFT(id, 3) != 'DUM' 
                AND estado = 'Calibración Vigente'
                ORDER BY ultima DESC, activo, siguiente ASC`;

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

exports.getToUpdateDevices = async (req, res) => {

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
            WHERE ${filters} 
            ORDER BY ID ASC`;

        } else {
            query = `SELECT 
            id, serie, descripcion, estado, activo, ubicacion, 
            ultima, siguiente  
            FROM equipos 
            WHERE activo = 'Inhabilitado'
            OR estado = 'Calibracion Vencida'
            OR estado = 'En Proceso de Calibración'
            ORDER BY ID ASC`;

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

exports.getBorrowedDevices = async (req, res) => {
    try {
        let query;
        if (Sql.hasQuery(req)) {
            console.log(req.query);
            let filters = Sql.applyFilters(req.query);
            console.log(filters);
            query = `SELECT 
            id, serie, descripcion, estado, activo, ubicacion, 
            ultima, siguiente, 
            (SELECT nombre FROM usuarios WHERE username = equipos.prestatario)
            as nombrePrestatario,
            (SELECT TOP 1 operador FROM prestamos WHERE equipo = equipos.id ORDER BY id DESC)
            as operador
            FROM equipos 
            WHERE ${filters}
            AND prestatario IS NOT NULL
            ORDER BY siguiente ASC`;

        } else {
            query = `SELECT  
            id, serie, descripcion, estado, activo, ubicacion, 
            ultima, siguiente,
            (SELECT nombre FROM usuarios WHERE username = equipos.prestatario)
            as nombrePrestatario,
            (SELECT TOP 1 operador FROM prestamos WHERE equipo = equipos.id ORDER BY id DESC)
            as operador
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
            query = `SELECT  
            id, serie, descripcion, estado, activo, ubicacion, 
            ultima, siguiente  
            FROM equipos 
            WHERE estado = 'Calibración Vencida'
            AND ${filters} 
            ORDER BY siguiente DESC`;

        } else {
            query = `SELECT  
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
            query = `SELECT  
            id, serie, descripcion, estado, activo, ubicacion, 
            ultima, siguiente  
            FROM equipos 
            WHERE estado = 'En Proceso de Calibración'
            AND ${filters} 
            ORDER BY siguiente DESC`;

        } else {
            query = `SELECT  
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
            query = `SELECT 
            id, serie, descripcion, estado, activo, ubicacion, 
            ultima, siguiente  
            FROM equipos 
            WHERE ${filters} 
            ORDER BY activo, siguiente ASC`;

        } else {
            query = `SELECT TOP 100 
            id, serie, descripcion, estado, activo, ubicacion, 
            ultima, siguiente  
            FROM equipos 
            WHERE activo = 'Activo'
            AND estado = 'Calibración Vigente'
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