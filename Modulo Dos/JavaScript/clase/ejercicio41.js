//suma de elementos
let suma= 0;
let myArray = [];
let numerosArray;  

for (let i = 0; i < 5; i++) {
    myArray[i] = Math.floor(Math.random() * ((10+1) - 1) + 1);
    suma += myArray[i]
}

console.log(myArray);
console.log(suma);