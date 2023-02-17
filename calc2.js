function rechnen (zahl1, zahl2, opr) {
    result = {fehler:null, ergebnis:null, zahl1: zahl1, zahl2: zahl2, opr:opr};

    if (opr != "+" && opr != "-" && opr != "*" && opr != "/") {
        result.fehler = "opr muss + - * / sein"
        return result;
    }
    if (typeof zahl1 !="number" || typeof zahl2 !="number") {
        result.fehler = "Bitte geben Sie einen Zahl"
        return result;
    }
    if (opr== "+") 
    result.ergebnis = zahl1+zahl2;
    else if (opr== "-") 
    result.ergebnis = zahl1-zahl2;
    else if (opr== "*") 
    result.ergebnis = zahl1*zahl2;
    else if (opr== "/") {
        if (zahl==0)
        result.fehler = "Eine Zahl kann nicht durch 0 geteilt werden"
        result.ergebnis = zahl1z/ahl2;
    }   
    return result;
}

rechnen ()

ergebnis = rechnen (12, 10, "+");
console.log (ergebnis);

ergebnis_keine_zahl = rechnen (1, "a", "+");
console.log (ergebnis_keine_zahl);