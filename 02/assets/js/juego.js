(()=>{ // Esto es una funcion anonima
    'use strict' // Esto es para que el navegador sea mas estricto con el codigo

    
    let deck         = [];
    const tipos      = ['C','D','H','D'];
    const especiales = ['A','J','Q','K'];

    let puntosJugador     = 0,
        puntosComputadora = 0;

    // Referencias del HTML

    const btnPedirCarta   = document.querySelector('#btnPedirCarta');
    const btnDetener      = document.querySelector('#btnDetener');
    const btnNuevoJuego   = document.querySelector('#btnNuevoJuego');

    const divCartasJugador     = document.querySelector('#jugador-cartas');
    const divCartasComputadora = document.querySelector('#computadora-cartas')

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
        deck = _.shuffle(deck);
        console.log( {deck} );
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

    // turno de la computadora

    const turnoComputadora = (puntosMinimos) => {

        do {
            // Despliegue de puntaje computadora
            const carta = pedirCarta();
            puntosComputadora += valorCarta(carta);
            containerPoints[1].innerText = puntosComputadora;

            //Despliegue de imagen
            const imgCarta = document.createElement('img');
            imgCarta.src = `assets/cartas/${ carta }.png`
            imgCarta.classList.add('carta');
            divCartasComputadora.append(imgCarta); 
                
            } while ( (puntosComputadora < puntosMinimos) && (puntosMinimos <= 21) );

            setTimeout(() => {
                // Despliegue de resultado
                (puntosMinimos === 21) ? alert('21!!'):(puntosMinimos > 21) ? alert('Perdiste!') : (puntosMinimos > puntosComputadora) ? alert('Ganaste!') : (puntosMinimos < puntosComputadora && puntosMinimos < 21 && puntosComputadora > 21) ? alert('Ganaste!') : alert('Perdiste!');
                
            }, 100);

            
        }
        
    // Eventos
    btnPedirCarta.addEventListener('click', () =>{
        //Puntaje
        const carta = pedirCarta();
        puntosJugador += valorCarta(carta);
        containerPoints[0].innerText = puntosJugador;

        //Despliegue de imagen
        const imgCarta = document.createElement('img');
        imgCarta.src   = `assets/cartas/${ carta }.png`
        imgCarta.classList.add('carta');
        divCartasJugador.append(imgCarta);

        if (puntosJugador > 21) {
            btnPedirCarta.disabled = true;
            btnDetener.disabled    = true;
            turnoComputadora(puntosJugador);

        } else if ( puntosJugador === 21){
            btnPedirCarta.disabled = true;
            btnDetener.disabled    = true;
            turnoComputadora(puntosJugador);
        }
        
        
    });

    btnDetener.addEventListener('click', () =>{
        
        btnPedirCarta.disabled = true;
        btnDetener.disabled    = true;
        
        turnoComputadora(puntosJugador);
        
    });

    btnNuevoJuego.addEventListener('click', () =>{

        deck = [];
        deck = crearDeck();
        
        btnPedirCarta.disabled = false;
        btnDetener.disabled    = false;

        containerPoints[0].innerText = 0;
        containerPoints[1].innerText = 0;

        puntosJugador = 0;
        puntosComputadora = 0;

        divCartasComputadora.innerHTML = '';
        divCartasJugador.innerHTML = '';
    });


})();
