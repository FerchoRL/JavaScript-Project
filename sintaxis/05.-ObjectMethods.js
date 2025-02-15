//Get object keys as array
//Object.keys(obj)
const persona = { nombre: "Carlos", edad: 30, pais: "Mexico"};
let objectKeys = Object.keys(persona);
console.log(objectKeys); // ["nombre", "edad", "pais"]

//Object.values(obj)
//Get object values as array
let objectValues = Object.values(persona);
console.log(objectValues) //[ 'Carlos', 30, 'Mexico' ]


//Object.entries(obj)
//Get an array of keys-values
let objectEntries = Object.entries(persona);
console.log(objectEntries) //[ [ 'nombre', 'Carlos' ], [ 'edad', 30 ], [ 'pais', 'Mexico' ] ]


//Combined objects in new object
//Object.assign(target, ...sources)
//If I did not put a target I will modify the first object

const obj1 = {a: 1, b: 2};
const obj2 = {c: 3, d: 4};

const combinedObjects = Object.assign({}, obj1,obj2);
console.log(combinedObjects); //{ a: 1, b: 2, c: 3, d: 4 }

//Operator spread(...)
//Combined objects

const newCombined = {...obj1, ...obj2};
console.log(newCombined);

//Object iterator. for...in
//Itera sobre las llaves del objeto
for(let clave in combinedObjects){
    console.log(clave)
    console.log(combinedObjects[clave])
    //Notacion de corchetes
    //Me devuelve el value del combined object segun la clave que le envie
}


//Verify object properties
//Object.hasOwn(obj, "property") (New in ES2022)

const humano = {nombre: "No tiene", sexo: false}
console.log(Object.hasOwn(humano, "sexo"));//true
console.log(Object.hasOwn(humano, "marca"));//false

//Freeze an object
//Hace que un objeto sea completamente inmutable(inalterable)

const usuario = { nombre: "pepeneitor", edad: "5millones"};
Object.freeze(usuario);

//❌Can not alterate the object
usuario.edad = 89;
usuario.pais = "Albania";
delete usuario.nombre;

console.log(usuario);