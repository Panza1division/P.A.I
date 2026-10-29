/*let tab1 = liczby = [4, 9, 3, 8, 1, 69, 34, 52, 25, 10];
let tab2 = miasta = ["Warszawa", "Kielce", "Poznań"];
let tab3 = [5,9,84,2,56,12,845,32,8,1,7,3];

for(let wartosc of liczby){
    document.write(wartosc + ", ")
}

document.write("<br>")

for(let wartosc of miasta){
    document.write(wartosc + ", ")
}

document.write("<br>")

function pormal(a, b){
    return a - b;
}

function pormax(a, b){
    return b - a;
}

tab1.sort(function(a,b){
    return a - b;
});
document.write(tab1)

document.write("<br>")

tab2.sort();
document.write(tab2)

document.write("<br>")

tab3.sort((a,b) => b - a);
document.write(tab3)*/

const uczen = {
    imie: "Anna",
    nazwisko: "Nowak",
    wiek: 17,
    klasa: "3A"
};

for (let klucz in uczen) {
    document.write("<br>"+klucz+ ": " + uczen[klucz]);
}