import {threadId, parentPort} from 'worker_threads';

parentPort.addEventListener("message", (message) => {
    for (let index = 0; index < message; index++) {
        console.info(`thread is ${threadId} and massage is ${index}`);
        parentPort.postMessage(index);
        
    }
    parentPort.close();
});