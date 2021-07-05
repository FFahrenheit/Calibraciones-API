const Events = require('../helpers/tasks');

module.exports = (cron) =>{
    const everyDayAt8 = '0 0 8 * * *';
    const everyDayAt7 = '0 0 7 * * *';
    const firstDayOfMonthAt9 = ' 0 0 9 1 * *';
    let tasks = [];

    let task = cron.schedule(everyDayAt8, ()=>{
        let date = new Date().toString();
        console.log('\x1b[33m%s\x1b[0m','Running task at ' + date);
    });
    tasks.push(task);

    task = cron.schedule(everyDayAt7, ()=>{
        let date = new Date().toString();
        console.log('\x1b[33m%s\x1b[0m','Running task at ' + date);
    });
    tasks.push(task);

    task = cron.schedule(firstDayOfMonthAt9, ()=>{
        let date = new Date().toString();
        console.log('\x1b[33m%s\x1b[0m','Running task at ' + date);
    });
    tasks.push(task);

    tasks.forEach(t=>{
        t.start();
    });

    task = cron.schedule('0 0 ')

    console.log('\x1b[34m%s\x1b[0m', '> ' + tasks.length + ' tasks started at ' + new Date().toString());
}