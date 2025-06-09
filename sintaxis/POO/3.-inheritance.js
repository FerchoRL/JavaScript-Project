//Allows one class to inherit the properties and methods of another class (parent class).

//#region Ejemplo basico de Herencia 🚀
class Animal {
    hablar() {
        console.log("El animal hace un sonido");
    }
}
class Perro extends Animal {
    hablar() {
        console.log("El perro ladra");
    }
}
class Gato extends Animal {
    hablar() {
        console.log("El gato maulla");
    }
}

// Ejemplo de uso
const miPerro = new Perro();
miPerro.hablar(); // El perro ladra
const miGato = new Gato();
miGato.hablar(); // El gato maulla

//#endregion Ejemplo basico de Herencia 🚀

//#region Ejemplo avanzado de Herencia 🚀

class User {
    constructor(name, email) {
        this.name = name;
        this.email = email;
    }

    login() {
        console.log(`${this.name} ha iniciado sesión.`);
    }
}

class Admin extends User {
    constructor(name, email, role) {
        super(name, email); // Llama al constructor de la clase padre
        this.role = role;
    }

    manageUsers() {
        console.log(`${this.name} está gestionando usuarios.`);
    }
}

// Ejemplo de uso
const admin = new Admin("Ferchower", "ferch@ferch.ferch", "Administrador");
admin.login(); // Ferchower ha iniciado sesión.
admin.manageUsers(); // Ferchower está gestionando usuarios.
//#endregion Ejemplo avanzado de Herencia 🚀