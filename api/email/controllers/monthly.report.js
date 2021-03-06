var Utils = require('../../helpers/utils');
require('dotenv').config();

const base_url = process.env.EMAIL_LINK;

exports.monthlyReport = (devices, month, team = 'a todos') => {
    if(team.length > 1){
        team = team.slice(0, -1).join(', ')+' y '+ team.slice(-1);
    }else{
        team = team[0];
    }

    const url = base_url + '/equipos/proximos';

    let tbody = '';
    devices.forEach(device=>{
        const  {
            id,
            descripcion,
            ubicacion,
            siguiente
        } = device;
        const date = Utils.convertDate(siguiente);
        const link = base_url + '/calibraciones/empezar/' + id; 
        tbody += `
        <tr>
            <td><a href="${ link }" class="logo-link">${ id }</a></td>
            <td>${ descripcion }</td>
            <td>${ ubicacion }</td>
            <td>${ date }</td>
        </tr>`;
    });

    return  {
        subject: 'Calibraciones a vencer en ' + month,
        html: `
        <!DOCTYPE html
        PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
        <html xmlns="http://www.w3.org/1999/xhtml">

        <head>

            <meta http-equiv="Content-Type" content="text/html; charset=UTF-8" />
            <title>Plantilla de correo</title>
            <meta name="viewport" content="width=device-width, initial-scale=1.0" />
            <style type="text/css">
                body {
                    font-family: arial, 'helvetica neue', helvetica, sans-serif;
                    width: 100%;
                    height: 100%;
                    border-left: 10px;
                    margin-top: 10px;
                }

                .logo-image {
                    height: 50px !important;
                    width: auto;
                    vertical-align: middle;
                }

                .logo-title {
                    color: rgb(0, 0, 92);
                    font-size: 20px;
                    font-weight: 600;
                    margin-top: 15px;
                    margin-bottom: 15px;
                }

                .logo {
                    margin-left: 10px;
                }

                .content {
                    margin-left: 8px;
                }

                .welcome {
                    font-weight: 300;
                    font-size: 18px;
                    color: black;
                }

                .text {
                    font-size: 16px;
                    font-weight: 300;
                }

                .ref {
                    background-color: rgb(38, 42, 105);
                    border: none;
                    color: white;
                    padding: 10px 16px;
                    text-align: center;
                    text-decoration: none;
                    display: inline-block;
                    font-size: 16px;
                    border-radius: 5px;
                }

                .ref:hover {
                    cursor: pointer;
                }

                .invisible-a {
                    text-decoration: none;
                }

                .marked {
                    font-family: Arial Bold, Arial, sans-serif; font-weight: bold;
                }

                .button {
                    border-radius: 2px;
                }

                .button a {
                    padding: 8px 12px;
                    border: 1px solid rgb(38, 42, 105);
                    border-radius: 2px;
                    font-family: Helvetica, Arial, sans-serif;
                    font-size: 14px;
                    color: #ffffff;
                    text-decoration: none;
                    font-weight: bold;
                    display: inline-block;
                }
                
                .mention{
                    color:rgb(0, 0, 100);
                    font-family: Arial Bold, Arial, sans-serif;
                    font-weight: bold;
                    text-decoration: underline;
                }

                .tabla td, th{
                    /*word-break: break-all;*/
                    border: 1px solid gray;
                    font-size: 16px;
                    padding-left: 10px;
                    padding-right: 10px;
                    text-align: center;
                }

                .tabla{
                    border-spacing: 0px;
                    border-collapse: separate;
                }

                .test{
                    font-size: 14px;
                    color: rgb(122, 122, 122);
                    font-style: italic;
                }

                .logo-link {
                    color: rgb(0, 0, 92);
                    font-size: 16px;
                    font-weight: 600;
                }

                .important{
                    font-weight: 900;
                    color: rgb(240, 0, 0);
                    font-size: 20px;
                    text-decoration: underline;
                }
            </style>
        </head>

        <body>
            <div>
                <table>
                    <tr>
                        <td valign="top" style="vertical-align:top;">
                            <img src="https://i.ibb.co/ZYgG6j2/logo-removebg-preview.png"
                                width="50" height="50">
                        </td>
                        <td valign="middle">
                            <span class="logo-title"> Bit??cora de Calibraciones IMX </span>
                        </td>
                    </tr>
                </table>
            </div>
            <div class="content">
                <h4 class="welcome">Buen d??a ${ team },</h4>
                <p class="text">
                    Les comparto la lista de equipos con calibraci??n planificada para el mes de 
                    <span class="marked">${ month }</span> 
                </p>

                <table class="tabla">
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>Descripci??n</th>
                            <th>Ubicaci??n</th>
                            <th>Expira</th>
                        </tr>
                    </thead>
                    <tbody>
                        ${ tbody }
                    </tbody>
                </table>

                <p class="text">
                    Por favor, realice la planeaci??n de la calibraci??n de estos equipos seg??n
                    vea conveniente
                </p>
                <p class="text">
                    Puede ver los detalles del equipo haciendo click en su ID o ver la 
                    lista de calibraciones pr??ximas haciendo click en el siguiente bot??n
                </p>

                <table width="100%" cellspacing="0" cellpadding="0">
                    <tr>
                        <td>
                            <table cellspacing="0" cellpadding="0">
                                <tr>
                                    <td class="button" bgcolor="#262a69">
                                        <a class="link" href="${ url }" target="_blank">
                                            Ver calibraciones pr??ximas
                                        </a>
                                    </td>
                                </tr>
                            </table>
                        </td>
                    </tr>
                </table>
                <p class="test">&nbsp;</p>
            </div>
        </body>

        </html>`
    }

}