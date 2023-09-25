/* 
2C = two of clobes (trebol)
2D = two of diamonds (trebol)
2H = two of hearts (trebol)
2S = two of spades (trebol)

*/

let deck         = [];
const tipos      = ['C','D','H','D'];
const especiales = ['A','J','Q','K'];

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
    console.log(deck);
    deck = _.shuffle(deck);
    console.log(deck);
    
}



crearDeck();
