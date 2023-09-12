
function saludar(){
    console.log('Hola Mundo');
}


// Esta es la forma usual de hacer las funciones, pero no se recomienda hacerlo de esta froma
// ya que si, por ejemplo definimos una variable var saludar = 123;, saludar se convierte en una variable
// Ahora, si lo declaramos como let o const, entonces el error sera que no se puede declarar
// nuevamente.
// Podemos definir las funciones como sigue.

const saludar2 = function(){
    console.log('Hola Mundo');
}

// Podemos hacer funciones mas dinamicas pidiendo valores.

function saludar3(nombre){
    //console.log(arguments);// Arguments es una funcion nativa de las funciones que se llaman con function,
                           // Las funciones flecha no las tienen.
    //console.log('Hola ' + nombre);
    
    // Si queremos retornar mas de un valor, se debe hacer en una lista y luego
    // pedirlo a traves de los indices de la lista.
    return [1,2,3,4,5];

    console.log('Codigo despues del return'); // Esto nunca se ejecuta ya que esta despues de un return.

}

// Funciones de flecha o funciones lambda

const saludarFlecha = () =>{
    console.log('Hola Flecha');
}

const saludarFlecha2 = ( nombre ) =>{
    console.log('Hola', nombre);
}

const retornoSaludar = saludar3('Claudio', 40, true, 'Chile');
//console.log(retornoSaludar[0],retornoSaludar[1],retornoSaludar[2]);

// saludarFlecha();
// saludarFlecha2('Javiera');


function sumar( a,b ){
    return a + b;
}

// console.log( sumar(1,2));

const sumar2 = (a,b) => {
    return a + b;
}

// console.log(sumar2(3,2));

// Si solamente necesitamos hacer un return y nada mas dentro de una funcion de flecha
// Podemos resumirla de la siguiente formma

const sumar3 = (a,b) => a + b;

console.log(sumar3(7,2));

function getAleatorio(){
    return Math.random();
}

//console.log(getAleatorio());

const getAleatorio2 = () => Math.random();

console.log('Aleatorio2',getAleatorio2());