const Upload = require('../middlewares/upload');

exports.uploadRyr = async(req, res) =>{
    try{
        await Upload.addRyr(req,res);
        console.log(req.file);

        res.json({
            ok: true,
            id: req.params.id,
            device: req.params.device,
            file: req.file
        });
    }catch(e){
        console.log(e);
        res.status(500).send({
            ok: false,
            error: e
        });
    }
}