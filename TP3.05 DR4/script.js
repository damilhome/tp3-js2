const numeros = [1, 2, 3, 4, 5];

function dobrarValores(array) {
    const arrDobrado = array.map(valor => valor * 2);
    return arrDobrado;
}

console.log(`Valores dobrados: ${dobrarValores(numeros)}`);