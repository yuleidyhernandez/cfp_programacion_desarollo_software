// suma de numeros positivos
numero1= 0; 
numero = Math.floor(Math.random() * ((25+1) - -5) + -5);
do{
    numero = Math.floor(Math.random() * ((25+1) - -5) + -5);
    numero1 += numero;
} while ( numero < 0);

console.log(numero1);