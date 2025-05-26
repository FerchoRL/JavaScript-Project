const words = [ "roma", "amor"];

// console.log(words[0].split("").sort().join(""))
// console.log(words[1].split("").sort().join(""))
// console.log(words[2].split("").sort().join(""))


const isAnagram = (lista) => {
    // Si la lista tiene menos de 2 elementos, no puede ser un anagrama
    if(lista.length < 2) return false;
    // convertimos la primera palabra en un array de letras, lo ordenamos y lo convertimos de nuevo a string
    const sortedWord = lista[0].split("").sort().join("");
    // Comparamos la palabra ordenada con las demás palabras de la lista
    // Si alguna no coincide, no son anagramas
    for(let i = 1; i < lista.length; i++){
        if(sortedWord !== lista[i].split("").sort().join("")) return false;
    }
    return true;
}

console.log(isAnagram(words));