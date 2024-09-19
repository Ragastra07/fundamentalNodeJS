import https from 'https';

const endpoint = 'https://eo81ep1zddzv4my.m.pipedream.net';
const request = https.request(endpoint, {
    method : 'POST',
    headers : {
        "Content-Type": 'application/json',
        "Accept":  'application/json'
    }
}, (response) => {
    response.addListener('data', (data) => {
        console.info(`recive tihis : ${data.toString()}`);
    });
});

const body = JSON.stringify({
    message: 'Hello, Pipedream!'
});

request.write(body);
request.end();