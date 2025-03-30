//Extrae una porcion del array sin modificar el original

//Sintaxis: array.slice(inicio, fin)

//#region 🚀Extraer una parte del array con indices positivos

const frutas = ["Manzana", "Naranja", "Banana", "Kiwi", "Uva"];

const nuevasFrutas = frutas.slice(1,4);

console.log(nuevasFrutas) //[ 'Naranja', 'Banana', 'Kiwi' ]

//#endregion

//#region 🚀 Usando slice con indices negativos

const numeros = [10, 20, 30, 40, 50, 60];
console.log(numeros.slice(-5))//Extrae los ultimos 5 numeros
console.log(numeros.slice(-5, -2))//Extrae de derecha a izq del numero quinto al segundo numero

//#endregion

//#region  🚀 Copiar un array sin modificar el original

const original = [1, 2, 3, 4, 5];
const copia = original.slice();

console.log(copia)
console.log(original === copia);//false, son diferentes en memoria

//Slice sin argumentos copia todo el array creando una nueva referencia en memoria

//#endregion