// contador de numeros pares
let contador = 0; 
let array =[];

for (i = 1; i <= 6 ; i++) {
    array[i]= Math.floor(Math.random() * ((10+1) - 1) + 1);
    if (array[i] % 2 == 0) {
        contador = contador + 1
    }
}
console.log(contador);