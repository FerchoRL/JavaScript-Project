const numero = 1;

function fibonacci(n) {
    // Creamos un array para guardar los números de la serie
    const serie = [0, 1];
    // Creamos un bucle que va desde 2 hasta n
    for (let i = 2; i < n; i++) {
        // Agregamos el siguiente número a la serie
        serie.push(serie[i - 1] + serie[i - 2]);
    }
    return serie;
}

// Llamamos a la función y guardamos el resultado
const resultado = fibonacci(numero);
// Imprimimos el resultado
console.log(`Los primeros ${numero} números de la serie de Fibonacci son: ${resultado}`);

