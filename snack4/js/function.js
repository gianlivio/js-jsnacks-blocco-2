/**
 * Description scorre l'array e restituisce la posizione dell'indice, se è presente, altrimenti -1
 *  *
 * @param {*} array
 * @param {*} elemento
 * @returns {*}
 */
function trovaIndice(array, elemento) {
    for (let i = 0; i < array.length; i++) {
        if (array[i] === elemento) {
            return i;
        }
    }
    return -1

}
