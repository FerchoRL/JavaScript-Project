// Se crea un arreglo con números, incluyendo valores repetidos
const numList = [1,1,2,2,2,3,3,4,2]

let k = [];

// Se define la función "removeDuplicates" como arrow function, que recibe:
// - acc: acumulador del reduce (servirá para ir guardando los valores ya vistos)
// - next: elemento actual que está procesando el reduce
var removeDuplicates = ((acc,next) => {
    
    // Si en acc todavía no existe la clave con el valor "next"
    if(!acc[next]){

        // Se guarda en acc el valor actual, usando el propio número como índice
        acc[next] = next;
        k.push(next);
    }
    return acc;
})

result = numList.reduce(removeDuplicates,[])
console.log(k)