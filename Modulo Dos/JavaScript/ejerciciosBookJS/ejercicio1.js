/*Aplanamiento

Utiliza el método reduce en combinación con el método concat para “aplanar”
un array de arrays en un único array que contenga todos los elementos de los
arrays originales.*/

let array1 = [
    [1, 2, 5, 4, 1, 3, 5, 2, 1],
    [5, 3, 4, 6, 2, 1, 3, 4, 3],
];

const sumaTotal = array1.reduce((acumulador, posicion) => acumulador.concat(posicion));
console.log(sumaTotal);