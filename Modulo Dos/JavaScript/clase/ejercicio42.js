// mayor y menor en un array
let menor= 0;
let mayor = 0;
let myArray = [];
 for (let i = 0; i < 8; i++) {
    myArray[i]= Math.floor(Math.random() * ((10+1) - 1) + 1);


 }
console.log(`el numero maximo es ${ Math.max(...myArray)} El numero menor es ${Math.min(...myArray)} `);
