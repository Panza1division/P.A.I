const n = 5;
const liczby = [];
let przerwano = false;

for (let i = 0; i < n; i++) {
    let wartosc;
    let tekst;
    do {
        tekst = prompt("Podaj liczbę całkowitą (" + (i + 1) + "/" + n + "): ");
        if (tekst === null) {
            przerwano = true;
            break;
        }
        wartosc = Number(tekst);
        if (tekst.trim() === "" || !Number.isInteger(wartosc)) {
            alert("Wpisz poprawną liczbę całkowitą.");
        }
    } while (tekst.trim() === "" || !Number.isInteger(wartosc));

    if (przerwano) {
        break;
    }
    liczby.push(wartosc);
}

if (przerwano) {
    alert("Wprowadzanie danych zostało przerwane.");
} else {
    const rosnaco = [...liczby].sort((a, b) => a - b);
    alert(
        "Wprowadzona tablica: " + liczby.join("; ") + "\n" +
        "Posortowane rosnąco: " + rosnaco.join("; ") + "\n" +
        "Najmniejsza wartość: " + rosnaco[0] + "\n" +
        "Największa wartość: " + rosnaco[rosnaco.length - 1]
    );
}