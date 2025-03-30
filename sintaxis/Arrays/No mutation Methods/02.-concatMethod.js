//Se usa para unir dos o mas arrays en uno solo sin modificar los originales

//Sintaxis: nuevoArray = array1.concat(array2, array3, ...);

//#region 🚀 Unir dos arrays

const numeros1 = [1,2,3];
const numeros2 = [4,5,6];

const resultados = numeros1.concat(numeros2);

console.log(resultados);//[ 1, 2, 3, 4, 5 ]

//#endregion


//#region 🚀 Concatenar valores individuales con un array

const letras = ["a", "b", "c"]
const resultado = letras.concat("D","E")
console.log(resultado);

//#endregion

//#region 🚀 Concatenar multiples arrays

const numeros = [1,2,3,4]
const letras2 = ["a", "b", "c"]
const extra = ["X","Y","Z"]

const result = numeros.concat(letras2, ["Hola","Mundo"], extra);

console.log(result);

//#endregion