// importacion nombrada
// const { restar, sumar } = require("./exportacion-nombrada.cjs");
// importacion por defecto
const funciones = require("./exportacion-por-defecto.cjs");

console.log(funciones.sumar(2, 2));

// const valores = {
//   name: "juan",
//   apellido: "perez",
//   edad: 20,
// };

// const { name } = valores;

// console.log(sumar(2, 4));

// console.log(modulo.sumar(2, 4));
