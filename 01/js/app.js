
alert("Hola desde app.js");


console.log('Hola Mundo');


let a = 10,
    b = 20,
    c = 'Hola',
    d = 'Spiderman',
    x = a + b;
c = 20; //Esto no se puede hacer

const saludo = c + ' ' + d;

console.log('%c Mis variables', 'color:blue; font-weight: bold');
console.log({a});
console.log({b});
console.log({c});
console.info(x);
c = 'Hola de nuevo';
console.table({a, b, c, d, x});