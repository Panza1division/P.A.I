/*ZAD1

let licznik=0, a
do{
    a=parseInt(prompt("Napisz liczbę nieujemną:"+ ""));
    licznik++
}while(a<0||isNaN(a))
a=parseInt(a);
licznik--;
alert("Wypisana liczba to: " +a+ "\n Ilość błędnych liczb: " +licznik)*/


/*ZAD2

let a, napis="";
do{
    a=parseInt(prompt("Wprowadź liczbę dodatnią i parzystą"+""));
    if(isNaN(a)||a<=-0||a%2!=0){
        napis+=a+", ";
    }
}while(isNaN(a)||a<=-0||a%2!=0);
alert("Podana liczba to "+a+ "\n Złe wartosći: " +napis) */

/*ZAD3
const a=10, b=20;
let liczba;
do{
    liczba=parseInt(prompt("Wprowadź liczbe z zakresu ["+a+","+b+"]"));
}while(isNaN(liczba)||liczba<a||liczba>b);
if(a%2==0){
    parzystosc="parzysta"
}else{
    parzystosc="nieparzysta"
}
*/


/*let a
do{
     a=parseInt(promt("Podaj liczbę: "));
}while(isNaN(a));
alert(a);

let im;
do{
    im=promt("Podaj Imię: ");
} while(!isNaN(im));
alert(im)
*/
/*    1. Wyegzekwuj wprowadzenie przez użytkownika liczby nieujemnej. Wypisz w kolejnym oknie dialogowym tę dobrą wartość i komunikat o ilości podanych złych wartości.

    2. Wyegzekwuj wprowadzenie przez użytkownika liczby dodatniej i parzystej. Wypisz w kolejnym oknie dialogowym tę dobrą wartość i komunikat wyświetlający wszystkie wprowadzone złe wartości.





przed realizacją kolejnych poleceń zdeklaruj dwie stałe:
const  a=10, b=20;
    3. Wyegzekwuj wprowadzenie przez użytkownika liczby z zakresu [a, b]. Wypisz na stronie tę dobrą wartość i informację o jej parzystości (czy jest parzysta, czy nieparzysta).

    4. Wyegzekwuj wprowadzenie przez użytkownika liczby z zakresu [a, b). Wypisz na stronie tę dobrą wartość i wszystkie kolejne liczby zaczynając od wartości a aż do wypisania tej dobrej wprowadzonej.

    5. Wyegzekwuj wprowadzenie przez użytkownika liczby parzystej z zakresu (a, b]. Wypisz na stronie tę dobrą wartość oraz wypisz kolejne parzyste większe od wprowadzonej nie przekraczając wartości b.
Na zakończenie program wypisze komunikat o ilości tych wypisanych parzystych

    6. Wyegzekwuj wprowadzenie przez użytkownika liczby z zakresu (a, b). Wypisz na stronie  tę dobrą wartość i komunikat o ilości złych wartości.*/