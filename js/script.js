/*FizzBuzz
Scrivi un programma che stampi i numeri da 1 a 100,
ma per i multipli di 3 stampi “Fizz” al posto del numero e per i multipli di 5 stampi Buzz.
Per i numeri che sono sia multipli di 3 che di 5 stampi FizzBuzz.*/
//Creo programma di numeri da 0 a 100
var fizzBuzz = [];
//Definisco il ciclo di FizzBuzz
for ( var i = 1; i <= 100; i++) {
  //Inserisco la condizione per gli i divisibili sia per 5 che per 3
  if ( i % 15 == 0 ) {
    console.log('FizzBuzz');
  }
//Sostituisco gli i divisibili per 3 con la stringa Fizz
 else if ( i % 3 == 0 ) {
   console.log('Fizz');
 }
 //Sostituisco gli i divisibili per 5 con la stringa Buzz
  else if ( i % 5 == 0 ) {
    console.log('Buzz');
  }
  //Inserisco la condizione per mostrare gli i non divisibili per 3 o per 5
  else {
    console.log(i);
  }

}
