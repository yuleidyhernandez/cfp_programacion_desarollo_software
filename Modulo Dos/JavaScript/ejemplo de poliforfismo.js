class Temperature {
    constructor(celsius) {
    this.celsius = celsius;
    }      
    get fahrenheit() {
    return this.celsius * 1.8 + 32;
    }
    set fahrenheit(value) {
    this.celsius = (value - 32) / 1.8;
    }
    static fromFahrenheit(value) {
    return new Temperature((value - 32) / 1.8);
    }
    }
    let temp = new Temperature(22);
    console.log(temp.fahrenheit);
    // → 71.6
    temp.fahrenheit = 86;
    console.log(temp.celsius);
    // → 30


class suma {
    constructor(numero1, numero2) {
        this.numero1 = numero1
        this.numero2 = numero2
    }
    get num1() {
        return this.numero1 * 2;
    }
    set num1(valor1) {
        return this.numero1 = (valor1 + 2);
    }

    get num2 () {
        return this.numero1 * 5;
    }
    set num2 (valor2) {
        this.numero2 = valor2
    }
    static fromSuma (valor1,valor2) {
        return new suma (valor1, valor2)
    }
};

let rValor1 = new suma (5,3);
rValor1.num1 = 6
console.log(rValor1.num1);
console.log(rValor1.num2);



class resta {
    constructor(numero1) {
        this.numero1 = numero1
    }
    get num1() {
        return (this.numero1 - 2);
    }
    set num1(valor1) {
        this.numero1 = valor1
    }

    static fromResta (valor1) {
        return new resta (valor1)
    }
};



let segundo = new resta (8);
console.log(segundo.num1);

segundo.num1 =6
console.log(segundo.num1);


class reloj {
    constructor (reloj) {
        this.reloj = reloj;
    }

    get color () {
        return ((this.reloj * 2) /3 )/2;
    }

    set color(valor) {
       this.reloj = valor
    }

    static fromReloj (valor) {
        return new reloj ((valor -2)*8);
    }
};

let resultado = new reloj (30);
console.log(resultado.color);

resultado.color = 2
console.log(resultado.color);





