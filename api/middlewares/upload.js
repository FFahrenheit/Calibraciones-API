const multer = require('multer');
const fs = require('fs')
const util = require('util');
const path = require('path');
const Sql = require('../db/sql');

let storageResource = multer.diskStorage({
    destination: (req, file, callback) =>{
        const { device, type } = req.params;
        console.log( { device , type });
        const folder = `Recursos/${type}`;

        const path = `${__dirname}/../../upload/${folder}`;

        fs.mkdirSync(path, { recursive: true });
        callback(null,path);
    },
    filename: async(req, file, callback) =>{
        const ext = path.extname(file.originalname);
        const { device , type } = req.params;

        let query = `SELECT 
        COALESCE(MAX(version) + 1, 1) as ID FROM recursos WHERE
        equipo = '${device}' AND tipo = '${type}'`;

        let resp = await Sql.request(query);
        console.log(resp);
        let id = resp[0]['ID'];

        let filename = `${device}_${type}_${id}${ ext }`;
        callback(null,filename);
    }
});

let storageISOCertificate = multer.diskStorage({
    destination: (req, file, callback) =>{
        const folder = `Certificados/ISO17025`;
        const path = `${__dirname}/../../upload/${folder}`;

        fs.mkdirSync(path, { recursive: true });
        callback(null,path);
    },
    filename: (req, file, callback) =>{
        const ext = path.extname(file.originalname);

        let filename = `${req.params.name}_ISO17025${ ext }`;
        callback(null,filename);
    }
});

let storageISO = multer.diskStorage({
    destination: (req, file, callback) =>{
        let date = new Date();
        date = date.toISOString().split('T')[0];

        let subfolder = req.params.device;
        
        const folder = `Certificados/ISO17025/${subfolder}`;
        const path = `${__dirname}/../../upload/${folder}`;

        fs.mkdirSync(path, { recursive: true });
        callback(null,path);
    },
    filename: (req, file, callback) =>{
        const ext = path.extname(file.originalname);

        let filename = `ISO17025_${req.params.name}_${req.params.device}${ ext }`;
        callback(null,filename);
    }
});

let storageRyr = multer.diskStorage({
    destination: (req, file, callback) =>{
        let date = new Date();
        date = date.toISOString().split('T')[0];

        let subfolder = 'CAL' + req.params.id + '_' + date;
        
        const folder = `Calibraciones/${req.params.device}/${subfolder}`;
        const path = `${__dirname}/../../upload/${folder}`;

        fs.mkdirSync(path, { recursive: true });
        callback(null,path);
    },
    filename: (req, file, callback) =>{
        let date = new Date();
        date = date.toISOString().split('T')[0];
        const ext = path.extname(file.originalname);

        let filename = `RYR_${req.params.device}_${ date }_CAL${ req.params.id }${ ext }`;
        callback(null,filename);
    }
});

let storageCertificate = multer.diskStorage({
    destination: (req, file, callback) =>{
        let date = new Date();
        date = date.toISOString().split('T')[0];

        let subfolder = 'CAL' + req.params.id + '_' + date;
        
        const folder = `Calibraciones/${req.params.device}/${subfolder}`;
        const path = `${__dirname}/../../upload/${folder}`;

        console.log('Path : ' + path);

        fs.mkdirSync(path, { recursive: true });
        callback(null,path);
    },
    filename: (req, file, callback) =>{
        let date = new Date();
        date = date.toISOString().split('T')[0];
        const ext = path.extname(file.originalname);

        let filename = `CERTIFICADO_${req.params.device}_${ date }_CAL${ req.params.id }${ ext }`;
        console.log('Filename : ' + filename);
        callback(null,filename);
    }
});

const uploadISO = multer({ storage: storageISO}).single('iso');
const uploadRyr = multer({ storage: storageRyr }).single('ryr');
const uploadCertificate = multer({ storage: storageCertificate }).single('certificate');
const uploadISOCertificate = multer({ storage: storageISOCertificate}).single('iso');
const uploadResource = multer({storage: storageResource}).single('resource');

const addISO = util.promisify(uploadISO);
const addRyr = util.promisify(uploadRyr);
const addResource = util.promisify(uploadResource);
const addCertificate = util.promisify(uploadCertificate);
const addISOCertificate = util.promisify(uploadISOCertificate);

module.exports = {
    addCertificate,
    addRyr,
    addISO,
    addResource,
    addISOCertificate
};