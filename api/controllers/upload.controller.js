
exports.uploadRyr = async(req, res) =>{
    res.json({
        ok: true,
        id: req.params.id,
        device: req.params.device
    });
}