const sql = require('mssql');

const config = {
    user: process.env.BD_USER,
    password: process.env.BD_PASSWORD,
    server: process.env.HOST,
    database: process.env.DATABASE,
    options: {
        instanceName: 'SQLEXPRESS',
        trustServerCertificate: true
    }
}

const applyFilters = (obj) => {
    params = [];
    Object.keys(obj).forEach(key => {
        let filter;
        switch (key) {
            case 'fromUltima':
                filter = `ultima >= '${obj[key]}'`
                break;
            case 'toUltima':
                filter = `ultima <= '${obj[key]}'`
                break;
            case 'fromSiguiente':
                filter = `siguiente >= '${obj[key]}'`
                break;
            case 'toSiguiente':
                filter = `siguiente <= '${obj[key]}'`
                break;
            default:
                filter = `${key} LIKE '%${obj[key]}%'`
        }
        params.push(filter);
    });

    if(params.length > 0){
        return params.join(' AND ');
    }
    return '';
}

const hasQuery = (req) => {
    return Object.keys(req.query).length !== 0;
}

const parseField = (str) => {
    return str?.toString().replace(/'/g, "''") || "";
}

const query = async (query, data) => {
    let req = getQuery(query, data);
    return request(req);
}

const getQuery = async (query, data) => {
    let columns = [];
    let rows = [];
    if (!Array.isArray(data)) {
        for (var key of Object.keys(data)) {
            columns.push(key);
            let val = data[key].toString().replace(/'/g, "''");
            rows.push("'" + val + "'");

        }
        query = query.replace("()", "(" + columns.toString() + ")");
        query = query.replace("?", "(" + rows.toString() + ")");
        // console.log(query);
        return query;
    } else {
        for (let [index, val] of data.entries()) {
            let row = [];
            for (let key of Object.keys(val)) {
                if (index === 0) {
                    columns.push(key);
                }
                let data = val[key].toString().replace(/'/g, "''");
                row.push("'" + data + "'");
            }
            rows.push(row);
        }
        let entries = [];
        for (let row of rows) {
            let entrie = "(" + row.toString() + ")";
            entries.push(entrie);
        }
        query = query.replace("()", "(" + columns.toString() + ")");
        query = query.replace("?", entries.toString());
        // console.log(query);
        return query;
    }
}

const request = async (query) => {
    console.info(query);
    return new Promise((resolve, reject) => {
        new sql.ConnectionPool(config).connect().then(pool => {
            return pool.request().query(query);
        }).then(result => {
            sql.close();
            resolve(result.recordset);
        }).catch(err => {
            console.error(err);
            sql.close();
            reject(err);
        });
    });
}

module.exports = {
    query,
    request,
    parseField,
    hasQuery,
    applyFilters
};