//Imprimir si un usuario es mayor de edad
const users = [
    {id: 1, firstName: "Jhon", lastName: "Doe", age: 30},
    {id: 2, firstName: "Jane", lastName: "Doe", age: 25},
    {id: 3, firstName: "Alice", lastName: "Smith", age: 28}
]

for (let i = 0; i < users.length; i++) {
    const user = users[i];
    if( user.age > 18) {
        console.log(`User ${i + 1} is a old boy: ${user.firstName} ${user.lastName}`);
    }
}