/*FizzBuzz
Scrivi un programma che stampi i numeri da 1 a 100,
ma per i multipli di 3 stampi “Fizz” al posto del numero e per i multipli di 5 stampi Buzz.
Per i numeri che sono sia multipli di 3 che di 5 stampi FizzBuzz.*/
//Creo programma di numeri da 0 a 100
var fizzBuzz = [];
//Definisco il ciclo di FizzBuzz
for ( var i = 1; i <= 100; i++) {
//Sostituisco gli i divisibili per 3 con la stringa Fizz
  if ( i % 3 == 0 ) {
   console.log('Fizz');
 } //Sostituisco gli i divisibili per 5 con la stringa Buzz
  else if ( i % 5 == 0 ) {
    console.log('Buzz');
  }

}
