const Events = require('../helpers/tasks');

module.exports = (cron) =>{
    const everyDayAt8 = '0 5 7 * * *';
    const everyDayAt7 = '0 10 7 * * *';
    const everyDayAt9 = '0 20 7 * * *';
    const firstDayOfMonthAt9 = ' 0 15 7 1 * *';
    const everyDayAt0 = '0 0 0 * * *';
    const everyWeek = '0 15 0 * * 1';

    let tasks = [];

    let task = cron.schedule(everyDayAt8, async()=>{
        let date = new Date().toString();
        console.log('\x1b[33m%s\x1b[0m','Running task at ' + date);
        await Events.dailyExpired();
        date = new Date().toString();
        console.log('\x1b[33m%s\x1b[0m','Task finished at ' + date);
    });
    tasks.push(task);

    task = cron.schedule(everyDayAt7, async()=>{
        let date = new Date().toString();
        console.log('\x1b[33m%s\x1b[0m','Running task at ' + date);
        await Events.dailyNotice();
        date = new Date().toString();
        console.log('\x1b[33m%s\x1b[0m','Task finished at ' + date);
    });
    tasks.push(task);

    task = cron.schedule(firstDayOfMonthAt9, async()=>{
        let date = new Date().toString();
        console.log('\x1b[33m%s\x1b[0m','Running task at ' + date);
        await Events.monthlyReport();
        date = new Date().toString();
        console.log('\x1b[33m%s\x1b[0m','Task finished at ' + date);
    });
    tasks.push(task);

    task = cron.schedule(everyDayAt9, async()=>{
        let date = new Date().toString();
        console.log('\x1b[33m%s\x1b[0m','Running task at ' + date);
        await Events.managerAdvise();
        date = new Date().toString();
        console.log('\x1b[33m%s\x1b[0m','Task finished at ' + date);
    });
    tasks.push(task);

    task = cron.schedule(everyDayAt0, async()=>{
        let date = new Date().toString();
        console.log('\x1b[33m%s\x1b[0m','Running task at ' + date);
        await Events.dailyBackup();
        date = new Date().toString();
        console.log('\x1b[33m%s\x1b[0m','Task finished at ' + date);
    });
    tasks.push(task);

    task = cron.schedule(everyWeek, async()=>{
        let date = new Date().toString();
        console.log('\x1b[33m%s\x1b[0m','Running task at ' + date);
        await Events.weeklyBackup();
        date = new Date().toString();
        console.log('\x1b[33m%s\x1b[0m','Task finished at ' + date);
    });
    tasks.push(task);

    tasks.forEach(t=>{
        t.start();
    });

    console.log('\x1b[34m%s\x1b[0m', '> ' + tasks.length + ' tasks started at ' + new Date().toString());
}