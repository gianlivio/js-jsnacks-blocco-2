/**
 * Description rimuove il primo elemento dell'array, generando un nuovi array privo di questo
 * 
 *
 * @param {*} array
 * @returns {*}
 */
function rimuoviDallaTesta(array) {
    const nuovoArray = array.slice(1);
    return nuovoArray;
}
