/* Zadanie 3
Napisz skrypt, który losuje n wartości zero lub jeden, wszystkie wylosowane wartości wypisuje poziomo czytelnie na ekran. Po zakończeniu losowania wypisuje komunikat o ilości wylosowanych jedynek
*/

const n=20;
let licznik=0;
let x;
for(i=0; i<n; i++){
    x=Math.floor(Math.random() * 2);
    document.write(x + " ");

     if (x === 1) {
        licznik++;
    }
}
document.write("<br><br>");
document.write("Liczba wylosowanych jedynek: " + licznik);