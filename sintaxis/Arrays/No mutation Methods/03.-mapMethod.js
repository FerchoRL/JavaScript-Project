//Nos permite transformar los elementos de un arreglo aplicandoles a cada elemento una funcion

//Recibe un arreglo de longitud N y regresa un nuevo arreglo de la misma longitud

//Sintaxis: array.map(function(currentValue, index, arr){codigo})

//#region 🚀Verify sintaxis

const numeros = [1,2,3,4,5,6]
const mapSintaxis = (val, index, arr) => {
    //Recorre cada elemento del array
    console.log(`mi current value es: ${val}, en el indice ${index} del array: ${arr}`)
    //Return cada valor actualizado
    return val * val;
}

const arrayUpdated = numeros.map(mapSintaxis);
console.log(arrayUpdated)

//#endregion

//#region Map simplificado
const doubled = numeros.map(num => num * 2 )
console.log(doubled);

//#endregion


//#region Ejemplo mas desarrollado

const petList = [
    {name: "patroclo", age: 2, tipo: "Gato"},
    {name: "Petronila", age: 1, tipo: "Perro"},
    {name: "purepecha", age: 3, tipo: "Perro"},
    {name: "langosta", age: 1, tipo: "Oso panda"},
    {name: "grya", age: 1, tipo: "Gato"},
    {name: "mariana", age: 3, tipo: "Gato"},
]

//Regresa el array modificado segun el tipo de mascota

const addProperty = (pet) => {
    if(pet.tipo === "Gato") pet.newProperty = "Propiedad gato"
    else pet.newProperty = "Propiedad rara"
    return pet;
}

let petListUpdated = petList.map(addProperty);
console.log(petListUpdated)


//#endregion

//#region 🚀🚀 Convertir datos de una api en formato util

const users = [
    {id: 1, firstName: "Jhon", lastName: "Doe", age: 30},
    {id: 1, firstName: "Jhon", lastName: "Salchichon", age: 310},
    {id: 1, firstName: "Jhon", lastName: "Papadas", age: 53}
]

//Como voy a regresar un nuevo objeto {} en mi arrow function debo encerrar ese objeto entre parentesis para que no confunda los corchetes {} con la funcion
const formattedUsers = users.map(user => ({
    fullName: `${user.firstName} ${user.lastName}`,
    isAdult: user.age >= 18
}))

console.log(formattedUsers);

//#endregion

//#region 🚀🚀 Extraer objetos del array

const orders = [
    {id: 1, customer: { name: "Alice", email: "papapa@papapa.papa"}, total: 50},
    {id: 2, customer: { name: "Papadpolis", email: "mayate@terere.pasa"}, total: 530},
    {id: 3, customer: { name: "Cantina", email: "fere@fere.pesa"}, total: 5}
];

//Return emails
let emails = orders.map(order => order.customer.email);

console.log(emails)



//#endregion Remover propiedades no necesarias pero con destructuring ({property, prop2, propn...})

const apiResponse = [
    {name: "Product A", price: 100, stock: 30, discount: 4},
    {name: "Product G", price: 200, stock: 20, discount: 9},
    {name: "Product X", price: 2300, stock: 310, discount: 14},
    {name: "Product F", price: 300, stock: 980, discount: 22},
]

//desestructuro y return de las propiedades que necesito
let sanitizedData = apiResponse.map(({name, price}) => ({name, price}));

/**Eso es lo mismo a:
 * apiResponse.map(obj => {
    const name = obj.name;
    const price = obj.price;
    return { name, price };
});
 */

console.log(sanitizedData)
//#region 