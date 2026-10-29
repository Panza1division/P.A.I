const a = -50;
const b = 50;
const stop = Math.floor(Math.random() * (b - a + 1)) + a;
const losowe3 = [];

document.write("Wylosowana liczba stop: " + stop);

let liczba;
do {
    liczba = Math.floor(Math.random() * (b - a + 1)) + a;
    losowe3.push(liczba);
} while (liczba !== stop);

alert(
    "Wylosowano liczbę " + stop + " z zakresu [" + a + ", " + b + "]\n" +
    "Liczby z tej tablicy: " + losowe3.join("; ") + "\n" +
    "Liczba liczb w tablicy: " + losowe3.length
);