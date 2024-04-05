/**
 * Verifica e stampa
 * 
 * @param {string} parola1 
 * @param {string} parola2 
 */
function confrontaEStampa(parola1, parola2) {
    if (parola1.length === parola2.length) {
        console.log("Stessa lunghezza:", parola1, parola2);
    } else if (parola1.length > parola2.length) {
        console.log(parola1, "è piu lunga");
    } else {
        console.log(parola2, "è piu lunga");
    }
}
