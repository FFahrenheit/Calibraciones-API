const Events = require('../helpers/tasks');
require('dotenv').config();

module.exports = (cron) => {
    const everyDayAt705 = '0 5 7 * * *';
    const everyDayAt710 = '0 10 7 * * *';
    const everyDayAt720 = '0 20 7 * * *';
    const firstDayOfMonthAt715 = ' 0 15 7 1 * *';
    const everyDayAt000 = '0 0 0 * * *';
    const everyWeekAt015 = '0 15 0 * * Monday';

    let tasks = [];

    let task = cron.schedule(everyDayAt705, async () => {
        let date = new Date().toString();
        console.log('\x1b[33m%s\x1b[0m', 'Running task at ' + date);
        await Events.dailyExpired();
        date = new Date().toString();
        console.log('\x1b[33m%s\x1b[0m', 'Task finished at ' + date);
    });
    tasks.push(task);

    task = cron.schedule(everyDayAt710, async () => {
        let date = new Date().toString();
        console.log('\x1b[33m%s\x1b[0m', 'Running task at ' + date);
        await Events.dailyNotice();
        date = new Date().toString();
        console.log('\x1b[33m%s\x1b[0m', 'Task finished at ' + date);
    });
    tasks.push(task);

    task = cron.schedule(firstDayOfMonthAt715, async () => {
        let date = new Date().toString();
        console.log('\x1b[33m%s\x1b[0m', 'Running task at ' + date);
        await Events.monthlyReport();
        date = new Date().toString();
        console.log('\x1b[33m%s\x1b[0m', 'Task finished at ' + date);
    });
    tasks.push(task);

    task = cron.schedule(everyDayAt720, async () => {
        let date = new Date().toString();
        console.log('\x1b[33m%s\x1b[0m', 'Running task at ' + date);
        await Events.managerAdvise();
        date = new Date().toString();
        console.log('\x1b[33m%s\x1b[0m', 'Task finished at ' + date);
    });
    tasks.push(task);

    task = cron.schedule(everyDayAt000, async () => {
        let date = new Date().toString();
        console.log('\x1b[33m%s\x1b[0m', 'Running task at ' + date);
        await Events.dailyBackup();
        date = new Date().toString();
        console.log('\x1b[33m%s\x1b[0m', 'Task finished at ' + date);
    });
    tasks.push(task);

    task = cron.schedule(everyWeekAt015, async () => {
        let date = new Date().toString();
        console.log('\x1b[33m%s\x1b[0m', 'Running task at ' + date);
        await Events.weeklyBackup();
        date = new Date().toString();
        console.log('\x1b[33m%s\x1b[0m', 'Task finished at ' + date);
    });
    tasks.push(task);

    skip = process.env.SKIP == 'true';
    
    if (skip) {
        console.log('\x1b[34m%s\x1b[0m', '> ' + tasks.length + ' tasks skipped ');
        tasks.forEach(t => {
            t.stop();
        });
    } else {
        tasks.forEach(t => {
            t.start();
        });
        console.log('\x1b[34m%s\x1b[0m', '> ' + tasks.length + ' tasks started at ' + new Date().toString());
    }

}