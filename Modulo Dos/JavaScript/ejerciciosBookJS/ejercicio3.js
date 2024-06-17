/*Everything

Los arrays también tienen un método every análogo al método some. Este
método devuelve true cuando la función dada devuelve true para cada elemento
en el array. En cierto modo, some es una versión del operador || que actúa en
arrays, y every es como el operador &&.
Implementa every como una función que recibe un array y una función de
predicado como parámetros. Escribe dos versiones, una usando un bucle y otra
usando el método some.*/
                                            

arreglo =[1,2,3,4,5, 10 , 20];

console.log(arreglo.every((a) => a > 0 && a<10));
console.log(arreglo.some((a) => a < 10));

function everyyuli(arreglo, callback) {
    for(let element of arreglo){
        if(!callback(element)){
            return false;
        }
    }
    return true;
}


function someyuli(arreglo, callback) {
    return arreglo => a let element 
    
}
console.log(everyyuli(arreglo, (a) => a > 0 && a<10));

