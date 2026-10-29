/* 
K1: przymij pierwszy element tablicy za min|
K2: Przejdz po wszystkich **posostałych** elementach tablicy i dla każdego eleementu sprawdź:
    czy mniesjzy jest aktualnie zapamiętannej min wartośći
    Jeśli jest miensjzy:
        zapamaiętaj go jako najmiejszą wartość*/


const liczby = [8, 2, 5, 12, 7, 9,5];
let min = liczby[0];

for(let i=1;i<liczby.length;i++){
    if (liczby[i]<min){
        min = liczby[i];
    }
}
alert(min)

let max = liczby[0];
for(let i=1;i<liczby.length;i++){
    if (liczby[i]>max){
        max = liczby[i];
    }
}
alert(max)