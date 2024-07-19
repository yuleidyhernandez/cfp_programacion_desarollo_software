const promises= require('node:fs/promises');

// promises.readFile('texto.txt','utf-8')
//     .then((data) => {
//         console.log(data);
//     }).catch((err) => {
//         console.error(`Error reading file: ${err}`);
//     })

// promise.all([
//     promises.readFile('text.txt', 'utf8'),
//     promises.readFile('texto.txt','utf8'),
//     promises.readFile('muchTexto','utf8')
// ]).then(([file1,file2,file3]) =>{
//     console.log(file1);
//     console.log(file2);
//     console.log(file3);
// }).catch((err) =>{
//     console.error(`Error reading file: ${err}`);
// })

// async function promesas(){
//     let data3 = await promises.readFile('muchoTexto.txt','utf8');
//     console.log(data3);
//     console.log('----------');
//     let data2 = promises.readFile('text.txt','utf8');
//     console.log(data2);
//     console.log('----------9090');
//     let data =await  promises.readFile('texto.txt','utf8');
//     console.log(data);
//     console.log('----------1010');
// };

// promesas()

