//#region1️⃣ Funciones Declaradas (Function Declaration) 🚀🚀
//Use "function" as keyword and assign a name. Hoisting

saludar();

function saludar(){
    console.log("Say Hi my brother");
}

// with parameters
sayHi();

function sayHi(persona="anonimo"){
    console.log(`Hola ${persona} bienvenida al mundo cruel`)
}
//#endregion 1️⃣ Funciones Declaradas (Function Declaration)

// #region 2️⃣ Funciones Anónimas 🚀🚀
//No usan nombre, no tienen hoisting, se pueden guardar en variables o no
//función anonima solo se usará en un contexto específico.

let suma = function(a,b){
    return a + b;
}

let resultado = suma(3,4);
console.log(resultado);

//Ejemplo en callback usando for each

const numeros = [1,2,3,4];

numeros.forEach(function(numero){
    console.log(numero*2)
})

//Comparacion funcion nombrada vs anonima 🔥🔥🔥

// 📌 Ejemplo Función nombrada
//Implemento funcion saludo que se pasa como referencia al setTimeOut
function saludo() {
    console.log("Hola carmelo");
}
setTimeout(saludo, 2000);

// 📌 Ejemplo Función anónima
//La funcion no se declara en el ambito global, por que solo se necesita en el contexto del timeOut
setTimeout(function(){
    console.log("Wasap bro!!")
},2000);
//#endregion 2️⃣ Funciones Anónimas

//#region 3️⃣ Funciones Expresadas (Function Expression) 🚀🚀

//Se asignan a una variable, no hay hoisting, puede ser anonimas o nombradas
//Se usan mucho en módulos y en librerías

let funcionExpresada = function nuevaFuncion(){
    console.log("Soy una funcion expresada y nombrada");
}

funcionExpresada();

funcionExpresada = function(){
    console.log("Soy una funcion expresada y anonima");
}

funcionExpresada();
//#endregion 3️⃣ Funciones Expresadas (Function Expression)


//#region 4️⃣ Funciones Flecha (Arrow Functions) 🚀🚀
//Heredan su this del contexto, mas cortas y legibles

//Desglozare la funcion de flecha para entenderla mejor
//1.- funcion declarada (no se guarda en una variable)
function funcionDeclarada(){
    //code
}

//2.- funcion expresada (y anonima). Asigno a la variable y elimino el nombre
let nuevaFuncion = function(){
    //code
}

//3.- Remuevo el keyword function y es anonima. En este ejemplo no llevo parametros
let myArrowFunction = () => {
    console.log("Hola mundo cruel desde arrow function");
}

myArrowFunction();


//#endregion 4️⃣ Funciones Flecha (Arrow Functions)


//#region 5️⃣ Funciones Autoejecutables (IIFE - Immediately Invoked Function Expression) 🚀🚀

//Se definen y ejecutan automáticamente
//Encapsulan código para evitar conflictos en variables globales

(function(){
    console.log("Soy  una funcion autoejecutable");
})();


//#endregion 5️⃣ Funciones Autoejecutables