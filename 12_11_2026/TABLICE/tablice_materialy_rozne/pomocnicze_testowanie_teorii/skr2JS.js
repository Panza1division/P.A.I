/*const tab_liczby = [10, 20, 21, 30, 31, 40];
 
// 	//push() – dołożenie elementów na końcu tablicy
// tab_liczby.push(-5);
// alert(tab_liczby.join());
//     // pop() – zabranie elementów z końca tablicy
// tab_liczby.pop();
// alert(tab_liczby.join());
//     // unshift() – dodanie elementów na początku tablicy
// tab_liczby.unshift(-500);
// alert(tab_liczby.join());
//     // shift() – zabranie elelemntu z początku tablicy
// tab_liczby.shift();
// alert(tab_liczby.join());
//     splice() – dodaje / usuwa elementy tablicy [splice(indeks, ilość, elementy)] 
document.write("<br>Moja tablica:    "+tab_liczby.join());
tab_liczby.splice(2,3);
document.write("<br>Tablica po wycięciu:   "+tab_liczby.join());
document.write("<br><br><br>");
const tab_liczby2 = [101, 202, 213, 304, 315, 406];
document.write("<br>Moja tablica2:    "+tab_liczby2.join());
let wycinek=tab_liczby2.splice(2,3);
document.write("<br>Tablica po wycięciu:   "+tab_liczby2.join());
document.write("<br>To co wycięto:    "+wycinek.join());


const tab = ['Marcin', 'Ania', 'Agnieszka', 'Monika'];
tab.splice(1, 0, 'Piotr','Paweł','Patrycja'); 
//1 - który index, 0 - ile usunąć, 'Piotr' - element dodawany przed danym indexem
document.write("<br><br><br>"+tab);
    //[Marcin, Piotr, Ania, Agnieszka, Monika]

*/
let liczby = [4, 7, 12, 5, 9];
 
let wynik = liczby.find(function(element){ return element > 10});
alert(wynik);


wynik = liczby.some(function(element){ return element > 10});
alert(wynik);

let liczby2 = [6, 2, 8, 4];
 
wynik = liczby2.some(function(element){ return element > 10});

alert(wynik);
wynik = liczby2.every(function(element){ return element %2==0});
alert(wynik);

let liczby3 = [2, 4, 6, 8];

let suma = liczby3.reduce(
    function(akumulator, element) {
        return akumulator + element;
    },
    0
);


alert(suma);


let liczby4 = [2, 4, 16, 8];
let maks = liczby4.reduce(
    function(a, b) {
        return (a>b)?a:b;
    }
);
alert(maks);


let a=5, b=7;
let c=a+b;
document.write(`Wynik mojej pracy<br>${a}  + ${b}  =  ${c}`);
