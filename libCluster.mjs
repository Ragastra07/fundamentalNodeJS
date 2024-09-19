import cluster from 'cluster';
import http from 'http';
import os from 'os';
import process from 'process';

if (cluster.isPrimary) {
    console.info(`this is primary : ${process.pid}`);
    //menjalankan worker
    for (let index = 0; index < os.cpus().length; index++) {
        cluster.fork();
    }
    cluster.addListener("exit", (Worker) => {
        console.info(`worker-exit: ${Worker.id}`);
        cluster.fork();
    });
}

if(cluster.isWorker){
    console.info(`this is worker : ${process.pid}`);
    const server = http.createServer((req, res) => {
        res.write(`process form ${process.pid}`);
        res.end();
        process.exit();
    });
    server.listen(3000);
}