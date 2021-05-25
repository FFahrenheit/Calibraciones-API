const Sql = require('../db/sql');

exports.login = async(req,res) => {
    let { username, password } = req.body;
    
    console.log([username, password]);
    let response;
    try{
        response = await Sql.request(`SELECT * FROM dbo.usuarios WHERE username = '${ username }'`);
    }catch(e){
        console.log(e);
        res.json(e);
    }

    console.log('******************RESPONSE********************')
    console.log(response);

    res.json({
        response
    })

}