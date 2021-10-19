const Service = require('node-windows').Service

const srvc = new Service({
    name: 'CalibracionesAPI',
    description: 'Service for Calibraciones API Service',
    script: "C:\\Users\\I.Lopez\\projects\\Calibraciones-API\\index.js"
});

srvc.on('install', () => {
    console.log('Service installed');
    srvc.start();
});

srvc.on('uninstall', () => {
    console.log('Service uninstalled');
    console.log('The service exists: ', srvc.exists);
});

srvc.install();