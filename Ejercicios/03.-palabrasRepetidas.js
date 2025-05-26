const lista = "Bebe baba bibi bobo bobo Bebe baba Bebe bhaui";

const dictionary = ((acc, word) => {
    // Convertimos la palabra a minúsculas y quitamos los espacios
    word = word.toLowerCase().trim();
    //Buscamos si la palabra ya existe en el diccionario
    const currentWord = acc[word];
    // console.log(`Palabra: ${word}, Actual: ${currentWord}`);
    //Si no existe, la creamos
    acc[word] = currentWord ? currentWord + 1 : 1;
    //Regresamos el diccionario actualizado
    return acc;
})
//Llamamos el reduce para crear el diccionario
// lista.split(" ") es el array de palabras
const wordCount = lista.split(" ").reduce(dictionary, {});
console.log(wordCount);

const letters = lista.split("").reduce(dictionary, {});
console.log(letters);