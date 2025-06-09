function validarResultado(estrategia, resultadoEsperado, resultadoReal){
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
console.log(validarResultado(ValidacionTolerancia, 10, 9.6)); // true