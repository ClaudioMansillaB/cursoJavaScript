

function crearPersona(nombre, apellido){
    return {
        nombre: nombre,
        apellido: apellido
    }
}

//const persona = crearPersona('Claudio', 'Mansilla');
//onsole.log(persona);

// La idea es reducir la funcion crearPersona

const crearPersona2 = (nombre, apellido) => ({nombre, apellido})


const persona = crearPersona2('Claudio', 'Mansilla');
console.log( persona );

function imprimeArgumentos(){
    console.log(arguments);
}

//imprimeArgumentos(10,true,false,'Claudio','hola');

// Ahora como funcion de flecha

const imprimeArgumentos2 = (edad,...arguments) => { // Las funciones de flecha no trabajan con la funcion arguments
    //console.log(arguments); // Para usar arguments, usamos el metodo rest que es poner ... antes
                            // Si queremos poner mas argumentos, se ponen antes que ...arguments
    return arguments;
}

const argumentos = imprimeArgumentos2(10,true,false,'Claudio','Hola');
//console.log({argumentos});

// Si queremos sacar algunos argumentos del array entregado, podemos hacerlo de la siguiente manera.

const [casado,vivo,nombre,saludo] = imprimeArgumentos2(10,true,true,'Claudio','Hola');

console.log({casado,vivo,nombre,saludo});

// Par aislar solo la propiedad que nos interesa

const {apellido: nuevoApellido} = crearPersona('Claudio','Mansilla');
console.log({nuevoApellido});

// Destructuracion de objetos

let tony = {
    nombre: 'Tony Stark',
    codeName: 'IronMan',
    vivo: false,
    edad: 40,
    trajes: ['Mark I', 'Mark V', 'Hulkbuster'],
};

// Solo por fines de aprendizaje la siguiente funcion estara abajo

// const imprimePropiedades = (personaje) => {

//     console.log( 'nombre', personaje.nombre );
//     console.log( 'codeName', personaje.codeName );
//     console.log( 'vivo', personaje.vivo );
//     console.log( 'edad', personaje.edad );
//     console.log( 'traje', personaje.traje );
    
// }

// Esto anterior es engorroso, ahora viene la destructuracion

const imprimePropiedades = ({nombre, codeName, vivo, edad, trajes}) => {
    console.log({nombre});
    console.log({codeName});
    console.log({vivo});
    console.log({edad});
    console.log({trajes});

}
imprimePropiedades( tony );
