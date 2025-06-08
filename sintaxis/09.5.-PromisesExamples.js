// Ejemplo de promesa con fetch que falla

function fetchData() {
    fetch("https://jsonplaceholder.typicode.com/posts/1")
        .then((res) => res.json())
        .then((data) => {
            console.log("Datos recibidos:", data);
        })
}

const data = fetchData();
console.log("Datos de la promesa:", data); // Esto mostrará una promesa pendiente


async function fetchData() {
    const res = await fetch("https://jsonplaceholder.typicode.com/posts/1");
    const data = await res.json();
    return data;
}

fetchData().then((data) => console.log("✅ Data:", data));

//Faielure example with async/await
function getUser() {//Agregar async
    const res = await fetch("https://jsonplaceholder.typicode.com/users/1"); // ❌
}

async function getUser() {
    const res = await fetch("https://jsonplaceholder.typicode.com/users/1");
    const user = await res.json();
    console.log("✅ Usuario:", user);
}

getUser();


async function getTodos() {
    const response = await fetch("https://jsonplaceholder.typicode.com/todos");
    const data = await response.json();
    //   console.log("Todos:", data);
    return data;
}

getTodos()
    .then((data) => console.log("✅ Todos:", data))
    .catch((error) => console.error("Error al obtener los todos:", error))

