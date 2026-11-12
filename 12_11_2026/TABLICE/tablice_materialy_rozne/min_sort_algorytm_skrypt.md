Algorytm poszukiwania najmniejszej wartości w tablicy



K1: Przyjmij pierwszy element talicy za najmniejszy.

K2: Przejdź po wszystkich **pozostałych** elementach tablicy i dla każdego elementu sprawdź:

&#x09;czy jest mniejszy od aktualnie zapamiętanej najmniejszej wartości.

&#x09;	Jeśli jest mniejszy:

&#x09;		zapamiętaj go jako nową najmniejszą wartość.









Implementacja w JavaScript:



const liczby = \[8, 3, 12, 1, 7, 5];



let min = liczby\[0];



for (let i = **1**; i < liczby.length; i++) {

&#x20;   if (liczby\[i] < min) {

&#x20;       min = liczby\[i];

&#x20;   }

}





Zadanie:

Zapisz implementację algorytmu poszukiwania największej (MAX) wartości w tablicy liczb.



=====================================================================

SORTOWANIE TABLICY Z LICZBAMI





1. Sortowanie **rosnąco**:

\----------------------------------------



const liczby = \[8, 3, 12, 1, 5, 7];



// funkcja porównująca

function porownanie(a, b) {

&#x20;   return a - b;

}



liczby.sort(porownanie);



Opis działania funkcji porównanie:

porownanie(3, 8) → -5 → liczba 3 ma być przed 8

porownanie(8, 3) → 5 → liczba 8 ma być za 3

porownanie(5, 5) → 0 → kolejność bez zmian



\------------------------------druga forma zapisu--------------

const liczby = \[8, 3, 12, 1, 5, 7];

loczby.sort(function(a,b){

&#x09;return a-b;

});



\------------------------------trzecia forma zapisu--------------

const liczby = \[8, 3, 12, 1, 5, 7];



liczby.sort((a, b) => a - b);



====================================





Sortowanie malejąco



Wystarczy odwrócić odejmowanie:





const liczby = \[8, 3, 12, 1, 5, 7];

 

function porownanie(a, b) {

return b - a;

}

 

liczby.sort(porownanie);







