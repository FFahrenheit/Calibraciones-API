const Events = require('../helpers/tasks');

module.exports = (cron) =>{
    let tasks = [];

    let task = cron.schedule('0 * * * * *', ()=>{
        let date = new Date().toString();
        console.log('\x1b[33m%s\x1b[0m','Running task at ' + date);
    });
    tasks.push(task);

    task = cron.schedule('30 * * * * *', ()=>{
        let date = new Date().toString();
        console.log('\x1b[33m%s\x1b[0m','Running task at ' + date);
    });
    tasks.push(task);

    tasks.forEach(t=>{
        t.start();
    });

    console.log('\x1b[34m%s\x1b[0m', '> ' + tasks.length + ' tasks started at ' + new Date().toString());
}