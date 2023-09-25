/* 
2C = two of clobes (trebol)
2D = two of diamonds (trebol)
2H = two of hearts (trebol)
2S = two of spades (trebol)

*/

let deck         = [];
const tipos      = ['C','D','H','D'];
const especiales = ['A','J','Q','K'];

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
    console.log(deck);
    return deck;
}

crearDeck();


// Esta funcion me permite tomar una carta

const pedirCarta = () => {

    if (deck.length === 0) {
        throw 'No hay cartas en el deck';
    }

    const carta = deck.shift();

    console.log(deck);
    console.log(carta);
    return carta;
}
deck = [];
pedirCarta();