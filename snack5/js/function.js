function stampa(array) {
    let risultato = "";
    for (let i = 0; i < array.length; i++) {
        risultato += array[i];
        if (i < array.length - 1) {
            risultato += ", ";
        }
    }
    return risultato;
}