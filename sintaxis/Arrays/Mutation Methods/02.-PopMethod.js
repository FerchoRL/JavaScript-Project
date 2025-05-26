//Elimina el ultimo elemento de un array y lo devuelve. Si el array esta vacio devuelve empty

//Sintaxis array.pop()

//#region 🚀 Elimina el ultimo elemento del array

let frutas = ["Manzana", "Naranja", "Sandia"];

let eliminado = frutas.pop()

console.log(frutas);//[ 'Manzana', 'Naranja' ]
console.log(eliminado);

//#endregion

//#region 🚀 Pop con objetos en un array

let tareas = [
    { tarea: "Comprar leche", prioridad: "Alta" },
    { tarea: "Hacer ejercicio", prioridad: "Media" },
    { tarea: "Leer un libro", prioridad: "Baja" }
];

let ultimaTarea = tareas.pop()

console.log(ultimaTarea);
console.log(tareas);

//#endregion