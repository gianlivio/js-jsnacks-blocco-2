let N = parseInt(prompt("Inserisci un numero"));

while (isNaN(N) || N < 1) {
    N = parseInt(prompt("Input non valido."));
}

console.log(N);

for (let i = 0; i < N; i++) {
    let arrayRandom = []; // Sposta l'inizializzazione dell'array qui dentro
    for (let j = 0; j < 10; j++) {
        arrayRandom.push(numRandom());
    }
    console.log(arrayRandom);
}

function numRandom() {
    return Math.floor(Math.random() * 100) + 1;
}
