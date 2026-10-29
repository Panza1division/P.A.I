const miesiace = [
    "styczeń", "luty", "marzec", "kwiecień", "maj", "czerwiec",
    "lipiec", "sierpień", "wrzesień", "październik", "listopad", "grudzień"
];
const dniTygodnia = [
    "niedziela", "poniedziałek", "wtorek", "środa", "czwartek", "piątek", "sobota"
];

do {
    const numerMiesiaca = Math.floor(Math.random() * 12) + 1;
    const numerDnia = Math.floor(Math.random() * 7) + 1;

    alert(
        numerMiesiaca + " - " + miesiace[numerMiesiaca - 1] + "\n" +
        numerDnia + " - " + dniTygodnia[numerDnia - 1]
    );
} while (confirm("Czy jeszcze raz?"));