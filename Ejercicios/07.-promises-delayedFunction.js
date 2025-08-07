//Ejemplo de promesa con resolve y reject. Valida el tiempo de espera e imprime un mensaje
function delayedFunction(ms){
    return new Promise ((resolve,reject) => {
        if (ms > 6000) {
            reject("❌ Tiempo muy muy largo")
        }
        setTimeout(() => { //setTimeOut espera una function, milisegundos
            resolve(`✅ Tiempo correcto. Esperaste ${ms} milisegundos`)
        }, ms)
    })
}


delayedFunction(2000)
    .then((msg) => console.log(msg))
    .catch((msg) => console.error(msg))
    .finally(() => console.info("Siempre me ejecutare"));



//Ejemplo de promesa solo con resolve
//Tener cuidado con callback hell

let esperar = ms => {
    return new Promise ((resolve) => {
        setTimeout(() => {
            resolve("Esperando algo de tiempo")
        }, ms)
    })
}

esperar(3000).then((msg) => console.info(msg))

//Mismo ejercicio con async/await

async function esperarConAsync(ms) {
    return await new Promise ((resolve, reject) => {
        if (ms > 4000){
            reject("❌ mucho tiempo amigo")
        }
        setTimeout (() => {
            resolve("✅ Muy buen tiempo bro")
        },ms)
    })
}

//Llamando a la funcion async
let ejecutar = async function(ms){
    try {
        const msg = await esperarConAsync(ms);
        console.log(msg);
    } catch (error) {
        console.error(`Error atrapado: ${error}`)
    }
    
}

ejecutar(5000)

//Funcion auto ejecutable
(async () => {
    try{
    const mensaje = await esperarConAsync(5000);
    console.log(mensaje)
    } catch (err){
        console.error(err) 
    } finally {
        console.info("Proceso finalizado (exito o error)")
    }
})();