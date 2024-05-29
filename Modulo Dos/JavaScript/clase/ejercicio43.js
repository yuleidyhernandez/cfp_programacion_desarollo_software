// promedio notas

let suma = 0;
let arrayPromedio = [];

for (i = 0; i < 10; i++) {
    arrayPromedio[i]= Math.floor(Math.random() * ((10+1) - 1) + 1);
    console.log(arrayPromedio);
    suma = suma + arrayPromedio[i]
}
 console.log(suma /10)