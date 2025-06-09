//Keep the internal details of the code hidden from the user and only expose what is necessary.

//#region 1️⃣ Ejemplo basico🚀
const crearContador = () => {
    let cuenta = 0;// Variable privada gracias al scope de la función
    // Esta variable no es accesible desde fuera de la función

    return {
        incrementar: () => cuenta++,
        decrementar: () => cuenta--,
        obtenerValor: () => cuenta
    }

}

const contador = crearContador();
contador.incrementar(); // Incrementa el contador
console.log(contador.obtenerValor()); // Muestra el valor del contador
contador.decrementar(); // Decrementa el contador
console.log(contador.obtenerValor()); // Muestra el valor del contador  

//#endregion 1️⃣ Ejemplo basico🚀

//#region 2️⃣ Ejemplo avanzado  🚀

class User {
    #password; // Propiedad privada

    constructor(name, email, password) {
        this.name = name; // Propiedad pública
        this.email = email; // Propiedad pública
        this.#password = password; // Inicializa la propiedad privada
    }

    // Obtener el Usuario
    getUser() {
        return {
            name: this.name,
            email: this.email
        };
    }

    // validar contraseña
    validatePassword(password) {
        return this.#password === password; // Compara con la propiedad privada
    }

    // Actualizar email
    updateEmail(newEmail) {
        this.email = newEmail; // Actualiza la propiedad pública
    }
}

const user = new User("Ferchower", "ferch@ferch.ferch", "1234");
console.log(user.getUser()); // Muestra el usuario sin la contraseña
console.log(user.name); // Muestra el nombre
console.log(user.email); // Muestra el email
console.log(user.password); // undefined, ya que es una propiedad privada

//#endregion 2️⃣ Ejemplo avanzado 🚀