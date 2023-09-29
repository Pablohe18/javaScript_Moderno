let personaje = {
    nombre: "Tony",
    apellido: "Stark",
    codeName: "IronMan",
    vivo: true,
    coords: {
        lat: 34.2,
        lng: -118.2
    },
    trajes: ["mark 1", "mark 2"],
    direccion: {
        zip: '10880, 90265',
        ubicacion: "Malibu"
    }
};

console.log("Nombre: ", personaje.nombre);
console.log("Latitud: ", personaje.coords.lat);

console.log("Trajes: ", personaje.trajes[1]);


// Mas detalles

delete personaje.apellido;
console.log(personaje);

// Obtener su llave y su valor en una misma posicion
const entriesPares = Object.entries(personaje);
console.log(entriesPares);

personaje.casado = true;

Object.freeze(personaje);

personaje.dinero = 10000;
console.log("Dinero:" ,personaje);

const propiedades = Object.getOwnPropertyNames(personaje);
const valores = Object.values(personaje);
console.log("Propiedades: ",propiedades, " Valores: ", valores);

//Referencia de mas propiedades:
// https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Object