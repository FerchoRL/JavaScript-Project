// Ejemplo de uso de clases anónimas para validar resultados
function validarResultado(estrategia, resultadoEsperado, resultadoReal){
    // estrategia es una clase anonima que implementa un método validar
    // Esto se llama "Inyección de Dependencias" o "Dependency Injection"
    const validador = new estrategia();
    return validador.validar(resultadoEsperado, resultadoReal);
}

// Estrategia 1: Comparacion exacta
const ValidacinExacta = class {
    validar(esperado, real){
        return esperado === real;
    }
}

// Estrategia 2: Expresion regular
const ValidacionRegex = class {
    validar(esperado, real){
        const regex = new RegExp(esperado);
        return regex.test(real);
    }
}

// Estrategia 3: Tolerancia numerica 
const ValidacionTolerancia = class {
    validar(esperado, real) {
        const tolerancia = 0.5;
        return Math.abs(esperado - real) <= tolerancia;
    }
}

// Pruebas
// Uso de Inyección de Dependencias para validar resultados
// Eso es enviar una clase anónima como parámetro
console.log(validarResultado(ValidacionTolerancia, 10, 9.6)); // true
console.log(validarResultado(ValidacinExacta, "Hola", "Hola")); // true
console.log(validarResultado(ValidacionRegex, "^H.*o$", "Hola")); // false