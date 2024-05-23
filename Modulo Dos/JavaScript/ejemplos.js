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