const n = 10;
const liczbyUjemne = [];

for (let i = 0; i < n; i++) {
    liczbyUjemne.push(Math.floor(Math.random() * 100) - 100);
}

const rosnaco = [...liczbyUjemne].sort((a, b) => a - b);
const najmniejsza = rosnaco[0];
const najwieksza = rosnaco[rosnaco.length - 1];

alert(
    "Wylosowana tablica: " + liczbyUjemne.join("; ") + "\n" +
    "Posortowane rosnąco: " + rosnaco.join("; ") + "\n" +
    "Najmniejsza wartość: " + najmniejsza + "\n" +
    "Największa wartość: " + najwieksza
);