numeros = [4,6,24,20,56,82,45,96];
let numeros_grandes = function(digitos){
    ordenar = digitos.sort((a,b)=>a-b);
    longuitud = ordenar.length-2;                                                                                       
    return digitos[longuitud];
};

console.log('El segundo numero mas grande es :'+numeros_grandes(numeros));