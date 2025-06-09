//Ejemplo basico de Promesas

const myPromise = new Promise((resolve, reject) => {
    const success = false; // Cambia a false para simular un error

    if (success) {
        resolve("¡Operación exitosa!");
    } else {
        reject("Ocurrió un error.");
    }
});

// Manejo de la promesa
myPromise
    .then((message) => {
        console.log(message); // Se ejecuta si la promesa se resuelve
    })
    .catch((error) => {
        console.error(error); // Se ejecuta si la promesa es rechazada
    })
    .finally(() => {
        console.log("Operación finalizada."); // Se ejecuta siempre, independientemente del resultado
    });

const promesa = new Promise(() => { }); // Crea una promesa pendiente
console.log(promesa); // Muestra una promesa resuelta


// Ejemplo de promesa con setTimeout
function delayedOperation(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}
// Uso de la promesa
async function runDelayedOperation() {
    console.log("Esperando 2 segundos...");
    await delayedOperation(2000); // Espera 2 segundos
    console.log("Operación completada después de 2 segundos.");
}
runDelayedOperation();