const { crearArchivo } = require("./helpers/multiplicacion");
const [, , arg3 = 'base=5',] = process.argv;
const [, , ,arg4 = 'limite=20'] = process.argv;
console.log(process.argv);
const [,base] = arg3.split("=");
const [,limite] = arg4.split("=");

console.log(base, limite);

crearArchivo(base,limite)
    .then(nombreArchivo => console.log(nombreArchivo, 'creado'))
    .catch(err => console.log(err));
