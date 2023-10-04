//# Calcolo del prezzo del biglietto del treno
//- Chiedere all'utente il numero dei chilometri che vuole percorrere:
//    - dichiarare una variabile
let distanceKm
//    - assegnare alla variabile il valore costituito da un prompt
distanceKm = prompt('Inserisci il numero di chilometri che vuoi percorrere');
console.log(distanceKm);
//- Chiedere l'età del passeggero:
//    - dichiarare una variabile
let age
//    - assegnare alla variabile il valore costituito da un prompt
age = prompt('Inserisci la tua età');
console.log(age);
//- Definire prezzo per chilometro:
//  - assegnare alla variabile un valore
    const payForKm = 0.21;
//- Assegnare alla variabile per lo sconto da appliccare ai minorenni un valore:
let percForUnder18 = 20;
//- Assegnare alla variabile per lo sconto da applicare agli over 65 un valore:
let percForOver65 = 40;
//- Calcolare il prezzo pieno del biglietto:
const fullPrice = distanceKm * payForKm; 
//- calcolare lo sconto del 20% per i minorenni:
let saleForUnder18 = (fullPrice * percForUnder18) / 100;
console.log(saleForUnder18);
//- calcolare lo sconto del 40% per gli over 65:
let saleForOver65 = (fullPrice * percForOver65) / 100;
console.log(saleForOver65);
//- Calcolare il prezzo finale del viaggio:
let finalPrice
//  - Applicare sconto del 20% per gli under 18:
//      - SE il passeggero sarà minorenne
        if (age < 18) {
//      applicherò lo sconto per gli Under18
        finalPrice = fullPrice - saleForUnder18
        } else if (age > 65) { //- SE il passeggero sarà over 65
        //- applicherò lo socnto per gli Over65
        finalPrice = fullPrice - saleForOver65
        } else { //- SE il passeggero è tra i 18 e i 65 anni
        finalPrice = fullPrice
        }
        console.log(finalPrice);
//- Aggiungere cifra con massimo due decimali
finalPrice = Number(finalPrice.toFixed(2));
//- Stampare un messaggio dentro h1:
//    - inserire nell'html un tag h1 con l'id scelto
//    - recuperare con js l'elemento del dom con l'id scelto
        const ticketPriceDomElement = document.getElementById('ticketprice'); 
//    - modificare l'innerHTML dell'h1 con il valore della variabile dell'id scelto
        ticketPriceDomElement.innerHTML = ticketprice;