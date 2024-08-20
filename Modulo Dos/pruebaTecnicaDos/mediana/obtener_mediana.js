impar= [19,26,28,29,34,38,43,45,49,51,62];

par =[19,26,28,29,33,34,38,43,45,49,51,62];

let mediana = function(arreglo1){
    let total = arreglo1.length
        let numero = (total + 1) /2 
        return arreglo1[numero-1]    
    }

console.log(mediana(impar));

let mediana2 = function(arreglo2){
    let total = arreglo2.length
    let mitad1 = (total /2)
    let mitad2 = (total /2 +1);
    let posicion1 = arreglo2[mitad1-1]
    let posicion2 = arreglo2[mitad2-1]
    let suma = posicion1 + posicion2
    let resultado = suma * 1 /2
    // return arreglo2[resultado] 
    console.log(resultado);
    }
console.log(mediana2(par));
