const Sql = require('../db/sql');

exports.login = (req,res) => {
    let { username, password } = req.body;
    console.log('Working?');
    console.log([username, password]);

    Sql.request('SELECT * FROM dbo.usuarios').then(resp=>{
        res.json({
            resp
        })
    },error=>{
        res.json({
            error 
        })
    })
}