/*
Zadanie 6
Napisz skrypt, który losuje n liczb z określonego zakresu, wyświetla je w przeglądarce i na zakończenie wyświetla poniższe informacje:
	- ilość wylosowanych podzielnych przez k
	- ilość wylosowanych zer
	- suma wylosowanych liczb
*/

const pocz=1, kon=50, k=4, n=10;
let x, kk=0, nada=0, suma=0;

for (let i=0;i<n;i++) {
x=Math.floor(Math.random()*(kon-pocz+1)+pocz);
document.write(x + " ");
if (x%k==0) {
    kk++;
}
if (x==0) {
    nada++;
}
suma+=x;
}

document.write("<br><br>");
document.write("Ilość liczb podzielnych przez " + k + ": " + kk + "<br>");
document.write("Ilość wylosowanych zer: " + nada + "<br>");
document.write("Suma wylosowanych liczb: " + suma);