class Usuario {
    #name;

    constructor(name) {
        this.#name = name;
    }

    get userName() {
        return this.#name.toUpperCase();
    }

    set userName(newName) {
        if (newName.length >= 1) {
            this.#name = newName;
        } else {
            console.log("El nombre debe tener al menos 1 caracteres.");
        }
    }
}

// Ejemplo de uso
const usuario = new Usuario("Ferchower");
console.log(usuario.userName); // Ferchower
usuario.userName = "Alt";
console.log(usuario.userName); // ALT


//ejemplo funcion normal
function Usuario2(name) {
    this.name = name;

    this.getUserName = function() {
        return this.name.toUpperCase();
    };

    this.setUserName = function(newName) {
        if (newName.length >= 1) {
            this.name = newName;
        } else {
            console.log("El nombre debe tener al menos 1 caracteres.");
        }
    };
}
// Ejemplo de uso
const usuario2 = new Usuario2("Ferchower");
console.log(usuario2.getUserName()); // Ferchower