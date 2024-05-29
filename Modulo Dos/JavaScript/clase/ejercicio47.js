// contador de ocurrencias

let total = 0;
let letraIngresada = "a";
let letras = ["a","b","d","a","h","j","l","a","o","q","s","v","a","z","x"];

for (i = 1; i <= 15; i++) {
    if (letras[i] == letraIngresada) {
        total = total + 1
    }
}
console.log(total); 
