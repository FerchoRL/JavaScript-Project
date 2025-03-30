//Agrega uno o mas elementos al final de un array y devuelve la nueva longitud

//Sintaxis array.push(elemento1,elemento2)

//#region 🚀 Agregar un elemento al array

let frutas = ["Manzana", "Naranja"];

let nuevaLongitud = frutas.push("Sandia")

console.log(frutas);//[ 'Manzana', 'Naranja', 'Sandia' ]
console.log(nuevaLongitud);

//#endregion

//#region 🚀 Agregar multiples elementos

let numeros = [1,2,3,4]
numeros.push(5,6,7,8)
console.log(numeros);

//#endregion

//#region 🚀 Usando push con objetos

let carrito = [
    { producto: "Laptop", precio: 1000 },
    { producto: "Mouse", precio: 50 }
];

carrito.push({ producto: "Teclado", precio: 80 });

console.log(carrito);

//#endregion