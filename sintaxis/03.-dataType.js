
// String 🚀
let mensaje = "Hola mundo cruel";
console.log(`Bienvenido ${mensaje}`);

//Number 🚀
let entero = 23;
let decimal = 34.5;
let negativo = -7;
let infinito = Infinity; //Infinity
let noEsNumero = "hola" / 3; //NaN (Not a number)

console.log(infinito);

//Boolean 🚀
let esMayor = true;
let esMenor = false;
console.log(10 > 5); // true
console.log(3 < 1); // false

//Ejemplos en los que boolean devuelve falso
console.log(Boolean(0)); //false
Boolean(null); //false
Boolean(NaN) //false
Boolean(undefined) //false
Boolean(false) //false
console.log(Boolean()); //false
Boolean("");

//Undefined. Valor automático de variables no inicializadas. 🚀
let sinValor;
console.log(sinValor) //undefined

//Nulo Representa "ausencia de valor" o "vacío intencional"🚀
let vacio = null;
console.log(vacio); //null

//Symbol. Introducido en ES6, se usa para identificadores únicos 🚀
let id = Symbol("MyOwnID");
console.log(id); //Symbol(MyOwnID)

//BigInt. Se usa para números mayores a `2^53 - 1` (límite de `Number`)🚀
//Sin la n del final se veria asi: 1.2345678901234568e+29
let numeroGrande = 123456789012345678901234567890n
console.log(numeroGrande);