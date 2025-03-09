//Se usa para filtrar elementos de un array con base en una condicion.

//Devuelve un nuevo array con los elementos que cumplieron la condicion

//Sintaxis array.filter((element,index,arr) => {})


//#region verify sintaxis (verificando si numero es par o impar)
const numeros = [3,4,7,22,12,999,333];

let numeroPar = numeros.filter((element,index,arr) => {
    console.log(`el elemento ${element} esta en el index ${index} del array ${arr}`)
    return element % 2 === 0;
})

console.log(numeroPar);

//filter simplificado

numeroPar = numeros.filter(num => num%2===0)
console.log(numeroPar);

//#endregion


//#region Palabras con mas de 9 letras

const palabras = ["Hola", "Putas", "Maricones", "Zorreando", "Mamadas", "Yatubers", "Puteadas", "jajajajaja"]

let filteredList = palabras.filter( word => word.length > 9);

console.log(filteredList)

//#endregion

//#region  Filtrar productos con stock y precios menor a 100

const productos = [
    { nombre: "Laptop", precio: 1200, stock: 5 },
    { nombre: "Mouse", precio: 25, stock: 20 },
    { nombre: "Teclado", precio: 75, stock: 10 },
    { nombre: "Monitor", precio: 200, stock: 0 },
    { nombre: "Cable HDMI", precio: 15, stock: 50 }
];

const productosDisponibles = productos.filter( ({precio,stock}) => stock > 0 && precio <100)

console.log(productosDisponibles)

//#endregion