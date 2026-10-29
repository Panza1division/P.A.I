/* //Skrypt 2
Zadeklaruj dwie stałe o wartościach -50 i 50 oraz zmienną n o dowolnej wartości. Wylosuj do tablicy o nazwie losowe1 n wartości z powyższego zakresu. Wyświetl poziomo czytelnie zawartość tablicy za pomocą instrukcji iteracyjnej. Wyświetl poziomo czytelnie liczby nieparzyste z tej tablicy i komunikat o ilości liczb nieparzystych.  Wyświetl poziomo czytelnie liczby ujemne z tej tablicy oraz komunikat o sumie liczb ujemnych.
*/

const a = -50;
const b = 50;
const n = 20;
const losowe1 = [];
const nieparzyste = [];
const ujemne = [];
let sumaUjemnych = 0;

for (let i = 0; i < n; i++) {
    losowe1.push(Math.floor(Math.random() * (b - a + 1)) + a);
}

document.write("Wylosowane liczby: " + losowe1.join("; ") + "<br>");

for (const liczba of losowe1) {
    if (liczba % 2 !== 0) {
        nieparzyste.push(liczba);
    }
}
document.write("Liczby nieparzyste: " + nieparzyste.join("; ") + "<br>");
document.write("Ilość liczb nieparzystych: " + nieparzyste.length + "<br>");

for (const liczba of losowe1) {
    if (liczba < 0) {
        ujemne.push(liczba);
        sumaUjemnych += liczba;
    }
}

document.write("Liczby ujemne: " + ujemne.join("; ") + "<br>");
document.write("Suma liczb ujemnych: " + sumaUjemnych);