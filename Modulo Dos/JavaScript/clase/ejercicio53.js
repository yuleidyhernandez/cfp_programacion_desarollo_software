// suma de diagonales

let matriz = [
    [5,3,4,6,8],
    [9,2,4,3,1],
    [4,3,6,7,2],
    [6,8,9,3,7],
    [1,9,7,3,5]
];

let sumaDiagonalPrincipal = 0;
for (let i = 0; i < 5; i++) {
    sumaDiagonalPrincipal += matriz[i][i];
}

let sumaDiagonalSecundaria = 0;
for (let i = 0; i < 5; i++) {
    sumaDiagonalSecundaria += matriz[i][4 - i];
}

console.log("Suma de la diagonal principal:", sumaDiagonalPrincipal);
console.log("Suma de la diagonal secundaria:", sumaDiagonalSecundaria);