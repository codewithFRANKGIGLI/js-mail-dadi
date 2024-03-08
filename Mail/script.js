// Mail
// Chiedi all’utente la sua email,
// controlla che sia nella lista di chi può accedere,
// stampa un messaggio appropriato sull’esito del controllo.
// Per la soluzione di questo esercizio NON è consentito utilizzare .includes di js!

// Creo una variabile che raccogli la mail dall'utente:
let userMail = prompt('Qual è la tua mail?');
// console.log(userMail);
// Creo l'array con il database della mail:
const mailDatabase = ['ciccio@gmail.com','pasticcio@gmail.com','tizio@gmail.com','caio@gmail.com','sanpronio@gmail.com'];
// creo la variabile booleana che cambierà o no con il ciclo for:
let mailFound = false;
// ciclo for per passare in rassegna l'array nella ricerca della mail utente:
for (let i = 0; i < mailDatabase.length; i++) {
    // console.log(mailDatabase[i]);
    const thisMail = mailDatabase[i];
    if(thisMail === userMail) {
        mailFound = true;
    }
}
// Stampo se c'è o non c'è:
if(mailFound === true) {
    alert('Mail presente in archivio');
} else {
    alert('Mail non presente in archivio');
}