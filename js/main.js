// Visualizzare in pagina 5 numeri casuali.
// Da lì parte un timer di 30 secondi.
// Dopo 30 secondi i numeri scompaiono e l’utente deve inserire, uno alla volta, i numeri che ha visto precedentemente, tramite il prompt().
// Dopo che sono stati inseriti i 5 numeri, il software dice quanti e quali dei numeri da indovinare sono stati individuati.

let IntervalloTempo

// Funzione per generare numeri casuali da 1 a 100
function GeneraNumeriRandom() {
  const numeri = [];
  while (numeri.length < 5) {
      const num = Math.floor(Math.random() * 100) + 1;
      if (!numeri.includes(num)) {
          numeri.push(num);
      }
  }
  return numeri;
}

// Mostra i numeri casuali in pagina

function NumeriInPagina(numeri) {
  document.getElementById('numeri').innerText = numeri.join(' ');
  
}

// Nasconde i numeri
function NascondiNumeri() {
  document.getElementById('numeri').innerText = '';
}

// Chiedi all'utente di inserire i numeri che ricorda
function OttieniNumeriUtente() {
  const numeriUtente = [];
  for (let i = 0; i < 5; i++) {
    const numUtente = parseInt(prompt(`inserisci il numero ${i + 1}:`), 10);
    numeriUtente.push(numUtente);
  }
  return numeriUtente;
}

// Confronta i numeri dell'utente con quelli generati
function ConfrontaNum(numeriGenerati, numeriUtente) {
  const numeriAzzeccati = numeriGenerati.filter(num => numeriUtente.includes(num));
  return numeriAzzeccati;
}

// Funzione per aggiornare il timer
function AggiornaTimer(secondi) {
  document.getElementById('timer').innerText = secondi;
  
}

// Nascondere e mostrare il bottone di restart
function RestartGame(show) {
  const restartButton = document.getElementById('restartGame');
  restartGame.style.display = show ? 'block' : 'none';
  
}


// Funzionamento del gioco
function MemoryGame() {
  const numeriGenerati = GeneraNumeriRandom();
  console.log('Numeri Generati', numeriGenerati);
  NumeriInPagina(numeriGenerati);
  let TempoRimasto = 30;

  AggiornaTimer(TempoRimasto);
  RestartGame(false);

  IntervalloTempo = setInterval(() => {
    TempoRimasto--;
    AggiornaTimer(TempoRimasto);
    if (TempoRimasto <= 0){
      clearInterval(IntervalloTempo);
      NascondiNumeri();
      setTimeout(() => {
        const numeriUtente = OttieniNumeriUtente();
        const numeriAzzeccati = ConfrontaNum(numeriGenerati, numeriUtente);

        alert(`Hai indovinato ${numeriAzzeccati.length} numeri correttamente: ${numeriAzzeccati.join(', ')}`);
        RestartGame(true);
      }, 100);
    
    }
    
  }, 1000); 
}

// evento al click del pulsante riavvio
document.getElementById('restartGame').addEventListener('click', MemoryGame);


// avvio il gioco
MemoryGame();



