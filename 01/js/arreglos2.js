let juegos = ['Zelda', 'Mario', 'Metroid', 'Chrono'];
console.log('Largo:', juegos.length);

let primero = juegos[0];

let ultimo = juegos[juegos.length - 1];

console.log({ primero, ultimo });

juegos.forEach( (elemento, indice, arr) => { // Recorre el arreglo
    console.log({ elemento, indice, arr });
}); 

let nuevaLongitud = juegos.push('F-Zero'); // Agrega un elemento al final del arreglo
console.log({ nuevaLongitud, juegos});

nuevaLongitud = juegos.unshift('Fire emblem'); // Agrega un elemento al inicio del arreglo
console.log({nuevaLongitud, juegos});

let juegoBorrado = juegos.pop(); // Borra el ultimo elemento del arreglo
console.log({ juegoBorrado, juegos });

let pos = 1;
console.log(juegos);

let juegosBorrados = juegos.splice(pos, 2); // Se borran 2 elementos a partir de la posicion pos

console.log({ juegosBorrados, juegos });

let metroidIndex = juegos.indexOf('Metroid'); // Devuelve el indice del elemento buscado
console.log({ metroidIndex });