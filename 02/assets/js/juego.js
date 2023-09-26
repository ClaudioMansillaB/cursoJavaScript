/* 
2C = two of clobes (trebol)
2D = two of diamonds (trebol)
2H = two of hearts (trebol)
2S = two of spades (trebol)

*/

let deck         = [];
const tipos      = ['C','D','H','D'];
const especiales = ['A','J','Q','K'];

let puntosJugador = 0,
    puntosComputadora =0;

// Referencias del HTML

const btnPedirCarta   = document.querySelector('#btnPedirCarta');
const containerPoints = document.querySelectorAll('small');
// Esta funcion crea un nuevo Deck
const crearDeck  = () => {
 
    for(let i = 2; i <= 10; i++) {
        for(let tipo of tipos) {
            deck.push(i + tipo);
        }   
        
    }
    for(let tipo of tipos){
        for(let especial of especiales){
            deck.push(especial + tipo);
        }
    }
    //console.log(deck);
    deck = _.shuffle(deck);
    return deck;
}

crearDeck();


// Esta funcion me permite tomar una carta

const pedirCarta = () => {

    if (deck.length === 0) {
        throw 'No hay cartas en el deck';
    }

    const carta = deck.shift();

    return carta;
}


// pedirCarta();

const valorCarta = (carta) => {

    const valor = carta.substring(0, carta.length - 1);
    return ( !isNaN(valor) ) ? valor*1:( valor === 'A' ) ? 11 : 10;

}

// Eventos
btnPedirCarta.addEventListener('click', () =>{

    const carta = pedirCarta();

    puntosJugador += valorCarta(carta);
    containerPoints[0].innerText = puntosJugador;

    
});
