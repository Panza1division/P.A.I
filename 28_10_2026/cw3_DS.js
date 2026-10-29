/*Zadeklaruj dwie stałe o wartościach -100 i 30. Pod zmienną n wylosuj liczbę dodatnią z powyższego zakresu. Wylosuj do tablicy o nazwie losowe2 n wartości parzystych z powyższego zakresu. Wyświetl zawartość tablicy w oknie alert, liczby mają być rozdzielone średnikiem i dwiema spacjami. Zaprojektuj możliwość powtórzenia całej zabawy.*/



const a = -100;
const b = 30;
let n;

do {
    n = Math.floor(Math.random() * b) + 1;
    const losowe2 = [];

    for (let i = 0; i < n; i++) {
        let liczba;
        do {
            liczba = Math.floor(Math.random() * (b - a + 1)) + a;
        } while (liczba % 2 !== 0);
        losowe2.push(liczba);
    }

    alert("Zawartość tablicy: " + losowe2.join(";  "));

} while (confirm("Czy powtórzyć zabawę?"));