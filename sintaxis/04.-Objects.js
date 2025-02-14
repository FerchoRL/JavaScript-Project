//Notacion literal

let persona = {
    nombre: "Ferchower",
    edad: 32,
    casado: false
}

//Constructor

let persona2 = new Object();
persona2.nombre = "Jose"
persona2.edad = 19;
persona2.casado = false;

console.log(persona2) //{ nombre: 'Jose', edad: 19, casado: false }

//Accediendo por punto

console.log(`Nombre de persona es ${persona.nombre}`)

//Accediendo por corchetes
console.log(`Nombre de persona2 es ${persona2["nombre"]}`)

//Agregando propiedad y accediendo a clave con espacios
persona["Tuvo accidentes"] = true;
console.log(`${persona.nombre} tuvo accidentes? : ${persona["Tuvo accidentes"]}`)

//Eliminar propiedad
delete persona.casado;
console.log(persona) //{ nombre: 'Ferchower', edad: 32, 'Tuvo accidentes': true }

//Metodos en objetos (Agrego metodo)
persona.saludar = function(){
    return "Hola mundo cruel";
}

console.log(persona.saludar())

//Agregando el metodo desde el objeto
let coche = {
    marca: "Toyota",
    encender: function(){return "El coche encendio"}
}

console.log(coche)