//Simular intentos de login con numero limitado de intentos
//Debo abrir el browser para que se ejecute el prompt
let password = "1234";
let intentos = 0;
let entrada;

while (entrada !== password && intentos < 3) {
    entrada = prompt(`Introduce la contraseña (tienes ${3 -intentos} intentos):`);
    if (entrada !== password) {
        intentos++;
        console.log(`Contraseña incorrecta. Intento ${intentos} de 3.`);
    } else {
        console.log("Contraseña correcta. Acceso concedido.");
    }
}

if (intentos === 3 && entrada !== password) {
    console.log("Has agotado tus intentos. Acceso denegado.");
}