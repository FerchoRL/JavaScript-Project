//Create new arrays 🚀🚀
//Empty array
const arrVacio = [];
console.log(arrVacio) // []

//Array initialized
const numeros = [1,2,3,50]
console.log(numeros) //[ 1, 2, 3, 50 ]

//With new Array()
const nombres = new Array(5)
console.log(nombres); //[ <5 empty items> ]

//Inicializar new Array. Hay varias opciones, abarcare aqui dos
let lista = new Array(1,3,4,"cosas")
console.log(lista) //[ 1, 3, 4, 'cosas' ]
//.fill(valor) asigna el mismo valor a todas las posiciones del array
lista = new Array(6).fill("wow");
console.log(lista); //[ 'wow', 'wow', 'wow', 'wow', 'wow', 'wow' ]

//Get array elements 🚀🚀
const frutas = ["🍎", "🍌", "🍇", "🍉"];
console.log(frutas[3]); //🍉

//Si accedo a un indice inexistente marca undefined
console.log(frutas[111]); //undefined

//Update array elements 🚀🚀

console.log(frutas) //[ '🍎', '🍌', '🍇', '🍉' ]
frutas[2] = "🍋‍🟩";
console.log(frutas) //[ '🍎', '🍌', '🍋‍🟩', '🍉' ]

//Add new elements in array 🚀🚀
//array.push(value) add new element at the end of array
frutas.push("🍑")
console.log(frutas); //[ '🍎', '🍌', '🍋‍🟩', '🍉', '🍑' ]

//array.unshift(value) add new element at the beginning of array
frutas.unshift("🍏");
console.log(frutas); //[ '🍏', '🍎', '🍌', '🍋‍🟩', '🍉', '🍑' ]


//Remove elements in array 🚀🚀
//array.pop() remove last element in array
const ultimo = frutas.pop();
console.log(ultimo); //'🍑'
console.log(frutas); //[ '🍏', '🍎', '🍌', '🍋‍🟩', '🍉' ]

//array.shift() remove first element in array
const primero = frutas.shift();
console.log(primero); //'🍏'
console.log(frutas); //[ '🍎', '🍌', '🍋‍🟩', '🍉' ]
