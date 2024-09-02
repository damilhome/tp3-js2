const lista = [10, 20, 30, 40];

function soma(lista) {
    let soma = 0;
    for (let i = 0; i < lista.length; i++) {
        soma += lista[i];
    }

    console.log(soma);
}

function produto(lista) {
    let produto = lista[0];

    for (let i = 1; i < lista.length; i++) {
        produto *= lista[i];
    }

    console.log(produto);
}

console.log("Soma dos elementos:");
soma(lista);

console.log("Multiplicação dos elementos:");
produto(lista);