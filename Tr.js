function clearResult() {
    document.getElementById("ergebnis").textContent = "";
}

function addition() {
    let zahl1 = parseFloat(document.getElementById("z1").value);
    let zahl2 = parseFloat(document.getElementById("z2").value);
    let summe = zahl1 + zahl2;
    document.getElementById("ergebnis").textContent = "Ergebnis der Addition: " + summe;
}

function subtraktion() {
    let zahl1 = parseFloat(document.getElementById("z1").value);
    let zahl2 = parseFloat(document.getElementById("z2").value);
    let differenz = zahl1 - zahl2;
    document.getElementById("ergebnis").textContent = "Ergebnis der Subtraktion: " + differenz;
}

function multiplikation() {
    let zahl1 = parseFloat(document.getElementById("z1").value);
    let zahl2 = parseFloat(document.getElementById("z2").value);
    let produkt = zahl1 * zahl2;
    document.getElementById("ergebnis").textContent = "Ergebnis der Multiplikation: " + produkt;
}

function division() {
    let zahl1 = parseFloat(document.getElementById("z1").value);
    let zahl2 = parseFloat(document.getElementById("z2").value);
    if (zahl2 === 0) {
        document.getElementById("ergebnis").textContent = "Division durch Null ist nicht erlaubt.";
    } else {
        let quotient = zahl1 / zahl2;
        document.getElementById("ergebnis").textContent = "Ergebnis der Division: " + quotient;
    }
}
