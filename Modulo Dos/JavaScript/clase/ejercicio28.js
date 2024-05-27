// adivina el numero 

let numeroAleatorio = 0;
let numeroEncontrar = 0; 

numeroAleatorio = Math.floor(Math.random() * ((10+1) - 1) + 1);
numeroEncontrar = Math.floor(Math.random() * ((10+1) - 1) + 1);


if (numeroAleatorio === numeroEncontrar){
    numeroAleatorio = Math.floor(Math.random() * ((10+1) - 1) + 1);
    numeroEncontrar = Math.floor(Math.random() * ((10+1) - 1) + 1);
    console.log("Has acertado: ", numeroEncontrar, "Ese era el numero felicidades.")
}else{
    console.log("Siga intentandolo");
}
    console.log(numeroAleatorio);
    console.log(numeroEncontrar);