

let a = 10;
let b = a;

a = 30;

console.log({a,b});


let juan = { nombre: 'Juan' };
let ana  = { ...juan }; // Operador spred, simboliza separar elementos

ana.nombre = 'Ana';

console.log({juan,ana});


const  cambiaNombre = (persona) => {
    persona.nombre = 'Tony';
    return persona;
}

let peter = {nombre: 'Peter'};
let tony  = cambiaNombre(peter);

console.log({peter, tony}); 
// En consola, nos saldra que tony y peter se llaman tony
// Esto ocurre ya que literalmente mandamos {nombre: 'Peter'} a la funcion
// y esta lo cambia por {nombre: 'Tony'}

const frutas = ['Manzana', 'Pera', 'Piña'];

// const otrasFrutas = frutas; // Esto no es una copia, es una referencia
console.time('slice');
const otrasFrutas = [...frutas]; // Esto si es una copia. Esto es similar al hacer copias con [:] en Python
console.timeEnd('slice');

//Otra forma de copiarlo, es usar el metodo slice. Ejemplo const otrasFrutas = frutas.slice();

console.time('slice');
const otrasFrutas2 = frutas.slice(); 
console.timeEnd('slice');

// EL problema del metodo slice es que es un poco mas lento que spread (...)


otrasFrutas.push('Mango');

console.table({frutas, otrasFrutas});