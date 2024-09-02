//interface

interface Animal{
  nombre:string;
  sonido:()=> void;
}

interface Perro extends Animal{

}

const miPerro:Perro={
  nombre:"Max",
  sonido:() => "Wuaw",
};

console.log(`El perro se llama ${miPerro.nombre} y hace ${miPerro.sonido}`);

// const miPerro = {
//   nombre: "Max",
//   sonido: () => "Wuaw",
// };
// console.log(`El perro se llama ${miPerro.nombre} y hace ${miPerro.sonido}`)