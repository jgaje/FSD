const http = require('http');
const hostname = "localhost";
const port = 8000;
const SkillServer = http.createServer(function (request, response) {
    response.writeHead(200, { 'Content-Type': 'text/plain' });
    response.write("Hello from Skillsoft");
    response.end();
})
SkillServer.listen(port, hostname);