//Agrega uno o mas elementos al inicio de un array y devuelve la nueva longitud del array

//Sintaxis array.unshift(elemento1, elemento2, ...)

//#region 🚀 Agregar un solo elemento

let frutas = ["Manzana", "Naranja", "Sandia"];

let nuevaLongitud = frutas.unshift("Uva");

console.log(frutas);//["Naranja", "Sandia"]
console.log(nuevaLongitud);

//#endregion

//#region 🚀 Insertar elementos dinamicamente

let lista = ["C","D","E"];
let letrasNuevas = ["A","B"]

lista.unshift(...letrasNuevas);//Spread operator para desestructurar
console.log(lista);

//#endregion