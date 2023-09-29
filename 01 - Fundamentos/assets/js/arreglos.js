//No es muy comun
const arr = new Array(10);
const arr1 = [];
console.log(arr);

let videoJuegos = ["Mario", "Megaman", "Pacman"]
console.log(videoJuegos);

console.log(videoJuegos[0]);

let arregloDeCosas = [
    true,
    123,
    "Fernando",
    1+ 3,
    function(){

    },
    ()=>{},
    ["X","Megaman","Zero","Dr.Light",[
        "Dr. Willy",
        "Woodman"
    ]]
]

console.log(arregloDeCosas[6][4][0]);
let arregloDePersonajes = arregloDeCosas[6];
console.log(arregloDePersonajes[2]);