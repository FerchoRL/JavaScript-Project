//Se usa para buscar y devolver el primer elemento en un array que cumpla con una condicion dada.

//sintaxis: array.find((element, index, array) => return condicion)

//#region  Encontrar primer numero mayor a 10

const numeros = [3, 6, -90, 55, 8, 9, 333]
const firstValue = numeros.find( num => num > 10);
console.log(firstValue)

//#endregion

//#region Primer palabra con la letra O

const palabras = ["JavaScript", "CSS", "HTML", "Node", "Cobbol"]
let findWord = palabras.find( palabra => palabra.includes("o"));
console.log(findWord);

//#endregion

//#region Buscar nombre en array

const users = [
    {name: "Anito", age: 25},
    {name: "Fercho", age: 33},
    {name: "Cris", age: 12},
    {name: "Lupe", age: 55}
];

let findUser = users.find(user => user.name === "Fercho")
console.log(findUser);

//#endregion