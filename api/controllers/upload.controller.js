const Upload = require('../middlewares/upload');
const Sql = require('../db/sql');

exports.uploadISO = async(req, res) =>{
    try{
        await Upload.addISO(req,res);
        let file = req.file.path.toString();

        const filename = file.substring(file.indexOf(`${req.params.device}`));
        let query = `UPDATE proveedores 
        SET certificado = '${filename}' 
        WHERE equipo = '${req.params.device}' AND nombre = '${req.params.name}'`;
        await Sql.request(query);

        res.json({
            ok: true,
            filename
        });
    }catch(e){
        console.log(e);
        res.status(500).send({
            ok: false,
            error: e
        });
    }
}

exports.uploadCertificate = async(req, res) =>{
    try{
        await Upload.addCertificate(req,res);
        let file = req.file.path.toString();

        const filename = file.substring(file.indexOf(`${req.params.device}`));
        let query = `UPDATE calibraciones SET certificado = '${filename}' WHERE id = '${req.params.id}'`;
        await Sql.request(query);

        res.json({
            ok: true,
            filename
        });
    }catch(e){
        console.log(e);
        res.status(500).send({
            ok: false,
            error: e
        });
    }
}

exports.uploadRyr = async(req, res) =>{
    try{
        await Upload.addRyr(req,res);
        let file = req.file.path.toString();

        const filename = file.substring(file.indexOf(`${req.params.device}`));
        let query = `UPDATE calibraciones SET ryr = '${filename}' WHERE id = '${req.params.id}'`;
        await Sql.request(query);

        res.json({
            ok: true,
            filename
        });
    }catch(e){
        console.log(e);
        res.status(500).send({
            ok: false,
            error: e
        });
    }
}