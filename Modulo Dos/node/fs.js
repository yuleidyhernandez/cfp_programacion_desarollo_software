ejemplo asycroni

const fs = require('node:fs');
console.log(fs.isDir());
console.log(fs.File());
console.log(fs.Link());
console.log(fs.Syslink());
console.log(fs.); 

const fs = require('node:fs')

const stats = fs.statSync('texto.txt');
console.log(stats.isDirectory());
console.log(stats.isFile());
console.log(stats.size);

const fs = require('node:fs')

let data3= fs.readFile('muchoTexto.txt','utf-8',
    () => {
        console.log('Archivo leido');
});

let data2 = fs.readFile('text.txt','utf-8', (err, data ) =>{
    if (err) {
        console.error(`Este es el error ${err}`);
        return;
    }
    console.log(data);
});

let data = fs.readFile('texto.txt','utf-8', (err, data ) =>{
    if (err) {
        console.error(`Este es el error ${err}`);
        return;
    }
    console.log(data);
});

// const data2 = fs.readFileSync('text.txt','utf-8');
// console.log(data2);
// console.log('----------');

// const data3 = fs.readFileSync('muchoTexto.txt','utf-8');
// console.log(data3);
// console.log('-----9090');

// const data = fs.readFileSync('texto.txt', 'utf-8');
// console.log(data);
// console.log('------1010');
// const promises = require('node:fs/promises')

promises.readdir('C:/Users/yuleidyhernandez/Desktop/Git/cfp_programacion_desarrollo_software/Modulo Dos/node')
    .then((files) => {
        files.forEach((file) => {
            console.log(file);
        });
    }).catch((err) => {
        if (err) {
            console.error(`Error reading directory : ${err}`);
            return;
        }
    })






