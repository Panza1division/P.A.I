const tab_liczby = [10, 20, 21, 30, 31, 40];
 
tab_liczby.forEach(function (liczba) {
document.write(`<br>${liczba}`);
});
document.write("<br>==========");
//=================================







tab_liczby.forEach(function (liczba, indeks) {
    document.write(`<br>${indeks}  ${liczba}`);
});
document.write("<br>==========");



let suma = 0;
tab_liczby.forEach(function (liczba) {
suma += liczba;
});
document.write(`<br>Suma liczb w tablicy wynosi: ${suma}`);
document.write("<br>==========");


let licznik = 0;
tab_liczby.forEach(function (liczba) {
if (liczba % 2==0) {
licznik++;
}
});
document.write(`<br>Liczb parzystych w tablicy jest: ${licznik}`);
document.write("<br>==========");



const k=100;
tab_liczby.forEach(function (liczba,indeks,tablica) {
tablica[indeks]=liczba*k;
});
document.write(`<br>tablica po zmianie: ${tab_liczby.join()}`);
document.write("<br>==========");



const granica=3000;
tab_liczby.forEach(function (liczba,indeks,tablica) {
    if(liczba>granica){
        tablica[indeks]=-1
    }
});
document.write(`<br>tablica po zmianie: ${tab_liczby.join()}`);
document.write("<br>==========");
