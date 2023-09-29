//Propiedades y metodos de los arreglos

let juegos = ["Zelda", "Mario", "Metroid", "Chrono"];
console.log(juegos.length);

let primero = juegos[0];
let ultimo = juegos[juegos.length - 1];

console.log(primero,ultimo);


juegos.forEach( (elemento,indice,arr)=>{
    console.log(elemento,indice,arr);
} )
//Agregar un elemento al final
let nuevaLongitud = juegos.push("F-Zero");


//Agregar elemento al inicio
nuevaLongitud = juegos.unshift("Fire Emblem")
console.log(nuevaLongitud);
console.log(juegos);

//Eliminar al final
let juegoBorrado = juegos.pop();
console.log(juegoBorrado, juegos);

//Eliminar una posicion en especifico
let pos = 1;
let elementoEliminado = juegos.splice(pos,2);
console.log(elementoEliminado,juegos);

//Buscar un objeto
let metroidIndex = "Metroid";
console.log(juegos.indexOf(metroidIndex));

