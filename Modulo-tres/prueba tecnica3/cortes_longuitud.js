// let metros = 4;
// let contador = 1
// while (metros-1 <= contador){
//     let cortes = metros / contador
//     contador++
//     console.log(cortes);
//   };
// let cortes = metros/
// let longitud = metros /cortes;
// let maxicimo =Math.pow(longitud,cortes);
// console.log(maxicimo);


const duplicar = (num) => {
    num = num + num;
    console.log(num);
    if (num > 100) {
        return 'Salir';
    }
    return duplicar(num);
};

console.log(duplicar(4));


const fibonacci = (n) => {
    if (n <= 1) {
        return n;
    }
    return fibonacci(n - 1) + fibonacci(n - 2);
};

console.log(fibonacci(6));