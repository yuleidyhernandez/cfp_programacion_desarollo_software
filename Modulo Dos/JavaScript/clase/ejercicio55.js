// rotacion de matriz


function rotateMatrix(matrix) {
    let matrizCantidad = matrix.length;

    for (let i = 0; i < matrizCantidad; i++) {
        for (let j = i + 1; j < matrizCantidad; j++) {
            [matrix[i][j], matrix[j][i]] = [matrix[j][i], matrix[i][j]];
        }
    }

    for (let i = 0; i < matrizCantidad; i++) {
        matrix[i].reverse();
    }
}

const matrix = [
    [1, 2, 3, 4],
    [5, 6, 7, 8],
    [9, 10, 11, 12],
    [13, 14, 15, 16]
];

rotateMatrix(matrix);

console.log(matrix ) ;