const Upload = require('../middlewares/upload');
const Sql = require('../db/sql');

exports.uploadResource = async(req, res) =>{
    try{
        await Upload.addResource(req,res);

        let file = req.file.path.toString();

        const filename = file.substring(file.indexOf(req.params.type));
        
        let query = `INSERT INTO recursos(equipo,tipo,archivo,version) VALUES (
            '${req.params.device}',
            '${req.params.type}',
            '${filename}',
            (
                SELECT coalesce(MAX(version) + 1, 1) FROM recursos WHERE 
                equipo = '${req.params.device}' AND 
                tipo = '${req.params.type}'
            )
        )`;

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

exports.uploadISOCertificate = async(req, res) =>{
    try{
        await Upload.addISOCertificate(req,res);
        let file = req.file.path.toString();

        const filename = file.substring(file.indexOf(`ISO17025`));
        let query = `UPDATE proveedores 
        SET certificado = '${filename}' 
        WHERE nombre = '${req.params.name}'`;
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