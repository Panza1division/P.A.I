/*let tab1 = []; //pusta tablica

let tab2 = [1,2,3,4];

let tab3 = ["Marcin", "Ania", "Agmoeslzla"];
let tab4 = [7,12,"KOT", {...}]; 
let tab5 = new Array(10);
let tab6 = new Array();
let tab7 = new Array("Ala", "Bala", "Cala");
------------
włansość length
np.tab3.length zwórci liczbę3 

*/


let tab2 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
alert(tab2.length); //daje długość tabeli
document.write(tab2.indexOf("5")) //daje numer indexu

document.write("</br>");

for(let i=0;i<tab2.length;i++){
    document.write(tab2[i]+" ");
}

document.write("</br>");

let napis="";
for(let i = 0;i<tab2.length;i++){
    napis+=tab2[i]+" ";
}
alert(napis);
alert(tab2);

let razem = tab2.join("; ");
document.write(razem );
alert(razem);

document.write("</br>");

for(let wartosc of tab2){
    document.write(wartosc+"");
}

document.write("</br>");

for(let indeks in tab2){
    document.write(tab2[indeks]+" ");
}

document.write("</br>");

tab2.push("kotek");
alert(tab2);

let cos=tab2.pop();
document.write(tab2+ "<br>");

document.write(cos+ "<br>");

tab2.splice(2,4,"ala","kot");
document.write(tab2 + "<br>"); 