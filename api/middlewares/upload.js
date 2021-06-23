const multer = require('multer');
const fs = require('fs')
const util = require('util');
const path = require('path');

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

const uploadRyr = multer({ storage: storageRyr }).single('ryr');
const uploadCertificate = multer({ storage: storageCertificate }).single('certificate');

const addRyr = util.promisify(uploadRyr);
const addCertificate = util.promisify(uploadCertificate);

module.exports = {
    addCertificate,
    addRyr
};