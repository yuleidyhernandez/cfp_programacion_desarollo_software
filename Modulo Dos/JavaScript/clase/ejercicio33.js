//factorial
function factorialize(num) {
    let factorial = 1;
    for (let i = num; i > 0; i--) {
        factorial *= i;
    }
    return factorial;
}

let numero = 5;
const resultado = factorialize(numero);
console.log(resultado);