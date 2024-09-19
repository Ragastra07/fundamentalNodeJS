import http from 'http';

const server = http.createServer((request, response) => {
    console.info(request.method);
    console.info(request.url);
    console.table(request.headers);

    if (request.method === 'POST') {
        request.addListener("data", (data) => {
            response.setHeader("Content-Type", "application/json");
            response.write(data);
            response.end();
        });
    } else {
        if (request.url === "/tara" ) {
        response.write("hallo de taras");
    } else {
        response.writeHead(404);
        response.end("not found dude");
    }
    }

    // response.write("hallo http server dude");
    response.end();
});

server.listen(3000);