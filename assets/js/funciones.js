
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
    console.log(arguments);// Arguments es una funcion nativa de las funciones que se llaman con function,
                           // Las funciones flecha no las tienen.
    console.log('Hola ' + nombre);
}

// Funciones de flecha o funciones lambda

const saludarFlecha = () =>{
    console.log('Hola Flecha');
}

const saludarFlecha2 = ( nombre ) =>{
    console.log('Hola', nombre);
}

saludarFlecha();
saludarFlecha2('Javiera');




saludar3('Claudio', 40, true, 'Chile');
// saludar2();