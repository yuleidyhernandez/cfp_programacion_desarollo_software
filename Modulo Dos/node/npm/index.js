
const { createServer } = require('node:http');
const fs = require('node:fs');
const path = require('node:path');
const promises= require('node:fs/promises');

const desiredPort = process.env.PORT ?? 1234


const server = createServer ((req, res) => {
    console.log(req.url)
    if(req.url == '/'){
        fs.readFile('../texto.txt','utf-8', (err, data ) =>{
            if (err) {
                console.error(`Este es el error ${err}`);
                return;
            }
        res.end(data)})
        }else{

    }

});
server.listen(desiredPort, () => {
    console.log(`server running at http://localhost:${desiredPort}`);
});
