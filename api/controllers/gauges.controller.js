const Sql = require('../db/sql');

exports.getDevice = async(req, res) => {
    try{
        let number = req.body.id;


        return res.json({
            ok: true,
            device: null
        });
    }catch(e){
        console.log(e);
        res.status(500).send({
            ok: false,
            error: e
        });
    }
}