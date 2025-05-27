//Simular menu hasta que el usuario elija salir
let opcion;

do {
    opcion = prompt("Elige una opción:\n1. Opción 1\n2. Opción 2\n3. Salir");
    
    switch (opcion) {
        case "1":
            console.log("Has elegido la Opción 1.");
            break;
        case "2":
            console.log("Has elegido la Opción 2.");
            break;
        case "3":
            console.log("Saliendo del menú...");
            break;
        default:
            console.log("Opción no válida. Por favor, elige una opción del 1 al 3.");
    }
}while (opcion !== "3");