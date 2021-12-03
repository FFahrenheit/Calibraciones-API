var Utils = require('../../helpers/utils');
require('dotenv').config();

const base_url = process.env.EMAIL_LINK;

//id, nombre, fecha
exports.providerNotice = (team, proveedores) =>{    
    if(team.length > 1){
        team = team.slice(0, -1).join(', ')+' y '+ team.slice(-1);
    }else{
        team = team[0];
    }

    let tbody = '';
    const shortDate = Utils.convertDate(proveedores[0].expiracion);
    const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric', timeZone: 'UTC' };
    const siguiente = proveedores[0].expiracion.toLocaleString('es-MX', options);

    proveedores.forEach(device=>{
        const  {
            id,
            nombre
        } = device;
        tbody += `
        <tr>
            <td>${ id }</td>
            <td>${ nombre }</td>
            <td>${ shortDate }</td>
        </tr>`;
    });

    const qty = proveedores.length == 1 ? '1 proovedor' : proveedores.length + ' proveedores';

    const url = base_url + '/usuarios/proveedores/ver';

    return {
        subject: `Certificado de ${ qty } próximo a expirar [${ shortDate }]`,
        html:
        `
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
                    font-family: Arial Bold, Arial, sans-serif; 
                    font-weight: bold;
                    font-size: 110%;
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
                    word-break: break-all;
                    border: 1px solid gray;
                    font-size: 20px;
                    padding-left: 10px;
                    padding-right: 10px;
                }

                .tabla{
                    border-spacing: 0px;
                    border-collapse: separate;
                }

                .separator{
                    border-left: 10px solid #ffffff;
                    border-right: 10px solid #ffffff;
                }

                .test{
                    font-size: 14px;
                    color: rgb(122, 122, 122);
                    font-style: italic;
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
                            <span class="logo-title"> Bitácora de Calibraciones IMX </span>
                        </td>
                    </tr>
                </table>
            </div>
            <div class="content">
                <h4 class="welcome">Buen día, ${ team }: </h4>
                <p class="text">
                    Los siguientes certificados de proveedores
                    están próximo a vencer en 
                    <span class="marked">20 días</span>, 
                    el día <span class="marked"> ${ siguiente }</span> 
                </p>

                <table class="tabla">
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>Proveedor</th>
                            <th>Expiración</th>
                        </tr>
                    </thead>
                    <tbody>
                        ${ tbody }
                    </tbody>
                </table>

                <p class="text">
                    Por favor, planeen su certificación con el respectivo proveedor
                    y suban el nuevo certificado lo más pronto posible
                </p>
                
                <p class="text">
                    Puede consultar más detalles haciendo click en el siguiente botón
                </p>

                <table width="100%" cellspacing="0" cellpadding="0">
                    <tr>
                        <td>
                            <table cellspacing="0" cellpadding="0">
                                <tr>
                                    <td class="button" bgcolor="#262a69">
                                        <a class="link" href="${ url }" target="_blank">
                                            Ver proveedores certificados
                                        </a>
                                    </td>
                                </tr>
                            </table>
                        </td>
                    </tr>
                </table>
                        </td>
                    </tr>
                </table>
                <p class="test">&nbsp;</p>
            </div>
        </body>

        </html>
        `
    };
}