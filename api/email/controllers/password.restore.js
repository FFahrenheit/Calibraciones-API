require('dotenv').config();

const base_url = process.env.EMAIL_LINK;

exports.restorePassword = (user, password) =>{

    const url = base_url + '/inicio/login'; 

    return {
        subject: `Recuperación de contraseña IMX Calibraciones`,
        html:`
        <!DOCTYPE html
        PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
        <html xmlns="http://www.w3.org/1999/xhtml">
        
        <head>
        
            <meta http-equiv="Content-Type" content="text/html; charset=UTF-8" />
            <title>New Waiver Template</title>
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
        
                .new {
                    text-decoration: underline;
                    font-weight: bolder;
                }
        
                .password {
                    display: inline;
                    font-weight: bold;
                    font-size: 22px;
                    padding: 5px 5px 5px 5px;
                    border: black;
                    border-style: solid;
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
                <h4 class="welcome">Hola, ${ user }</h4>
                <p class="text">
                    Como lo solicitaste, aquí está tu nueva contraseña (sin las flechas), úsala para iniciar sesión en el sistema.
                </p>
                <div class="password">
                    <span>
                        . . . ->${ password }<- . . .
                    </span>
                </div>
                <p class="text">
                    Por favor, toma en cuenta que esta es una contraseña temporal, tendrás que cambiarla una vez que inicies sesión en el sistema.
                </p>
                <p class="text">
                    Si no pediste esta contraseña temporal simplemente ignora y elimina este correo electrónico.
                </p>
        
                <table width="100%" cellspacing="0" cellpadding="0">
                    <tr>
                        <td>
                            <table cellspacing="0" cellpadding="0">
                                <tr>
                                    <td class="button" bgcolor="#262a69">
                                        <a class="link" href="${ url }" target="_blank">
                                            Iniciar sesión
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
        
        </html>
        `
    };
}