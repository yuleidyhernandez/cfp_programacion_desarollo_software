class Animal {
    nombre: string;
    hacerSonido: string;
  
    constructor(nombre:string,hacerSonido:string){
      this.nombre = nombre
      this.hacerSonido = hacerSonido ;
    }
  }
   
  class Perro extends Animal{
    color:string;

    constructor(color:string,hacerSonido:string){
      super(hacerSonido,color)
      this.hacerSonido= hacerSonido
    }
  }
  
  const perro:Perro= {
      nombre: "rambo",
      hacerSonido:"guao",
      color:"negro"
  }
  
  console.log(perro.hacerSonido)

  // class Animal {
//   nombre: string;
//   hacerSonido: string;
//   constructor(nombre:string,hacerSonido:string){
//     this.nombre = nombre
//     this.hacerSonido = hacerSonido ;
//   }
// }
// class Perro extends Animal{
// }
// const perro:Perro= {
//     nombre: "rambo",
//     hacerSonido:"guao"
// }
// console.log(perro.hacerSonido)