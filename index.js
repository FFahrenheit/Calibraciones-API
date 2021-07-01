require('dotenv').config();

var cron = require('node-cron');

var express = require('express'),
    app = express(),
    port = process.env.PORT || 33001;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

var authRoutes = require('./api/routers/auth.routes');
var userRoutes = require('./api/routers/user.routes');
var filesRoutes = require('./api/routers/files.routes');
var deviceRoutes = require('./api/routers/device.routes');
var uploadRoutes = require('./api/routers/upload.routes');
var borrowsRoutes = require('./api/routers/borrows.routes');
var devicesRoutes = require('./api/routers/devices.routes');
var ____testRoutes____ = require('./api/routers/tests.routes');

var scheduledTasks = require('./api/controllers/tasker.controller');

app.use((req, res, next) => {
    console.log([ req.method, new Date(), req.originalUrl]);
    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,PATCH,OPTIONS');
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept, Authorization');
    next();
});

authRoutes(app);
userRoutes(app);
filesRoutes(app);
deviceRoutes(app);
uploadRoutes(app);
borrowsRoutes(app);
devicesRoutes(app);
____testRoutes____(app);

app.listen(port,()=>{
    console.clear();
    console.log('\x1b[32m','Server running in port ' + port)
    // scheduledTasks(cron);
});