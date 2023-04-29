/*
  Conta il tempo
  Scrivi un programma che dato un numero di secondi, calcoli la quantità di ore, minuti e secondi corrispondenti e
  poi stampi il risultato. L'output avrà solo numeri interi.

  Esempio:
    Input: 12560
    Output: 3 ore, 29 minuti e 20 secondi.

  Consigli:
  In un'ora ci sono 60 minuti, in un minuto 60 secondi. Quindi quanti secondi ci sono in un'ora? ;)

  http://www.imparareaprogrammare.it
*/
var sectot=12560;
var secxora=3600;
var ore=sectot / secxora;
ore=Math.round(ore);
var min= Math.round((sectot % secxora) /60);
var secrest=((sectot % 60) );
console.log (ore + " ore, " + min+" minuti, " +secrest+ " secondi.");
