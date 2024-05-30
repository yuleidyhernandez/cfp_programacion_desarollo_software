let mapa = [
    [0,0,0,0,0],
    [0,0,0,0,0],
    [0,0,0,0,0],
    [0,0,0,0,0],
    [0,0,0,0,0]
];
let perdio ;
// let cantidadMinas = 0;
// let filaAleatoria = 0;
let columnaAleatoria = 0;
let ingresarPosicion = 3;


cantidadMinas =  Math.floor(Math.random() * ((5+1) - 1) + 1);
console.log('Cantidad minas', cantidadMinas);

for (f = 1; f < mapa.length; f++) {
    for (c = 1; c < mapa.length; c++) {
        if ( mapa[f,c]) {
            mapa[filaAleatoria,columnaAleatoria] = "#"
        }
    }

};

perdio = false;
do {
    let contador = 0;
    for (filaAleatoria = 0; filaAleatoria < 5; filaAleatoria++) {
        for (columnaAleatoria = 0; columnaAleatoria < 5; columnaAleatoria++) {
            contador += 1
            if (contador == ingresarPosicion) {
                if (mapa[filaAleatoria,columnaAleatoria] == 5) {
                    perdio = true;
                }else {
                    mapa[filaAleatoria,columnaAleatoria] == 0 ;
                }
            }
            console.log(mapa[filaAleatoria,columnaAleatoria]);
        }
    }


}while (perdio == true);

