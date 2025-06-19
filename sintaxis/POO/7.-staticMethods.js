//Ejemplo basico de una clase con metodos estaticos
class MathUtils {
    // Método estático para sumar dos números
    static sum(a, b) {
        return a + b;
    }

    // Método estático para restar dos números
    static subtract(a, b) {
        return a - b;
    }

    // Método estático para multiplicar dos números
    static multiply(a, b) {
        return a * b;
    }

    // Método estático para dividir dos números
    static divide(a, b) {
        if (b === 0) {
            throw new Error("No se puede dividir por cero");
        }
        return a / b;
    }
}
// Ejemplo de uso de los métodos estáticos
console.log(MathUtils.sum(5, 3));        // 8
console.log(MathUtils.subtract(5, 3));   // 2
console.log(MathUtils.multiply(5, 3));   // 15
console.log(MathUtils.divide(5, 3));     // 1.666666666