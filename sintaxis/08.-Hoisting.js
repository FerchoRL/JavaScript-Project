//Hoisting es un comportamiento en JS el cual mueve automaticamente variables y funciones al inicio de su contexto de ejecucion

// #region 1️⃣ Functions

// Se eleva la declaracion ✅
// Se inicia con un valor ✅

saludar(); //Hola mundo cruel

function saludar(){
    console.log("Hola mundo cruel")
}

// #endregion 1️⃣ Functions

// #region 2️⃣ Var

// Se eleva la declaracion ✅
// Se inicia con un undefined ✅

console.log(varHoisting); //undefined
var varHoisting = "var hoisting";
console.log(varHoisting); //var hoisting

// #endregion 2️⃣ Var

// #region 3️⃣ let y const

// Se eleva la declaracion ✅
// No se inicializan ❌
//❌ ReferenceError Temporal Dead Zone(TDZ)

// console.log(letHoisting); //ReferenceError: Cannot access 'letHoisting' before initialization
let letHoisting = "Reference error?"

// #endregion 3️⃣ let y const

// #region 4️⃣ Funciones expresadas y arrow functions

// Se eleva solo la variable ✅
// No se inicializan ❌
// Reference error ❌

myVarFunction2();//ReferenceError: Cannot access 'myVarFunction' before initialization
let myVarFunction = function(){
    console.log("Reference error?");
}

const myVarFunction2 = () => console.log("Reference error?")

// #endregion 4️⃣ Funciones expresadas y arrow functions