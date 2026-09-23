let a=-20, b=50, n=30;
let x;
document.write("Liczby rzecziwste losowane z zakresu [" + a + ",  " + b + "]:" + "<br>");

for(let i=0;i<n;i++)
{ x=Math.random()*(b-a+1)+a
    document.write(x +", ")
};

document.write("<br><br><br>")

document.write("Liczby całkowite losowane z zakresu [" + a + ",  " + b + "):" + "<br>");
for(let i=0;i<n;i++)
{ x=Math.floor(Math.random()*(b-a)+a)
    document.write(x +", ")
};

document.write("<br><br><br>");

document.write("Liczby całkowite losowane z zakresu [" + 0 + ", " + b + "):" + "<br>");
for(let i=0;i<n;i++)
{ x=Math.floor(Math.random()*b)
    document.write(x +", ")
};
document.write("<br><br><br>")

document.write("Liczby całkowite losowane z zakresu[" + 0 + ", " + b + "]: " + "<br>");
for(let i=0;i<n;i++)
{ x=Math.floor(Math.random()*(b+1))
    document.write(x + ", ")
}

/*Ćwiczenie:
Wylosować i wyświetlić na stronie poziomo czytelnie n wartości z każdego  poniżej podanego zakresu. Każde wyświetlenie wylosowanych wartości należy poprzedzić informacją, z jakiego zakresu były liczby losowane. Nazwom a, b, n przypisz jakieś wartości stałe, np.
const a=-20, b=50, n=30;


 a) zakres [a, b] (z liczbą b włącznie)
    b) zakres [a, b) (bez liczby b)
    c) zakres [0, b) (bez liczby b)
    d) zakres [0, b] (z liczbą b)
*/