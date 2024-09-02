const numeros1 = [1, 2, 3, 4];
const numeros2 = [5, 6, 7, 8];

function soma(a, b) {
    console.log(`Soma: ${a + b}`);
}

function diferenca(a, b) {
    console.log(`Diferença: ${a - b}`);
}

function produto(a, b) {
    console.log(`Produto: ${a * b}`);
}

for (let i = 0; i < numeros1.length; i++) {
    soma(numeros1[i], numeros2[i]);
    diferenca(numeros1[i], numeros2[i]),
    produto(numeros1[i], numeros2[i]);
}