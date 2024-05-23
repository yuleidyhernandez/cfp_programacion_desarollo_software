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

// tablero = ""; 

// for (f=1; f=8; f++){
//     for (c=1; c=8; c++){
//         if ((f + c ) % 2 ==0){
//             tablero += "#"
//         }else{
//             tablero += " "
//         }
//     }
//     tablero += "\n"
// }

// console.log(tablero);

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
// };
    
// let taller = function(nombre_taller){
//     return nombre_alumno => "El alumno "+ nombre_alumno +" Se a inscrito en el taller de "+ nombre_taller; 
// }

// let alumno = taller("Programacion")

// let resultado = alumno("Juan perez")


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
    
