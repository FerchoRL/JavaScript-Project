//Ejecuta una funcion acumuladora sobre cada elemento de un array, resultando en un unico valor final

//No cambia el array original. No ejecuta la funcion en un array vacio

//Sintaxis: array.reduce((acumulador, elementoActual, indice, array) => {}, valorInicial)

//#region 🚀 verify sintaxis

const intArray = [1,2,3,4,5,6]

let suma = intArray.reduce((acc,currentValue,index, arr) => {
    console.log(`el acc es ${acc}. currentValue en ${currentValue}, en el index ${index} del arr ${arr}. `)
    return acc + currentValue;
}) //Si no pongo valor inicial deduce que empieza con el primer elemento del array

console.log(suma);

//#endregion

//#region  🚀Multiplicar todos los numeros
const producto = intArray.reduce((acc,val) => acc * val);
console.log(producto)

//#endregion

//#region 🚀 Encontrar la palabra mas larga en un array

const words = ["fdfsdfaasas","miwndibhvfgjmxz","jwikwjw","njwdbhwyvdtwdcvtwd","wowmdwmniwndbbc","mdinhvftgdvgdd","najdsbnjas","kmklwwqawa","8y2u2b","DWNUJWBNDJB","","",""]

//We use ternary operator here val1 === val2 ? if yes : if not
let largestWord = words.reduce((acc,val) => val.length > acc.length ? val : acc);
console.log(largestWord);

//#endregion

//#region 🚀 contar cuantas palabras tienen longitud 2,3,4,5,N...

let conteo = words.reduce((acc,val) => {
    let size = (val.length).toString();
    acc[size] = (acc[size] || 0) + 1
    return acc
}, {})

console.log(conteo)

//#endregion

//#region 🚀 Agrupar productor por categoria

const productos = [
    { nombre: "Laptop", categoria: "Electrónica", precio: 44.55 },
    { nombre: "Celular", categoria: "Electrónica", precio: 44.55 },
    { nombre: "Mesa", categoria: "Muebles", precio: 44.55 },
    { nombre: "Silla", categoria: "Muebles", precio: 44.55 },
    { nombre: "Audífonos", categoria: "Electrónica", precio: 44.55 },
];


let productosAgrupados = productos.reduce((acc,producto) => {
    //const {nombre,categoria} = producto;
    const {categoria,... publicData} = producto;//Desestruturacion
    if (!acc[categoria]) acc[categoria] = [];

    //acc[categoria].push(producto)//Agregar todo el producto a la categoria
    //acc[categoria].push(nombre)//Agregar solo una propiedad a la categoria`
    acc[categoria].push(publicData)//Agregarel producto sin la categoria
    return acc

},[])

console.log(productosAgrupados)

//#endregion