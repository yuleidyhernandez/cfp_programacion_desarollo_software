interface Persona {
    nombre:string
    edad:number
}

const persona:Persona = {
    nombre : "rosa",
    edad: 25
}

function objeto(persona:Persona){
   return `${persona.nombre}, ${persona.edad}`
}

console.log(objeto(persona))

// interface Persona {
//     nombre:string
//     edad:number
// }
// const persona = {
//     nombre : "rosa",
//     edad: 25
// }
// function objeto(persona:Persona){
//    return console.log(`${persona.nombre}, ${persona.edad}`)
// }
// console.log(objeto)