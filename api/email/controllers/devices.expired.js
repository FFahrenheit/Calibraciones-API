var Utils = require('../../helpers/utils');
require('dotenv').config();

const base_url = process.env.EMAIL_LINK;

exports.devicesExpired = (devices) =>{
    let date = devices[0].siguiente;
    const shortDate = Utils.convertDate(date);
    
    const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
    date = date.toLocaleString('es-MX',options);
    
    const url = base_url + '/equipos/pendientes';

    let tbody = '';
    devices.forEach(device=>{
        const  {
            id,
            descripcion,
            ubicacion
        } = device;
        const link = base_url + '/calibraciones/empezar/' + id; 
        tbody += `
        <tr>
            <td><a href="${ link }" class="logo-link">${ id }</a></td>
            <td>${ descripcion }</td>
            <td>${ ubicacion }</td>
            <td>${ shortDate }</td>
        </tr>`;
    });

    return {
        subject: `Calibración de equipos expirada [${ shortDate }]`,
        html:
        `
        `
    };
}