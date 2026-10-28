/*Zadeklaruj dwie stałe o wartościach -100 i 30. Pod zmienną n wylosuj liczbę dodatnią z powyższego zakresu. Wylosuj do tablicy o nazwie losowe2 n wartości parzystych z powyższego zakresu. Wyświetl zawartość tablicy w oknie alert, liczby mają być rozdzielone średnikiem i dwiema spacjami. Zaprojektuj możliwość powtórzenia całej zabawy.*/



const a=-100, b=30;
let n, p

do{
    let losowe2 = [];
    do{
        n=Math.floor(Math.random()*(b-a+1)+a);
    }while(n<=0);

for(let i=0;i<n;i++){
    do{
        p=Math.floor(Math.random()*(b-a+1)+b);
    }while(p%2!=0);
    losowe2.push(p);
}

alert("Zawartość tablicy: "+losowe2.join("; "));

}while(confirm("powtrzóżyć zabawę?"))