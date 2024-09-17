import net from 'net';

const client = net.createConnection({
    port: 8080,
    host: 'localhost'
});

client.on('data', (data) => {
    console.info(`Server sent: ${data.toString()}`);
});

setInterval(() => {
    client.write(`${process.argv[2]}\r\n`);
},2000)