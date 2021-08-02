const path = require('path');

exports.retrieveResource = async(req, res) =>{
    let filename = req.params.name;
    filename = filename.replace(/\*/g,'/');
    filename = decodeURI(filename);
    console.log(filename);
    const directoryPath = 'upload/Recursos/' + filename;
    const finalPath = path.resolve(directoryPath);

    console.log('Path: ' + finalPath);

    res.sendFile(finalPath, (err) => {
        if (err) {
            console.log(err);
            res.json({
                ok: false,
                message: err
            });
        }
    });
}

exports.retrieveFile = async (req, res) => {
    let filename = req.params.name;
    filename = filename.replace(/\*/g,'/');
    filename = decodeURI(filename);
    console.log(filename);
    // const directoryPath = 'upload/Certificados/ISO17025/' + filename;
    const directoryPath = 'upload/Certificados/' + filename;
    const finalPath = path.resolve(directoryPath);

    console.log('Path: ' + finalPath);

    res.sendFile(finalPath, (err) => {
        if (err) {
            console.log(err);
            res.json({
                ok: false,
                message: err
            });
        }
    });
}

exports.retrieveFiles = async (req, res) => {
    let filename = req.params.name;
    filename = filename.replace(/\*/g,'/');
    filename = decodeURI(filename);
    console.log(filename);
    const directoryPath = 'upload/Calibraciones/' + filename;
    const finalPath = path.resolve(directoryPath);

    console.log('Path: ' + finalPath);

    res.sendFile(finalPath, (err) => {
        if (err) {
            console.log(err);
            res.json({
                ok: false,
                message: err
            });
        }
    });
}