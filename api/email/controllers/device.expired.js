var Utils = require('../../helpers/utils');
require('dotenv').config();

const base_url = process.env.EMAIL_LINK;

exports.deviceExpired = (team, device) =>{    
    if(team.length > 1){
        team = team.slice(0, -1).join(',')+' y '+ team.slice(-1);
    }else{
        team = team[0];
    }
    let {
        id,
        descripcion,
        siguiente,
        ubicacion
    } = device;

    const shortDate = Utils.convertDate(siguiente);

    const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
    siguiente = siguiente.toLocaleString('es-MX',options);

    const url = base_url + '/calibraciones/empezar/' + id; 
    const url2 = base_url + '/equipos/pendientes';

    return {
        subject: `Calibración de ${ id } expirada [${ shortDate }]`,
        html:
        `
        `
    };
}