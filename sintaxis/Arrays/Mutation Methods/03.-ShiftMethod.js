//Elimina el primer elemento de un array y lo devuelve. Si el array esta vacio devuelve empty

//Sintaxis array.shift()

//#region 🚀 Elimina el primer elemento del array

let frutas = ["Manzana", "Naranja", "Sandia"];

let eliminado = frutas.shift();

console.log(frutas);//["Naranja", "Sandia"]
console.log(eliminado);

//#endregion

//#region 🚀 Shift con objetos en un array

let tareas = [
    { tarea: "Comprar leche", prioridad: "Alta" },
    { tarea: "Hacer ejercicio", prioridad: "Media" },
    { tarea: "Leer un libro", prioridad: "Baja" }
];

let primeraTarea = tareas.shift()

console.log(primeraTarea);
console.log(tareas);

//#endregion