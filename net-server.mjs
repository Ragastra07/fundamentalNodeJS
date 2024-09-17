import net from 'net';

const server = net.createServer((client) => {
    console.info('Client connected');
    client.on('data', (data) => {
        console.info(`Client connected received ${data.toString()}}`);
        client.write(`the raw data is ${data}\r\n`);
    });
});

server.listen(8080, 'localhost');