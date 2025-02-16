// 🚀🚀 Access object properties
const objeto = { nombre: "El pipita", edad: "Mil años", "E-mail": "melachupas555", "Fax-ID": "gbd625gsbnsu" }

//Acceder con metodo tradicional (.)
console.log(objeto.nombre)

//Acceder con bracket notation (ACCEDO A LA KEY)
console.log(objeto["edad"])

//Usando una variable con clave dinamica
const key = "Fax-ID"
console.log(objeto[key]);

//Usar bracket notations en objetos cuando la propiedad tiene caracteres especiales o espacios

// 🚀🚀 Access array elements
//ACCEDO AL INDICE
const numeros = [1,40,500,6543];
console.log(numeros[3]);

// 🚀🚀 Add properties dynamically  to an Object

const persona = { nombre: "Ferchower", edad: "Re joven"}
persona["correo-email"] = "genshin@genshin.com";
persona["tiene-pareja"] = true;

// console.log(persona)


// 🚀🚀 For...in iterate an object

for (let key in persona){
    // console.log(`la key ${key} tiene el valor ${persona[key]}`);
}

// 🚀🚀 ForEach iterate an array and access to the object properties inside an array

//Create an array of objects
let miArray = [];
miArray.push(objeto);
miArray.push(persona);

// console.log(miArray) //Imprime ambos objetos con sus respectivas key-values

miArray.forEach(user => {
    console.log("Nuevo usuario") //Se imprime por aca objeto en el array
    // console.log(user); //Imprime ambos objetos
    // console.log(user["nombre"]); //Imprime el valor de nombre de cada obj
    console.log(user["tiene-pareja"]); //Si el objeto no tiene esa propiedad, imprime undefined. Si la tiene la imprime

})

