/* Zadanie 2
Napisz skrypt, który losuje liczbę całkowitą z danego zakresu wartości dotąd, aż wylosuje liczbę podzielną przez k. Skrypt wszystkie wylosowane wartości wypisuje poziomo czytelnie na ekran. Po zakończeniu losowania wypisuje komunikat o liczbie wylosowanych liczb. W nagrodę:
wyświetla w oknie przeglądarki tyle rzędów gwiazdek po n gwiazdek w każdym, ile było wylosowanych liczb (n zdeklaruj jako stałą, np. const n=20)
Zakres losowania i wartość k zdeklaruj jako stałe. Przetestuj skrypt dla różnych wartości stałych. */

const pocz=-100, kon=100, n=20, k=13;
let x;
let licznik=0;
do{
    x=Math.floor(Math.random()*(pocz-kon+1)+kon);
    document.write(x + " ");
    licznik++
} while (x%k !=0)
document.write("<br>");
document.write("Liczba wylosowanych liczb: " + licznik + "<br>");

let i=0
do{
    document.write("*".repeat(n));
    document.write("<br>");
    i++
} while (i!=licznik)