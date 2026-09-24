/*
Zadanie 5
Napisz skrypt, który losuje liczbę całkowitą z danego zakresu liczb [ujemna, dodatnia] i wypisuje tę liczbę na ekran. Jeśli wylosowana jest dodatnia i parzysta, to wypisuje malejąco kolejne parzyste nieujemne (zaczynając od wylosowanej). W przeciwnym razie wypisuje na ekranie pionowo tyle razy imię autora skryptu, ile wynosi wartość bezwzględna wylosowanej liczby.
*/

const pocz=-20, kon=20, imie="Daniel";
let x;
x=Math.floor(Math.random()*(kon-pocz+1)+pocz);
document.write("Wylosowana liczba: " + x + "<br><br>");
if (x>0 && x%2===0) {
    for (let i=x;i>=0;i-=2) {
        document.write(i + " ");
    }
} else {   
let y
    y=Math.abs(x);
    for (let i=0;i<y;i++) {
        document.write(imie + "<br>");
    }
}
