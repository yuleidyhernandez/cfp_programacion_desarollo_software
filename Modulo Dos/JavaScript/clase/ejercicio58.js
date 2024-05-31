/// laberinto
let posicionFila = 0;
let posicionColumna = 5;
let movimiento_aleatorio = 2;
let obstaculos = 5;
let laberinto = [
    [8, 0, 0, 1, 0, 0, 1, 0, 0, 0],
    [1, 5, 0, 1, 0, 0, 5, 1, 1, 0],
    [1, 1, 0, 1, 0, 0, 1, 0, 0, 0],
    [0, 1, 1, 1, 1, 0, 1, 0, 0, 0],
    [0, 0, 1, 5, 1, 1, 1, 0, 0, 0],
    [0, 0, 1, 0, 0, 1, 0, 0, 0, 0],
    [0, 0, 1, 1, 1, 1, 0, 0, 0, 0],
    [0, 0, 0, 5, 0, 1, 0, 0, 0, 0],
    [0, 0, 0, 5, 0, 1, 1, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 1, 0, 0, 0]
];

do { 

    if ((posicionFila + 1 ) < 10 && laberinto[posicionFila + 1][posicionColumna] != 0 (posicionFila + 1 ) < 10  && laberinto[posicionFila][posicionColumna + 1] != 5) {
        movimiento_aleatorio = 1;
    }else if (posicionColumna - 1 >= 0 && (laberinto[posicionFila][posicionColumna - 1] != 0) && laberinto[posicionFila][posicionColumna + 1] != 5) {
        movimiento_aleatorio = 4;
    }else if ((posicionColumna + 1) < 10 && laberinto[posicionFila][posicionColumna + 1] != 0 && laberinto[posicionFila][posicionColumna + 1] != 5) {
        movimiento_aleatorio = 3;
    }
    else if ((posicionFila-1) >= 0 && laberinto[posicionFila - 1][posicionColumna] != 0 && laberinto[posicionFila][posicionColumna + 1] != 5) {
        movimiento_aleatorio = 2;
    }
    


    switch (movimiento_aleatorio) {
        case 1:
            laberinto[posicionFila][posicionColumna] = 1;
            posicionColumna--;
            break;

        case 2:
            laberinto[posicionFila][posicionColumna] = 1;
            posicionFila--;
            break;
        case 3:
            laberinto[posicionFila][posicionColumna] = 1;
            posicionColumna++;
            break;
        case 4:
            laberinto[posicionFila][posicionColumna] = 1;
            posicionFila++;
            break;
    }

    for (let i = 0; i < laberinto.length; i++) {
        for (let j = 0; j < laberinto[i].length; j++) {
            if (i == posicionFila && j == posicionColumna) {
                laberinto[i][j] = 8;
            }
        }
    }
    console.log(laberinto);

} while (laberinto[9][6] != 8)

console.log("Felicidades");

