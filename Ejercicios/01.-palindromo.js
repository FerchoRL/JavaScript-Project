const wordList = [ "ana", "payaso", "oso", "alcachofa", "reconocer", "tren", "metro", "salas", "arenera"];

let palindromos = [];
let noPalindromos = [];

wordList.forEach((word) => {
    // split = convierte la cadena en un array : ["a","n","a"]
    // reverse = invierte el array : ["a","n","a"]
    // join = convierte el array en una cadena : "ana"
    let reversedWord = word.split("").reverse().join("");
    if (word === reversedWord) palindromos.push(word);
    else noPalindromos.push(word);
})

console.log("Palindromos: ", palindromos);
console.log("No palindromos: ", noPalindromos);

// Creando la funcion aparte
const isPalindrome = (word) => {
    let reversedWord = word.split("").reverse().join("");
    return word === reversedWord;
}
const palindromos2 = wordList.filter(isPalindrome);
const noPalindromos2 = wordList.filter((word) => !isPalindrome(word));
console.log("Palindromos: ", palindromos2);
console.log("No palindromos: ", noPalindromos2);