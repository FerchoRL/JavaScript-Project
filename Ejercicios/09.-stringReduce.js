function strreduce (str = []){
    //Funcion que determina la letra de reemplazo entre dos letras distintas 
    //Tomando como base las letras 'a','b','c'
    function reemplazar (letterA, letterB){
        //Si las letras son iguales no se pueden reducir
        if (letterA === letterB) return null;
        const letters = ['a','b','c'];
        //Buscamos la letra que no sea igual a letterA y letterB
        return letters.find(letter => letter!==letterA && letter!==letterB);
    }

    //Bandera para saber si hubo cambios
    let cambios = true;

    //Bucle que se repite mientras no haya cambios
    while (cambios){
        cambios = false; // Al inicio asumimos que no habra cambios
        // Recorremos la cadena de izq a derecha
        for(let i = 0;i<str.length - 1;i++){
            //Intentamos reemplazar el par actual
            let nueva = reemplazar(str[i], str[i+1]);
            if(nueva){
                // Construimos la nueva cadena con el reemplazo aplicado
                /**
                 * es la forma de construir una nueva cadena con:
                 * Lo que hay antes del par: str.slice(0,i)
                 * La letra nueva: nueva
                 * Lo que hay después del par: str.slice(i+2). Cuando el indice este fuera del rango de la cadena devuelve string vacio
                 */
                str = str.slice(0,i) + nueva + str.slice(i+2);
                cambios = true;//Hubo cambios
                break;  // Salimos del for para volver a empezar desde el inicio
            } 
        }
    }

    console.log(str)
    return str.length;
}


console.log(strreduce("acba"));