const tab_liczby = [10, 20, 21, 30, 31, 40];


var wynik = tab_liczby.map(function(element) {
    return element * 2;
});
document.write(`<br>dana tablica: ${tab_liczby.join()}`);
document.write(`<br>nowa tablica z podwojeniem liczb: ${wynik.join()}`);

//=======================

var wynik = tab_liczby.map(function(liczba) {

    if (liczba % 2 === 0) {
        return liczba+" parzysta";
    }

    return liczba +" nieparzysta";
});
document.write("<br>nowa tablica z napisami parzysta/nieparzysta: ");
for(wartosc of wynik){
   document.write(`<br>${wartosc}`);
}

//metoda filter()
var wynik = tab_liczby.filter(function(liczba) {

    if (liczba >20) {
        return liczba;
    }
});
document.write(`<br>dana tablica: ${tab_liczby.join()}`);
document.write(`<br>nowa tablica z liczbami>20 ma długość ${wynik.length}: <br>${wynik.join()}`);