// Eliminacion de duplicados
let arrayPrincipal = [1,5,2,5,4,3,8,5,4,3,5,1];
let arrayFinal = arrayPrincipal.filter((item, index) => {
    return arrayPrincipal.indexOf(item) === index;
});
console.log(arrayFinal);