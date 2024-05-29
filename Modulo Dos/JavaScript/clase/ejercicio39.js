// secuencia fibonacci
let anterior = 0;
let actual = 0;
let resultado = 0;

for (i = 0; i <= 10; i++) {
    console.log(actual);
    if (i == 0) {
        actual = 1;
        anterior = 0;
    } else {
        resultado = actual + anterior;
        anterior = actual;
        actual = resultado;
    }
}