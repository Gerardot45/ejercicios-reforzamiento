const fs = require("fs");
const crearArchivo = (base = 5, limite = 10) => {
  let lista = "";
  console.log(`Tabla del ${base} hasta ${limite}`);
  for (let i = 1; i <= limite; i++) {
    lista += `${base} * ${i} = ${base * i}\n`;
  }
  console.log(lista);
  fs.writeFileSync(`tabla-${base} hasta ${limite}`, lista);
  console.log(`Tabla-${base} hasta ${limite} creada`);
};
module.exports = crearArchivo;
