let N = parseInt(prompt("Inserisci un numero"));

while (isNaN(N) || N < 1) {
    N = parseInt(prompt("Input non valido."));
}

console.log(N);



for (let i = 0; i < N; i++) {
    let arrayRandom = [];
    for (let j = 0; j < 10; j++) {
       
        arrayRandom.push(numRandom());
    } console.log(arrayRandom);
}

