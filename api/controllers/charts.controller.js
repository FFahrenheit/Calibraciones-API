const Sql = require('../db/sql');

exports.getCalibrationComparison = async (req, res) => {
    try {
        const query = `
        ;WITH cte AS
        (
            SELECT CAST(GETDATE() AS DATE) AS fecha
            UNION ALL
            SELECT DATEADD(DAY, -1, fecha)
            FROM cte
            WHERE fecha >= GETDATE()-60
        )
        SELECT CONVERT(VARCHAR, cte.fecha) as fecha,
        (
			SELECT COUNT(*) FROM Calibrados WHERE esperada = cte.fecha AND equipo LIKE 'INT%'
		) as equiposEsperados,
        (
			SELECT COUNT(*) FROM Calibrados WHERE esperada = cte.fecha AND equipo LIKE 'FIX%'
        ) as fixturesEsperados,
        (
			SELECT COUNT(*) FROM Calibrados WHERE esperada = cte.fecha AND equipo LIKE 'DUM%'
        ) as dummiesEsperados,
        (
			SELECT COUNT(*) FROM Recientes WHERE fecha = cte.fecha AND equipo LIKE 'INT%'
		) as equipos,
        (
			SELECT COUNT(*) FROM Recientes WHERE fecha = cte.fecha AND equipo LIKE 'FIX%'
		) as fixtures,
        (
			SELECT COUNT(*) FROM Recientes WHERE fecha = cte.fecha AND equipo LIKE 'DUM%'
		) as dummies
        FROM cte ORDER BY cte.fecha ASC;`;

        let result = await Sql.request(query);

        return res.json({
            ok: true,
            data: result
        });

    } catch (e) {
        console.log(e);
        res.status(500).send({
            ok: false,
            error: e
        });
    }
}

exports.getBorrowsMovement = async (req, res) => {
    try {
        const query = `;WITH cte AS
        (
            SELECT CAST(GETDATE() AS DATE) AS fecha
            UNION ALL
            SELECT DATEADD(DAY, -1, fecha)
            FROM cte
            WHERE fecha >= GETDATE()-30
        )
        SELECT CONVERT(VARCHAR, cte.fecha) as fecha,
        (SELECT COUNT(*) FROM prestamos WHERE CAST(fechaEntrega AS DATE) = cte.fecha) AS entregados,
        (SELECT COUNT(*) FROM prestamos WHERE CAST(fechaRetorno AS DATE) = cte.fecha) AS regresados,
        (SELECT COUNT(*) FROM prestamos WHERE CAST(fechaEntrega AS DATE) <= cte.fecha AND 
        (CAST(fechaRetorno AS DATE ) >= cte.fecha OR fechaRetorno IS NULL)) AS prestados
        FROM cte ORDER BY cte.fecha ASC`;

        let result = await Sql.request(query);

        return res.json({
            ok: true,
            data: result
        });

    } catch (e) {
        console.log(e);
        res.status(500).send({
            ok: false,
            error: e
        });
    }
}

exports.getDoneCalibrations = async (req, res) => {
    try {
        const query = `;WITH cte AS
        (
            SELECT CAST(GETDATE() AS DATE) AS fecha
            UNION ALL
            SELECT DATEADD(DAY, -1, fecha)
            FROM cte
            WHERE fecha >= GETDATE()-30
        )
        SELECT CONVERT(VARCHAR, cte.fecha) as fecha,
        (SELECT COUNT(*) FROM Recientes WHERE fecha = cte.fecha AND equipo LIKE 'INT%') as equipos,
        (SELECT COUNT(*) FROM Recientes WHERE fecha = cte.fecha AND equipo LIKE 'FIX%') as fixtures,
        (SELECT COUNT(*) FROM Recientes WHERE fecha = cte.fecha AND equipo LIKE 'DUM%') as dummies,
        (SELECT COUNT(*) Recientes WHERE fecha = cte.fecha) as total
        FROM cte ORDER BY cte.fecha ASC`;

        let result = await Sql.request(query);

        return res.json({
            ok: true,
            data: result
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
        const query = `;WITH cte AS
        (
            SELECT CAST(GETDATE() AS DATE) AS fecha
            UNION ALL
            SELECT DATEADD(DAY, 1, fecha)
            FROM cte
            WHERE fecha <= GETDATE()+29
        )
        SELECT CONVERT(VARCHAR, cte.fecha) as fecha,
        (SELECT COUNT(*) FROM equipos WHERE activo = 'Activo' AND siguiente = cte.fecha AND id LIKE 'INT%') as equipos,
        (SELECT COUNT(*) FROM equipos WHERE activo = 'Activo' AND siguiente = cte.fecha AND id LIKE 'FIX%') as fixtures,
        (SELECT COUNT(*) FROM equipos WHERE activo = 'Activo' AND siguiente = cte.fecha AND id LIKE 'DUM%') as dummies,
        (SELECT COUNT(*) FROM equipos WHERE activo = 'Activo' AND siguiente = cte.fecha) as total
        FROM cte ORDER BY cte.fecha ASC`;

        let result = await Sql.request(query);

        return res.json({
            ok: true,
            data: result
        });

    } catch (e) {
        console.log(e);
        res.status(500).send({
            ok: false,
            error: e
        });
    }
}