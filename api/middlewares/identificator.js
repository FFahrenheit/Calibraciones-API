const jwt = require('jsonwebtoken');

require('dotenv').config();

exports.getUser = (req) =>{
    return jwt.verify(req.token, process.env.TOKEN_SEED)['username'];
}
