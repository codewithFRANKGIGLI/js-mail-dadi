// Esercizio di oggi:
// nome repo: js-mail-dadi
// Gioco dei dadi
// Creo l'array vuoto:
const faceDice = [];
// Popolo l'array con i numeri da 1 a 6:
for (let i = 0; i < 6; i++) {
  faceDice.push(i + 1);
}
// Creo le variabili che 'pescano' un elemento casuale dall'array:
let userRoll = faceDice[Math.floor(Math.random() * faceDice.length)];
console.log(userRoll);
let aiRoll = faceDice[Math.floor(Math.random() * faceDice.length)];
console.log(aiRoll);

// Stabilire il vincitore, in base a chi fa il punteggio più alto.

if(userRoll == aiRoll) {
  alert('Tu: ' + userRoll +' Computer: ' + aiRoll + ' ----> Parità');
} else if(userRoll < aiRoll) {
  alert('Tu: ' + userRoll +' Computer: ' + aiRoll + ' ----> Hai perso');
} else {
  alert('Tu: ' + userRoll +' Computer: ' + aiRoll + ' ----> Hai Vinto!');
};
