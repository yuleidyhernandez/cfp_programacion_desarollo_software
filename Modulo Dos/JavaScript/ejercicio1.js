// linea ="";

// for (i = 1; i <= 7; i++){
//     linea += "#";
//     console.log(linea);
// };

//imprimr los numeros del 1 al 100
// for (i = 1; i <= 100; i++){
//     if(i % 3 == 0 && i % 5 == 0){
//         console.log("FizzBuzz")
//     }else if (i % 3 == 0){
//         console.log("Fizz")
//     }else if( i % 5 == 0){
//         console.log("Buzz")
//     }else{
//         console.log(i)
//     }
// }

// fila = "#"
// columna = "#"

// for (i=1; i=8; i++){
//     for (j=1; j=8; j++){

//         console.log(i(fila),j(columna))
//     }
// };

// tablero = ""; 

// for (f=1; f=8; f++){
//     for (c=1; c=8; c++){
//         if ((f + c )%2 ==0){
//             tablero += "#"
//         }else{
//             tablero += " "
//         }
//     }
//     tablero += "\n"
// }

// const square = function(x, y, z){
//     return x * x * y - z
// }

// let resultado = square(1, 3, 5);

// console.log(resultado);


// const square = function(x, y, z){
//     console.log(x, y, z)
//     }
    
// let resultado = square(1, 3, 5);
    
// console.log(resultado);

// const makeNoise = function() {
//     console.log("¡Pling!");
//     };
//     makeNoise();
//     // → ¡Pling!
//     const roundTo = function(n, step) {
//     let resto = n % step;
//     return n - resto + (resto < step / 2 ? 0 : step);
//     };
//     console.log(roundTo(23, 10));
//     // → 20

        
// const roundTo = function (n, step){
//     if(typeof n != 'number'){
//         return
//     }
//     console.log('el tipo de dato es numerico');
// };
//
// roundTo("3",10)

// const roundTo = (n, step) => {
//     let remainder = n % step;
//     return n - remainder + (remainder < step / 2 ? 0 : step);
//     };
    

// // funcion de clausura
// let taller = function(nombre_taller){
//     return nombre_alumno => "El alumno "+ nombre_alumno +" Se a inscrito en el taller de "+ nombre_taller; 
// }

// let alumno = taller("Programacion")

// let resultado = alumno("Juan perez")

// let alumnos_programacion = taller("programacion");
// let alumnos_soldadura = taller("programacion");

// console.log(alumnos_programacion);
// console.log(alumnos_soldadura);


// funcion recursiva
function power(base, exponent) {
    if (exponent == 0) {
    return 1;
    } else {
        return base * power(base, exponent - 1);
    }
}
console.log(power(2,3));
// → 8

// function imprimirInventarioGranja(vacas, pollos) {
//     let cadenaVaca = String(vacas);
//     while (cadenaVaca.length < 3) {
//     cadenaVaca = "0" + cadenaVaca;
//     }
//     console.log(`${cadenaVaca} Vacas`);
//     let cadenaPollo = String(pollos);
//     while (cadenaPollo.length < 3) {
//     51
//     cadenaPollo = "0" + cadenaPollo;
//     }
//     console.log(`${cadenaPollo} Pollos`);
//     }
//     imprimirInventarioGranja(7, 11);

// function findSolution(objetivo) {
//     function find(actual, historial) {
//     if (actual === objetivo) {
//     return historial;
//     } else if (actual > objetivo) {
//     return null;
//     } else {
//     return find(actual + 5, `(${historial} + 5)`) ??
//     find(actual * 3, `(${historial} * 3)`);
//     }
//     }
//     return find(1, "1");
//     }
//     console.log(findSolution(24));
    
// let valorminimo = function(a, b, c){
//     if (a < b && a <c){
//         console.log(a +"este numero es el menor")
//     }else if(b < a && b < c){
//         console.log(b + " Este es el numero menor")
//     }else{
//         console.log(c + "Este es el menor")
//     }
// }
// let numero = valorminimo(5, 3, 6)

if(numero === 0){
    return true;
}else if(numero === 1){
    return false;
}else{
    return isEven (numero -2)
}

    console.log(isEven(5));


//   // contador de frijoles
// let contarBs = function(cadena){
//     let mayusculasB = 0;
//     for(i=0; i < cadena.length; i++){ cadena[i]==='B' ? mayusculasB++: 0}
//     return mayusculasB
// }

// console.log(contarBs("hola BeBe BB"))

// let contarCaracter = function(frase,buscar){
//     let busqueda = 0;
//     for(i=0; i< frase.length; i++)frase[i] === buscar ? busqueda++:0;
//     return busqueda
// }

// console.log(contarCaracter("Rudy como chinga", "o"))