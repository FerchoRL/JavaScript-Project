//Modifica un array eliminando, reemplazando o agregando elementos en una posicion especifica.

//Sintaxis arraY.slice(inicio, cantidadEliminar, elemento1, elemento2...)

//Inicio: indice donde comenzara la modificacion
//CantidadEliminar -> Numero de elementos a eliminar desde la posicion inicio
//Elemento1, 2,...:(opcional) elementos a agregar en la posicion inicio

//Devuelve un array con los elementos eliminados

//#region 🚀 Eliminar elementos

let frutas = ["Manzana", "Naranja", "Sandia","Uva","Pera","Melocoton"];
let eliminados = frutas.splice(1,3)//Elimina 3 elementos a partir del indice 1

console.info(frutas);
console.warn(eliminados);

//#endregion

//#region 🚀 Insertar elementos sin eliminar ninguno

let lista = [1,2,5,6]
let numerosNuevos = [3,4]

lista.splice(2,0,...numerosNuevos)//spread operator para desestructurar el array numerosNuevos
// Inserta "3" y "4" en la posición 2
console.info(lista)

//#endregion

//#region 🚀 Reemplazar elementos

let letras = ["A", "B", "X", "Y", "E"]
let nuevasLetras = ["C","D"]

letras.splice(2,2,...nuevasLetras)//spread operator para desestructurar el array nuevasLetras
// Inserta C , D en la posición 2 y elimina X , Y
console.log(letras);

//#endregion

//#region 🚀 Vaciar un array

let data = ["A", "B", "X", "Y", "E"]

data.splice(0,data.length)
console.log(data);

//#endregion

//#region 🚀 Convertir splice en una funcion personalizada

const removerElemento = (arr,elemento) => {
    let index = arr.indexOf(elemento);//Indice del elemento a borrar
    if (index !== -1) arr.splice(index,1)
}

let nombres = ["Ana", "Carlos", "Beatriz", "Daniel"]

removerElemento(nombres,"Daniel");

console.log(nombres)


//#endregion