// calculo de descuento por categoria 
let arrayCategorias= ["A","B","C"];
let arrayPrecios = [300,200,100];
let arrayDescuento= [10,5,0];

for ( i = 0; i < arrayCategorias.length; i++) {
    arrayDescuento[i]= arrayPrecios[i] * arrayDescuento[i]/100;
    arrayFinal = arrayPrecios[i] - arrayDescuento[i]

    console.log(arrayFinal);
};