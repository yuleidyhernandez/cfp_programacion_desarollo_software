// mayor elemento por fila  54
let matriz = [
    [60, 20, 30],
    [15, 25, 35],
    [5, 55, 25],
    [8, 80, 28]
];

let mayoresPorFila = matriz.map(fila => Math.max(...fila));

console.log(mayoresPorFila);