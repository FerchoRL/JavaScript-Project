//#region Ejemplo de Abstracción 🚀

class Cafetera {
    encender() {
        this.hervirAgua();
        this.prepararCafe();
    } 
    hervirAgua() {
        console.log("Hirviendo agua...");
    }
    prepararCafe() {
        console.log("Preparando café...");
    }
}

const miCafetera = new Cafetera();
miCafetera.hervirAgua(); // Método privado, no debería ser llamado directamente
miCafetera.encender(); // Oculta la complejidad para el usuario promedio de la clase.
//#endregion Ejemplo de Abstracción 🚀

