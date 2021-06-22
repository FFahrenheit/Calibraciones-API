const multer = require('multer');
const fs = require('fs')
const util = require('util');
const path = require('path');

let storageRyr = multer.diskStorage({
    destination: (req, file, callback) =>{
        let date = new Date();
        date = date.toISOString().split('T')[0];

        let subfolder = 'CAL' + req.params.id + ' - ' + date;
        
        const folder = `calibraciones/${req.params.device}/${subfolder}`;
        const path = `${__dirname}/../../upload/${folder}`;

        fs.mkdirSync(path, { recursive: true });
        callback(null,path);
    },
    filename: (req, file, callback) =>{
        let date = new Date();
        date = date.toISOString().split('T')[0];
        const ext = path.extname(file.originalname);

        let filename = `RYR - ${req.params.device} - ${ date } - CAL${ req.params.id }${ ext }`;
        callback(null,filename);
    }
});

let storageCertificate = multer.diskStorage({
    destination: (req, file, callback) =>{
        let date = new Date();
        date = date.toISOString().split('T')[0];

        let subfolder = 'CAL' + req.params.id + ' - ' + date;
        
        const folder = `calibraciones/${req.params.device}/${subfolder}`;
        const path = `${__dirname}/../../upload/${folder}`;

        fs.mkdirSync(path, { recursive: true });
        callback(null,path);
    },
    filename: (req, file, callback) =>{
        let date = new Date();
        date = date.toISOString().split('T')[0];
        const ext = path.extname(file.originalname);

        let filename = `CERTIFICADO - ${req.params.device} - ${ date } - CAL${ req.params.id }${ ext }`;
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