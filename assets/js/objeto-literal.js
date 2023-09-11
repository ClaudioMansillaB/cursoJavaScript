let personaje = {
    nombre: 'Tony Stark',
    codeName: 'IronMan',
    vivo: false,
    edad: 40,
    coords:{
        lat: 34.034,
        lng: -118.70
    },
    trajes: ['Mark I', 'Mark V', 'Hulkbuster'],
    direccion:{
        zip: '10880, 90265',
        ubicacion: 'Malibu, California'
    },
    ultimaPelicula: 'Infinity War',
};

console.log(personaje);
console.log('Nombre', personaje.nombre);
console.log('Nombre', personaje['nombre']);
console.log('Edad', personaje.edad);

console.log('Coors', personaje.coords);

console.log('No. Trajes', personaje.trajes.length);
console.log('Ultimo traje', personaje.trajes[personaje.trajes.length - 1]);

const x = 'vivo';
console.log('Vivo', personaje[x]);

console.log('Ultima pelicula', personaje['ultimaPelicula']);

// Mas detalles

delete personaje.edad // Elimina la propiedad edad del objeto personaje
console.log(personaje)

personaje.casado = true;// Podemos agregarle atributos a un objeto

const entriesPares = Object.entries(personaje);// Devuelve un arreglo con las propiedades del objeto
console.log(entriesPares);

// Los comandos delete o que modifique elementos de un objeto y tambien el agregar
// nuevos atributos al objeto puede ser evitado. Se podria pensar que se puede hacer
// definiendo el objeto con const en vez de let, pero eso no sirve.
// Para evitar estos cambios hay que usar el comando freeze.

Object.freeze(personaje);

personaje.casado = false; // Este comando no funcionara, ya que intentamos cambiar el atributo despues de un freeze

// Por otro lado, los objetos dentro del objeto no se protegen, es decir
// el objeto direccion puede ser cambiado

personaje.direccion.ubicacion = 'Chile' // Esto cambia el atributo Malibu, California por Chile
console.log(personaje);

Object.freeze(personaje.direccion);// Esto nos permite dejar permanente el objeto direccion dentro del objeto personaje

personaje.direccion.ubicacion = 'Argentina'
console.log(personaje);

const propiedades = Object.getOwnPropertyNames(personaje);// Devuelve un arreglo con las propiedades del objeto
const valores = Object.values(personaje);// Devuelve un arreglo con los valores del objeto
console.log(propiedades,valores);



