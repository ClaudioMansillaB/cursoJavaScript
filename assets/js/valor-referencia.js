

let a = 10;
let b = a;

a = 30;

console.log({a,b});


let juan = { nombre: 'Juan' };
let ana  = { juan };

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