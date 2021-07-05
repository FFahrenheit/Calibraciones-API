const Events = require('../helpers/tasks');

module.exports = (cron) =>{
    const everyDayAt8 = '0 10 6 * * *';
    const everyDayAt7 = '0 15 6 * * *';
    const firstDayOfMonthAt9 = ' 0 5 6 1 * *';
    let tasks = [];

    let task = cron.schedule(everyDayAt8, async()=>{
        let date = new Date().toString();
        console.log('\x1b[33m%s\x1b[0m','Running task at ' + date);
        await Events.dailyExpired();
    });
    tasks.push(task);

    task = cron.schedule(everyDayAt7, async()=>{
        let date = new Date().toString();
        console.log('\x1b[33m%s\x1b[0m','Running task at ' + date);
        await Events.dailyNotice();
    });
    tasks.push(task);

    task = cron.schedule(firstDayOfMonthAt9, async()=>{
        let date = new Date().toString();
        console.log('\x1b[33m%s\x1b[0m','Running task at ' + date);
        await Events.monthlyReport();
    });
    tasks.push(task);

    tasks.forEach(t=>{
        t.start();
    });

    console.log('\x1b[34m%s\x1b[0m', '> ' + tasks.length + ' tasks started at ' + new Date().toString());
}