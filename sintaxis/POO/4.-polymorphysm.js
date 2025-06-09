//Using a common interface to represent different types of objects
//Overriding methods in subclasses

class Animal {
    speak() {
        console.log("El animal hace un sonido");
    }
}
class Perro extends Animal {
    speak() {
        console.log("El perro ladra");
    }
}
class Gato extends Animal {
    speak() {
        console.log("El gato maulla");
    }
}

const animales = [new Perro(), new Gato()];
animales.forEach(animal => {
    animal.speak(); // Llama al método speak de cada animal
});

//#region Ejemplo avanzado de Polimorfismo 🚀

// Credit card: te otorga 5% de descuento
// PayPal: te otorga 10% de descuento
// Crypto: te otorga 15% de descuento

// Clase base
class PaymentMethod {
    processPayment(amount) {
        throw new Error("Método no implementado");
    }
}

// Clase derivada para tarjeta de crédito
class CreditCardPayment extends PaymentMethod {
    processPayment(amount) {
        // Aquí podrías aplicar un descuento del 5%
        const discount = amount * 0.05;
        amount -= discount;

        console.log(`Procesando pago de ${amount} con tarjeta de crédito. Descuento aplicado: ${discount}`);
        return amount;
    }
}

// Clase derivada para PayPal
class PayPalPayment extends PaymentMethod {
    processPayment(amount) {
        // Aquí podrías aplicar un descuento del 10%
        const discount = amount * 0.10;
        amount -= discount;
        console.log(`Procesando pago de ${amount} con PayPal.`);
        console.log(`Descuento aplicado: ${discount}`);
        return amount;
    }
}

// Clase derivada para criptomonedas
class CryptoPayment extends PaymentMethod {
    processPayment(amount) {
        // Aquí podrías aplicar un descuento del 15%
        const discount = amount * 0.15;
        amount -= discount;
        console.log(`Procesando pago de ${amount} con criptomonedas.`);
        console.log(`Descuento aplicado: ${discount}`);
        return amount;
    }
}

// Clase base vacía para manejar el caso de pago no definido
class InvalidPayment extends PaymentMethod {}

// Clase de alto nivel que utiliza el polimorfismo
class PaymentProcessor {
    constructor(paymentMethod) {
        this.paymentMethod = paymentMethod;
    }

    makePayment(amount) {
        this.paymentMethod.processPayment(amount);
    }
}

// Ejemplo de uso
const creditCardPayment = new PaymentProcessor(new CreditCardPayment());
creditCardPayment.makePayment(100); // Procesando pago de 100 con tarjeta de crédito.

// Ejemplo con metodo de pago invalido
const invalidPayment = new PaymentProcessor(new InvalidPayment());

invalidPayment.makePayment(100); // Método no implementado




