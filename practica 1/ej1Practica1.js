//1. Crear un arreglo de nombres a partir del siguiente input:


let input = [ 
    { name: "John", age: 21, city: "New York" }, 
    { name: "Mike", age: 28, city: "Moscow" }, 
    { name: "Danny", age: 30, city: "London" }, 
    { name: "Lisa", age: 26, city: "Paris" }, 
    { name: "Sophie", age: 19, city: "Berlin" },
];


let newArray = [];
input.forEach((object) =>{
    newArray.push(object.name);
}); 
console.log(newArray);


// 2. Crear un arreglo de nombres a partir del arreglo anterior pero 
// solo para las personas mayores de 20 años y menores de 29.

let filteredArray = [];

input.filter((object)=>{
    if(object.age > 20 && object.age<29){
        filteredArray.push(object.name);
    };
});

console.log(filteredArray);


// 3. Dado un arreglo de objetos de países que poseen dos propiedades: 
// name y population, ordenarlos de mayor a menor en cuanto a su población utilizando la función de arreglo sort(). 
// Ejemplo de un objeto del arreglo: { name: Argentina, population: 458100000}


const countries = [
    {"name": "Alemania", "population":50000000},
    {"name": "Estados Unidos", "population":95000000},
    {"name": "Rusia", "population":20000000},
    {"name": "Francia", "population":10000000},
    {"name": "China", "population":90000000},
]


let sortedCountries = [];
let max = 0;
countries.forEach((object) => {
    if(object.population >= max){
        max = object;
        sortedCountries.push(object);
    }
    });
    console.log(sortedCountries);


//4. Estás a cargo de las velas de cumpleaños para el cumpleañero y
//decidiste que la torta va a tener una vela por cada año de su edad total. 
//Solo van a poder soplar las velas más altas de la torta. 
//Tu objetivo es contar cuántas son las más altas de la torta Ejemplo candles = [4, 4, 1,]
//Las velas de mayor altura son de 4 de altura y son 2 en total. Por ende, la función debe retornar 2 como valor.

let candles = [4,4,2,1];
let counter = 0;
let countHighCandles = () =>{
    candles.forEach((candleHeight) =>{
        if(candleHeight == 4){
            counter++;
        };
    });
    return console.log("Cantidad de velas de mayor altura:", counter);
} 

countHighCandles();



// 5. El profesor de Lab Computación III tiene una clase de estudiantes. Frustrado con la falta de disciplina, el profesor decide cancelar la clase si menos que cierta cantidad de estudiantes están presentes cuando la clase empieza. Dado un arreglo de enteros que representa la llegada de estudiantes (<=0 significa que se llegó temprano o a tiempo!), y la cantidad mínima de estudiantes para que el profesor de la clase, determinar si la clase se cancela o no. Devolver la cadena "YES" si la clase SE CANCELA o "NO" si la clase NO SE CANCELA.




// 6.



// 7. Escribir una función que convierta un objeto de JS en un arreglo de JS: Ejemplos:

let person = {
    "name": "Priscila",
    "age": 19,
    "surname": "Di Renzo"
}

let objectToArray = () => {
    let newArrayy = [];
    newArrayy.push(person.name, person.age, person.surname);
    console.log(newArrayy);
}

objectToArray();