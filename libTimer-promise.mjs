import timers from "timers/promises";

// console.info(new Date());
// const name = await timers.setTimeout(3000, "jokowi");
// console.info(new Date());

// console.info(name);

for await (const startTime of timers.setInterval(1000, new Date())) {
    console.info(`start time di ${startTime}`);
};