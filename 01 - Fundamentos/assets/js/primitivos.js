//son valores simples que representan datos básicos. Son inmutables, lo que significa que no se pueden cambiar una vez que se han creado.

let nombre = 'peter parker';

console.log(nombre);

nombre = "Tia May";
console.log(nombre);

console.log(typeof nombre);

nombre = 12;

console.log(typeof nombre);


let esMarvel = true;


let superPoder;
console.log(typeof superPoder);

let soyNull = null;
console.log(typeof soyNull);

let symbol1 = Symbol('a');
let symbol2 = Symbol('a');
console.log(typeof symbol1);

console.log(symbol1 === symbol2);