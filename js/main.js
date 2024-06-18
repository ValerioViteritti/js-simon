// Visualizzare in pagina 5 numeri casuali.
// Da lì parte un timer di 30 secondi.
// Dopo 30 secondi i numeri scompaiono e l’utente deve inserire, uno alla volta, i numeri che ha visto precedentemente, tramite il prompt().
// Dopo che sono stati inseriti i 5 numeri, il software dice quanti e quali dei numeri da indovinare sono stati individuati.

let IntervalloTempo

// Funzione per generare numeri casuali
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

// Chiedi all'utente di inserire i numenri che ricorda
function OttieniNumeriUtente() {
  const numeriUtente = [];
  for (let i = 0; i < 5; i++) {
    const numUtente = parseInt(prompt(`inserisci il numero ${i + 1}:`), 10);
    numeriUtente.push(numUtente);
  }
  return numeriUtente;
}


