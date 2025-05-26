const frase = "Hola Mundo cruel esto es un fastidio";

const invertirFrase = (frase) => {
    // Invertimos el array de palabras
    const fraseInvertida = frase.reverse().join("");
    return fraseInvertida;
}
// Convertimos la frase en un array de palabras
// y la pasamos a la función
// La función regresa un array invertido
let nuevaFrase = invertirFrase(frase.split(" "));
console.log(nuevaFrase);