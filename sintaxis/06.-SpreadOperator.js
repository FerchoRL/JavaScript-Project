//Copia de arrays o asignacion de referencia a memoria 🚀🚀
const original = [1,2,3,4]
const original2 = [1,2,3,4]

// console.log(original === original2) //Falso. A pesar que tienen mismos valores apuntan a diferente parte de la memoria

//De esta forma no copio el array, si no que asigno la misma referencia en memoria
//Esto es, si modifico uno (copia.push()) afecto ambos
let copia = original;
copia.push(9)
// console.log(original) //[ 1, 2, 3, 4, 9 ]
// console.log(copia) //[ 1, 2, 3, 4, 9 ]
//Compare original against copia
// console.log(original===copia); //True. Ambos apuntan a la misma parte de la memoria


//Copy arrays (or Objects) with spread Operator 🚀🚀
let otraCopia = [...original];
// otraCopia.push("a");
// console.log(original); //[ 1, 2, 3, 4, 9 ]
// console.log(copia); //[ 1, 2, 3, 4, 9 ]
// console.log(otraCopia); //[ 1, 2, 3, 4, 9, 'a' ]

console.log(original === otraCopia) //False diferentes en memoria



//Combined arrays (Or objects) with spread operator 🚀🚀
const array1 = [1,2,3];
const array2 = [4,5,6];

const combinedArrays = [...array1,...array2]
// console.log(combinedArrays);  // [1, 2, 3, 4, 5, 6]

const obj1 = {name: "Fer", state: "Verachas"}
const obj2 = {state: "Yucairas", name: "Ferchoson"}

// 📌 Regla clave: Si hay claves repetidas, el último objeto sobrescribe los valores.
const combinedObjects = {...obj1, ...obj2}; 
// console.log(combinedObjects)//{ name: 'Ferchoson', state: 'Yucairas' }

//Spread operator en argumentos de funciones 🚀🚀
//expande los elementos de un array como argumentos individuales.

const numeros = [1,2,3]

function sumar(a,b,c){
    return a+b+c;
}

result = sumar(...numeros); //...numeros descompone el array y lo convierte en sumar(1, 2, 3).
console.log(result); //6

//Spread operator en Rest Parameters 🚀🚀
const listNames = ["Ana", "Carlos", "Luis", "María", "Pedro", "Sofía", "Juan", "Elena", "Miguel", "Laura"];


//...names captura todos los nombres en un array dentro de la función.
function sayHello(...names){
    console.log(names);
    for(let i = 0;i<names.length;i++){
        console.log(`Hola ${names[i]}`)
    }
}

// Usamos el spread operator para pasar los elementos de listNames como argumentos individuales

// 👍 sayHello(...listNames);
// ❌ sayHello(listNames);

// sayHello(...listNames);


//Remove porperties with spread operator 🚀🚀

const usuario = {name: "Juan", edad: 30, password: "12345"}
//Usamos desestructuracion para extraer las propiedades password del objeto usuario
//El spread operator ...datosPublicos toma el resto de propiedades de usuario y las coloca en el nuevo objeto: datosPublicos
const {password, ... datosPublicos } = usuario;
console.log(datosPublicos);


//Crear estructuras anidadas dinamicamente 🚀🚀
const base = { activo: true, role: "user"};

// Creamos una lista de usuarios usando el spread operator
const usuarios = [
    {...base, name: "Fercho"},
    {...base, name: "De armas"},
    //Puedo sobreescribir la propiedad base role
    {...base, name: "Papadopolus", role: "Admin"},
]

console.log(usuarios);
