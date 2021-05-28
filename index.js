require('dotenv').config();

var express = require('express'),
    app = express(),
    port = process.env.PORT || 33001;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

var authRoutes = require('./api/routers/auth.routes');

app.use((req, res, next) => {
    console.log([new Date(),req.originalUrl]);
    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,PATCH,OPTIONS');
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept, Authorization');
    next();
});

authRoutes(app);

app.listen(port,()=>{
    console.clear();
    console.log('Server running in port ' + port)
});