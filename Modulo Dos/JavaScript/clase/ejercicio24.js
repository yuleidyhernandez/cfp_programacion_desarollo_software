//adivina el numero    
let numUsuario = 88;

do{
    numero = Math.floor(Math.random() * ((100+1) - 1) + 1);
    console.log(numero)

}while (numero === numUsuario);
 if( numero === numUsuario){
    console.log("Has acertado",  numUsuario);
 }else{
    console.log("Sige intentando")
 }