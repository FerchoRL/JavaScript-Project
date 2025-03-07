//For each method calls a function for each element in an array
// array.forEach(function(currentValue,index,arr), thisValue)

const fruits = ["Manzana","Naranja","Sandia","Uva","Banana","Melon"]
 
//#region Iterar con for each y funcion declarada. Si se puede reutilizar
const iteration1 = function (element, index, arr){
    console.log(`El elemento ${element} esta en el indice ${index} del array ${arr}`)
}

//fruits.forEach(iteration1); //El elemento Manzana esta en el indice 0 del array Manzana,Naranja,Sandia,Uva,Banana,Melon...

//#endregion 

//#region Iterar con for each y arrow function. No se puede reutilizar

fruits.forEach((val,index, arr) => {
    console.log(`El elemento ${val} esta en el indice ${index} del array ${arr}`)
})

//#endregion

//#region Modificar objetos dentro de un  array

const products = [
    { name: "Dinero", price: 3331000},
    { name: "Jugo", price: 10},
    { name: "Laptop", price: 10300},
    { name: "Martillo", price: 800}
]

products.forEach(product => {
    product.price = product.price * 3;
})

console.log(products)

///#endregion


//#region This parameter
//// array.forEach(function(currentValue,index,arr), thisValue)

//Al pasar thisValue como parametro (en este caso multiplicador) se debe pasar como objeto y no como primitivo. Se accede de esta forma
const multiplicador = {number: 5};

let numbers = [1,2,3,4,5,10,20,30,40]

const multiply = function(number){
    console.log(number * this.number);//this es multiplicador.number
}

numbers.forEach(multiply,multiplicador);


//Ejemplo 2: Accediendo a todos los parametros del for each

const nombres = ["David",",Jose","Mari","Fer"]
const profesiones = {
    title: "Profesor"
}
const iteration2 = function (element, index, arr){
    console.log(`El elemento ${element} esta en el indice ${index} del array ${arr} y su profesion es ${this.title}`)
}


nombres.forEach(iteration2,profesiones)