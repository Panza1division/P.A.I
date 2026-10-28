/* //Skrypt 2
Zadeklaruj dwie stałe o wartościach -50 i 50 oraz zmienną n o dowolnej wartości. Wylosuj do tablicy o nazwie losowe1 n wartości z powyższego zakresu. Wyświetl poziomo czytelnie zawartość tablicy za pomocą instrukcji iteracyjnej. Wyświetl poziomo czytelnie liczby nieparzyste z tej tablicy i komunikat o ilości liczb nieparzystych.  Wyświetl poziomo czytelnie liczby ujemne z tej tablicy oraz komunikat o sumie liczb ujemnych.
*/

const a=-50, b=50;
let n=20, liczba, losowanie1=[], niepa, ilosc=0,suma=0;

for(let i=0;i<=n;i++){
    let x = Math.floor(Math.random()*(b-a+1)+a);
    losowanie1.push(x);
}

document.write(losowanie1 + "</br>")


for(let niepa of losowanie1){
    if(niepa%2!==0){
        document.write(niepa + ", ");
        ilosc++
    }
}
document.write("<br>Ilosc iczb nieparszystych: "+ilosc+"<br><br>");

for(let index in losowanie1){
    if(losowanie1[index]<0){
        suma+=losowanie1[index];
        document.write(losowanie1[index]+" ");
    }
}

document.write("<br>Suma liczb umejnych: "+suma)