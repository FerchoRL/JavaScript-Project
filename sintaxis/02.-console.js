// ✅ console.log() → Mensajes estándar de depuración.
let nombre = "Fercho"
console.log(`Hola ${nombre}, esto es un log`);

// ⚠️ console.warn() → Advertencias sobre posibles problemas.
console.warn("Esto es una advertencia");

// ❌ console.error() → Indicar errores críticos.
console.error("Esto es un error!! ayuda!!");

// ℹ️ console.info() → Información útil.
console.info("Esto es informacion util bro!! En Firefox aparece icono de info");

// 🐞 console.debug() → Depuración avanzada.
console.debug(`Debug info: variable nombre tiene el valor ${nombre}`);
// 📌 En algunos navegadores, puede que los mensajes solo se muestren si la consola está en modo "Verbose" (detallado).

// 📊 console.table() → Visualización de datos en tabla.

let usuarios = [
    { id: 1, nombre: "Juan", edad: 30 },
    { id: 2, nombre: "Ana", edad: 25 },
    { id: 3, nombre: "Carlos", edad: 35 }
  ];
  console.table(usuarios);

// 📌 console.group() → Organización de logs en la consola.

console.group("Detalles del usuario");
console.log("Nombre: Juan");
console.log("Edad: 30");
console.log("País: México");
console.log("Aqui acabo la agrupacion");
console.groupEnd();

// ⏱ console.time() → Medir el tiempo de ejecución.
console.time("Tiempo de ejecucion")
for (let i = 0; i<1000; i++){ console.log(i)}
console.timeEnd("Tiempo de ejecucion")