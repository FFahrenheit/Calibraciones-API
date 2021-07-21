exports.deviceFilters = (obj) => {
    params = [];
    Object.keys(obj).forEach(key => {
        let filter;
        switch (key) {
            case 'tipo':
                filter = `ID LIKE '${ obj[key] }%'`;
                break;
            case 'prestado':
                filter = `prestatario ${ obj[key] }`;
                break;
            case 'prestatario':
                filter = `prestatario IN (SELECT username FROM usuarios WHERE 
                nombre LIKE '%${obj[key]}%' OR username LIKE '%${obj[key]}%')`;
                break;
            case 'activo':
                filter = `activo = '${obj[key]}'`;
                break;
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
            case 'fromRemaining':
                filter = `DATEDIFF(day, GETDATE(),siguiente) >= ${obj[key]}`;
                break;
            case 'toRemaining':
                filter = `DATEDIFF(day, GETDATE(),siguiente) <= ${obj[key]}`;
                break;
            default:
                filter = `${key} LIKE '%${obj[key]}%' COLLATE Latin1_General_CI_AI`
        }
        params.push(filter);
    });

    if(params.length > 0){
        return params.join(' AND ');
    }
    return '';
}