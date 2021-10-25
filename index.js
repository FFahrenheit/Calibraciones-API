require('dotenv').config();

const cron = require('node-cron');
const fs = require('fs');
const nodeSSPI = require('node-sspi');

const express = require('express'),
    app = express(),
    port = process.env.PORT || 33001;


app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.set('trust proxy', true);

const authRoutes = require('./api/routers/auth.routes');
const userRoutes = require('./api/routers/user.routes');
const filesRoutes = require('./api/routers/files.routes');
const tasksRoutes = require('./api/routers/tasks.routes');
const chartRoutes = require('./api/routers/charts.routes');
const deviceRoutes = require('./api/routers/device.routes');
const gaugesRoutes = require('./api/routers/gauges.routes');
const uploadRoutes = require('./api/routers/upload.routes');
const borrowsRoutes = require('./api/routers/borrows.routes');
const devicesRoutes = require('./api/routers/devices.routes');
const providerRoutes = require('./api/routers/providers.routes');
const ____testRoutes____ = require('./api/routers/tests.routes');
const windowsAuthRoutes = require('./api/routers/windows.auth.routes');

const scheduledTasks = require('./api/controllers/tasker.controller');

app.use((req, res, next) => {
    let ip = req.ip;
    ip = ip.substr(ip.lastIndexOf(':') + 1);
    console.table([{ Timestamp: new Date().toLocaleString(), Method: req.method, Request: req.originalUrl, Client: ip }]);
    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,PATCH,OPTIONS');
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept, Authorization');

    let windowsUser = new nodeSSPI({
        retrieveGroups: true
    });

    windowsUser.authenticate(req, res, err => {
        res.finished || next();
    });
    
});

authRoutes(app);
userRoutes(app);
filesRoutes(app);
tasksRoutes(app);
chartRoutes(app);
deviceRoutes(app);
gaugesRoutes(app);
uploadRoutes(app);
borrowsRoutes(app);
devicesRoutes(app);
providerRoutes(app);
____testRoutes____(app);
windowsAuthRoutes(app);

app.listen(port, () => {
    console.clear();
    console.log('\x1b[32m', `Server running in port ${port} on ${process.env.NODE_ENV} mode`);
    scheduledTasks(cron);
    
    if (process.env.NODE_ENV == 'production') {
        fs.appendFile('daemon/calibracionesapi.restarts.log', 
        new Date() + ': Server restarted\n', (err) => {
            if(err){
                console.log("Couldn't update log");
            }
        });
    }
});