const { crearArchivo } = require('./multiplicar/multiplicar');

let argv = process.argv; //variable global de node que se crear al iniciar el programa, en la posición argv se guardan los parámetros pasados por consola.
let parametro = argv[2];
let base = parametro.split('=')[1];

console.log(base);

crearArchivo(base)
    .then(archivo => console.log(`Archivo creado: ${archivo}`))
    .catch(e => console.log(e));