//Verifica si todos los elementos de un array cumplen con una condicion. De ser asi, regresa true. De lo contrario, false.

//Sintaxis array.every((element, index, array) => condition)

//#region 🚀 Verify sintaxis

const words = ["Fer","Alan",78,"",null,"Max"]

const verifyWords = ((val, index, arr) => {
    console.log(`Mi current val es: ${val} con index ${index} en el array ${arr}`);

    return typeof(val) === "string";
});

console.log(words.every(verifyWords));//Returns false due there are string, numbers and null

//#endregion

//#region Verify if all user are more than 18 years old

const users = [
    { name: "Ana", age: 81},
    { name: "Paul", age: 32},
    { name: "Yos", age: 18},
    { name: "Pedro", age: 112},
    { name: "Fer", age: 33},
]

let AllOldUsers = users.every(({age}) => age >= 18);
console.log(AllOldUsers);

//#endregion
