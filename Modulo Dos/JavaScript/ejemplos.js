// console.log("Un carácter de nueva línea se escribe como \"\\n\".");

// let edad = 20;
// let nombre = 'Juan'
// console.log(` Mi nombre es : ${nombre} y tengo: ${edad} años`);

// console.log(`la mitad de 100 es ${100 / 2}`
// )

// prompt("Ingrese el código de acceso");

// let abc = "abc";
// console.log(abc.length);
// → 3


// .keys
console.log(Object.keys({x: 0, y: 0, z: 2}));
// → ["x", "y", "z"]

// .assign
let objetoA = {a: 1, b: 2};
Object.assign(objetoA, {b: 3, c: 4});
console.log(objetoA);
// → {a: 1, b: 3, c: 4}

let objetoB = {Z: 60, y: 55, w: 50};
Object.assign(objetoA, objetoB);
console.log(objetoA);

//MUTABILIDAD 
let object1 = {value: 10};
let object2 = object1;
let object3 = {value: 10};
console.log(object1 == object2);
// → true
console.log(object1 == object3);
// → false
object1.value = 15;
console.log(object2.value);
// → 15
console.log(object3.value);
// → 10


const score = {visitors: 0, home: 0};
// Esto está bien
score.visitors = 1;
score.home=2;
// Esto no está permitido
// score = {visitors: 1, home: 1};
console.log(score)


function phi(table) {
return (table[3] * table[0] - table[2] * table[1]) /
Math.sqrt((table[2] + table[3]) *
(table[0] + table[1]) *
(table[1] + table[3]) *
(table[0] + table[2]));
}
console.log(phi([76, 9, 4, 1]));
// → 0.068599434


//METODO INCLUDES

myArray = [10,5,6,7,8,9,20];
verificacion = myArray.includes(5);
verificacion2 = myArray.includes(1);

console.log(verificacion)
console.log(verificacion2)


function journalEvents(journal) {
    let events = [];
    67
    for (let entry of journal) {
    for (let event of entry.events) {
    if (!events.includes(event)) {
    events.push(event);
    }
    }
    }
    return events;
}
//console.log(journalEvents(JOURNAL));
// → ["zanahoria", "ejercicio", "fin de semana", "pan", …]


for (let event of journalEvents(JOURNAL)) {
    console.log(event + ":", phi(tableFor(event, JOURNAL)));
    }

    console.log(String(6).padStart(3, "-"));
// → 006

// let coordenadas = {x: 10, y: 0};
// console.log({...coordenadas, y: 5, z: 1});
// // → {x: 10, y: 5, z: 1}

// let coordenadas = {x: 10, y: 0};
// console.log({y: 5, z: 1, ...coordenadas });
// // → {x: 10, y: 5, z: 1} 

//destructuracion
let {name} = {name: "Faraji", age: 23};
console.log(name);
// → Faraji

let {age} = {name: "Faraji", age: 23};
console.log(age);
// → Faraji

//acceso opcinal  propiedades
function city(objeto) {
    return objeto.address?.city;
    }
    console.log(city({address: {city: "Toronto"}}));
    // → Toronto
    console.log(city({name: "Vera"}));
    // → undefined

function city(objeto) {
    return objeto?.address;
    }
    console.log(city({address: {city: "Toronto"}}));
    // → Toronto
    console.log(city({address: { name: "Vera"}}));
    // → undefined



    // abstraccion

    function repeat(n, action) {
        for (let i = 0; i < n; i++) {
        action(i);
        }
        }
    
    let etiquetas = [];
    repeat(5, i => {
    etiquetas.push(`Unidad ${i + 1}`);
    });

    ["A", "B"].forEach(l => console.log(l));


    function repeatLog(n) {
        for (let i = 0; i < n; i++) {
        console.log(i);
        }
    }
    
    function repeat(n, action) {
        for (let i = 0; i < n; i++) {
        action(i);
        }
        }
    
    let etiquetas = [];
    repeat(5, i => {
    etiquetas.push(`Unidad ${i + 1}`);
    });
    
    let myArray =["a","b","c"];
    myArray.forEach(i =>{console.log(i)});
    
    ["A", "B"].forEach(l => console.log(l));
    
    let estudiante = [{
        name: "Manuel",
        age : 20
    },
    {
        name:"Luis",
        age:22
    },
    {
    name: "Dayana",
    age: 20
    }];
    
    let estudiantesDeVeinte = estudiante.filter(estudiante => estudiante.age == 20);
    
    let nombreEstudiante = estudiantesDeVeinte.map(estudiante => estudiante.name);
    
    console.log(nombreEstudiante);
    console.log(estudiantesDeVeinte);
    
    function characterCount(script) {
        return script.ranges.reduce((count, [from, to]) => {
        return count + (to - from);
        }, 0);
        }
        console.log(SCRIPTS.reduce((a, b) => {
            return characterCount(a) < characterCount(b) ? b : a;
            }));
            // → {name: "Han", …}    

            // clases
class Lavadora{
    constructor(tamanio, capacidad,marca,modelo,tipo){// poner parametros
        this.tamanio= tamanio,
        this.capacidad= capacidad,
        this.marca= marca,
        this.modelo= modelo,
        this.tipo= tipo
    }
    lavar(){
        console.log("Esta lavando")
    }
    exprimer(){
        console.log("Esta exprimiendo")
    }
    enjuagar(){
        console.log("Esta enjuagando")
    }

}

// instanciar
// let lavadora = new Lavadora();
// console.log(lavadora) /// imprime un objeto;

// como llamar un objeto
// lavadora.lavar();
// lavadora.exprimer();
// lavadora.enjuagar();

// poner propiedades
let lavadora = new Lavadora("15 pies","45 lbs","lm20","Samsung","electrica");
console.log(lavadora)

class Lavadora{
    constructor(tamanio, capacidad,marca,modelo,tipo){// poner parametros
        this.tamanio= tamanio,
        this.capacidad= capacidad,
        this.marca= marca,
        this.modelo= modelo,
        this.tipo= tipo
    }
    lavar(cantidad){
        let total = cantidad * 1;
        console.log(total < Lavadora.capacidad ? "Se esta lavando la ropa":"Exeso de ropa")
    }
    exprimer(){
        console.log("Esta exprimiendo")
    }
    enjuagar(){
        console.log("Esta enjuagando")
    }

}

let lavadora = new Lavadora("15 pies",45,"lm20","Samsung","electrica");
lavadora.lavar(15);