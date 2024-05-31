// promedio por columna  52
let matriz = [
    [4,8,9,12],
    [5,7,12,10],
    [9,5,1,3],
    [1,3,5,6]
];

let promedios = [];
let promedioPorColumna = (matriz) => {

    for (let columna = 0; columna < matriz[0].length; columna++) {
        let sumaColumna = matriz.reduce((suma, fila) => suma + fila[columna], 0);
        let promedio = sumaColumna / matriz.length;
        promedios.push(promedio);
    }

    return promedios;
};

let promediosColumnas = promedioPorColumna(matriz);
console.log("Promedios por columna:", promediosColumnas);



