const names = [
    {name: "Ferchower", age: 32},
    {name: "Alt", age: 132},
    {name: "Simp", age: 322},
    {name: "tresr", age: 1000}
]

//#region 1️⃣ Arrow function sin parametros 🚀🚀
let myArrowFunction = () => {
    console.log("Arrow Function sin parametros y un step")
}

myArrowFunction();

// Simplificado
myArrowFunction = () => console.log("Hola")

//#endregion

//#region2️⃣ Arrow function con un parametro y un step 🚀🚀
//Return implicito
let cuadradoNumero = (numero) => numero*numero

console.log(cuadradoNumero(5))

// Simplificado
cuadradoNumero = numero => numero*numero;

//#endregion

//#region3️⃣ Arrow function con multiples parametros y steps 🚀🚀

let filtrarLista = (listaNombres,filtro) => {
    let persona = {}
    for(let i = 0; i<listaNombres.length; i++){
        persona = listaNombres[i]
        if(persona.age <= filtro) console.log(`Tas muy morro wey. Pierdete ${persona.name}`)
    }
}

filtrarLista(names, 200)

//#endregion

//#region4️⃣ Arrow function parametros pór default 🚀🚀

const variosNames = (par1="No",par2="hay",par3="nada aqui") => {
    console.log(`${par1} ${par2} ${par3}`)
}

variosNames("FErchs")
//#endregion
