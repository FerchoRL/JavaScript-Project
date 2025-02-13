/* Archivo para verificar el scope(Alcance) que tienen los tipos de variable: var, const y let*/

// const nunca cambia su valor

const VARCONST = "YO NUNCA CAMBIO"
var variableVar = "Yo soy una var y puedo cambiar"
let letGlobal = "soy mi let global"


function scopeVariables(){
    // Desde aqui puedo acceder a mi const global
    console.log(`imprimo desde scopeVariables: ${VARCONST}`);
    // VARCONST = "CAMBIANDO VARIABLE CONST"; //TypeError: Assignment to constant variable.

    // Tambien puedo acceder a mi variable VAR
    console.log(`imprimo desde scopeVariables: ${variableVar}`);
    // console.log(variableVar="Actualizando variable var") //Puedo actualizar mi var
    
    // Variable let dentro de la funcion
    let letFunction = "let declarada en una funcion"
    console.log(`imprimo desde scopeVariables: ${letFunction}`)

    // Usando una let global en funcion
    console.log(`imprimo desde scopeVariables: ${letGlobal}`);
    letGlobal = "Actualizo let global en una funcion"
}

if(false){
    var blockScopeFalse = "var no tiene block scope y puede causar conflictos en codigo"
}

scopeVariables();

console.log(`imprimo desde el global: ${blockScopeFalse}`); //Undefined pues si esta declarada pero no inicializada

// console.log(letFunction); // ReferenceError: letFunction is not defined

console.log(`imprimo desde el global: ${letGlobal}`);
