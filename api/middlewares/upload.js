const multer = require('multer');
const fs = require('fs')
const util = require('util');

let storage = multer.diskStorage({
    destination: (req, file, callback) =>{
        const folder = 'pruebas';
        const path = `${__dirname}/../../upload/${folder}`;

        console.log(req.params.id);

        fs.mkdirSync(path, { recursive: true });
        callback(null,path);
    },
    filename: (req, file, callback) =>{
        let filename = `${new Date()}-${file.originalname}`;
        callback(null,filename);
    }
});

const uploadRyr = multer({ storage: storage }).single('ryr');
const uploadCertificate = multer({ storage: storage }).single('certificate');

const addRyr = util.promisify(uploadRyr);
const addCertificate = util.promisify(uploadCertificate);

module.exports = {
    addCertificate,
    addRyr
};