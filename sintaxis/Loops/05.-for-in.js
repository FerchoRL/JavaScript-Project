//Validar campos vacios en un formulario

const formFields = {
  nombre: "Carlos",
  email: "",
  telefono: "1234567890",
  direccion: "",
  ciudad: "Mérida"
};

let emptyFields = []
for (const field in formFields) {
    console.log(`campo: ${field}`);
    if (formFields[field] === "") {
        emptyFields.push(field);
    }
}
console.log("Campos vacíos:", emptyFields.length > 0 ? emptyFields : "No hay campos vacíos");