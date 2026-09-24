/*
Zadanie 7
Napisz skrypt, który wymusza losowanie liczby dodatniej i podzielnej przez k, następnie wypisuje poziomo czytelnie na ekran n wartości podzielnych przez k rosnąco, zaczynając od wylosowanej. W nowym wierszu wypisuje również informację o sumie wszystkich wypisanych liczb
*/

const pocz=-500, kon=20, k=3, n=3;
let x;
do{
x=Math.floor(Math.random()*(kon-pocz+1)+pocz);
} while (x<=0||x%k!==0);

let suma=0
for (let i=0;i<n;i++) {
    document.write(x + " ")
    suma+=x;
    x+=k;


}
document.write("<br>")
document.write("Suma wszystkich wypisanych liczb: " + suma);