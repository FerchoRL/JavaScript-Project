//Verifica si al menos un elemento en un array cumple con una condicion.

//Sintaxis array.some((element, index, array) => {condicion})

//#region 🚀 Verify sintaxis

const numeros = [1,2,3,4,5,6,7]
const someSintaxis = ((val, index, arr) => {
    console.log(`mi current value es: ${val} en indice ${index} del array ${arr}`)
    //Solo recorre hasta donde encuentra el elemento que cumple con la condicion
    return val > 5
})

let someElementFinded = numeros.some(someSintaxis);
console.log(someElementFinded);

//#endregion

//#region  🚀 Verify if an array has negative values

const values = [56, 7, 100, 0, 6, 0, -0, 3, -5]

let negativeValues = values.some(num => num < 0)

console.log(negativeValues); //Return true or false

//#endregion

//#region 🚀 Verify if exist an admin in a user list

const users = [
    {name: "Lidia", age: 33, rol: "user"},
    {name: "Pipian", age: 33, rol: "rent"},
    {name: "Tulan", age: 33, rol: "user"},
    {name: "Ferch", age: 33, rol: "user"},
]

let findAdmin =  users.some( user => user.rol === "Admin")

console.log(findAdmin);

//#endregion