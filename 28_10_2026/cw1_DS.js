const imiona = ["Alicja", "Bartek", "Celina", "Dawid", "Ewa"];

document.write("Liczba imion: " + imiona.length + "<br>");
document.write("Metoda join: " + imiona.join("; ") + "<br>");

document.write("Pętla for in: ");
for (const indeks in imiona) {
	document.write(imiona[indeks] + (indeks < imiona.length - 1 ? "; " : ""));
}
document.write("<br>");

document.write("Pętla for of: ");
let pierwszy = true;
for (const imie of imiona) {
	document.write((pierwszy ? "" : "; ") + imie);
	pierwszy = false;
}
document.write("<br>");

document.write("Pętla for: ");
for (let indeks = 0; indeks < imiona.length; indeks++) {
	document.write(imiona[indeks] + (indeks < imiona.length - 1 ? "; " : ""));
}