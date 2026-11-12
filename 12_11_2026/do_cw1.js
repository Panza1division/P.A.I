const liczby = [2,3,4,8,9];

liczby.forEach(function(wartosc){
    document.write(`<br>${wartosc}`)
}) ;
document.write("<br>");

//zad2


liczby.forEach(function(liczba, indeks){
    document.write(`<br>${indeks} ${liczba}`)
});
document.write("<br>");


//ZAD5


const k=1;
liczby.forEach(function(liczba,indeks,tablica){
    tablica[indeks]=liczba*k;});
document.write(`<br>tablica po zmianie; ${liczby.join("777")}`);
document.write("<br>");

//zad 1.2

var wyniki = liczby.map(function(element){
    return element * 2
});
document.write(`<br>Stara tablica ${liczby.join()}`);
document.write(`<br>Nowa tablica ${wyniki.join()}`);
document.write("<br>"); 
//zad 2.2

var wynik = liczby.map(function(liczba){
    if(liczba%2===0){
        return liczba + " parszysta";
    }
    return liczba + " nieparszysta";

});
document.write(`<br> ${wynik.join("<br>")}`);
document.write("<br>");

// 3

var wynik2 = liczby.filter(function(liczba){
    if(liczba%2===0){
        return liczba
    }
});
document.write(`<br> ${wynik2.join("<br>")}`);
document.write("<br>");

//4

var wynik3 = liczby.find(function(element){
    return element > 5
});
alert(wynik3);


//zad 5

var wynik4 = liczby.some(function(element){
    return element > 10
});
alert(wynik4);

//6

var wynik6 = liczby.every(function(element){
    return element %2==0
});
document.write(`<br> ${wynik6}`)

var wynik7 = licz