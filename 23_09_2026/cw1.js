/*
Zadanie 1
Napisz skrypt, który losuje liczbę całkowitą z danego zakresu wartości, wypisuje ją na ekran oraz wypisuje informację o parzystości tej liczby i jej znaku (dodatnia, ujemna, zero).
Jeśli będzie to liczba parzysta, to po kilku wolnych liniach wypisze poziomo czytelnie n kolejnych parzystych rosnąco, w przeciwnym razie w ten sam sposób wypisze n kolejnych malejąco (w obu przypadkach zaczynamy wypisywanie od liczby wylosowanej).
Zakres losowania i wartość n zdeklaruj jako stałe. Przetestuj skrypt dla różnych wartości stałych.

let pocz=-20, kon=20, n=10;
let x;
document.write("Zakres losowania [" + pocz + ", " + kon + ") " + "<br>");

x=Math.floor(Math.random()*(pocz-kon)+kon)
document.write("Wylosowan liczba: " + x + "<br>");

if(x>0){
    document.write("Jest to liczba dodatnia" + "<br>")
} else if (x<0) {
    document.write("Jest to liczba ujemna" + "<br>")
} else  {
    document.write("Jest to liczba równa zero" + "<br>")
}


if(x%2==0){
    document.write("Liczba jest parzysta" + "<br><br><br>")
    for(let i=1;i<=n;i++)
    document.write(x+(2*i) + " ") 
} else {
    document.write("Liczba jest nie parzysta" + "<br><br><br>")
    for(let i=1;i<=n;i++)
    document.write(x-(2*i) + " ")
}

Zadanie 2
Napisz skrypt, który losuje liczbę całkowitą z danego zakresu wartości dotąd, aż wylosuje liczbę podzielną przez k. Skrypt wszystkie wylosowane wartości wypisuje poziomo czytelnie na ekran. Po zakończeniu losowania wypisuje komunikat o liczbie wylosowanych liczb. W nagrodę:
wyświetla w oknie przeglądarki tyle rzędów gwiazdek po n gwiazdek w każdym, ile było wylosowanych liczb (n zdeklaruj jako stałą, np. const n=20)
Zakres losowania i wartość k zdeklaruj jako stałe. Przetestuj skrypt dla różnych wartości stałych. */

