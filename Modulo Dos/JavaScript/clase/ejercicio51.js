// suma de matrices

let matrizUno = [
    [5,3,4],
    [1,8,9],
    [6,7,1]
];
let matrizDos = [
    [15,10,81],
    [12,65,43],
    [90,20,35]
];

let suma = 0;

for (let i = 0; i < matrizUno.length; i++) {
    suma += matrizUno[i].reduce((a,b) => a+b) + matrizDos[i].reduce((a,b) => a+b);   
}

console.log(suma);