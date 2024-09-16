import process, { exitCode } from "process";

process.addListener("exit", (exitCode) =>{
    console.info(`Aplikasi sudah selesai dengan kode ${exitCode}`);
});

console.info(process.env);
console.info(process.version);
console.table(process.argv);
console.table(process.report);

process.exit(707);

// console.info("hallo");