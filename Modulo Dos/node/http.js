const { createServer } = require('node:http');

const hostname = '192.168.52.73';
const port = 1234;

const server = createServer ((req, res ) => {
    res.stastusCode= 200;
    res.setHeader('Content-type', 'text/plain');
    res.end('Hello World');
 });

server.listen(port, hostname, () => {
    console.log(`server running at http://${hostname}:${port}`);
});



