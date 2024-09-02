function soma(a, b) {
    return a + b;
}
function subtracao(a, b) {
    return a - b;
}
function multiplicacao(a, b) {
    return a * b;
}

function divisao(a, b) {
    if (b === 0) {
        return 'Divisão por zero não é permitida'
    } else {
        return a / b;
    }
}

function calcularTudo(a, b) {
    const resultados = {
        'soma': soma(a, b),
        'subtracao': subtracao(a, b),
        'multiplicacao': multiplicacao(a, b),
        'divisao': divisao(a, b),
        toString: function() {
            return `Soma: ${this.soma}\nSubtração: ${this.subtracao}\nMultiplicação: ${this.multiplicacao}\nDivisão: ${this.divisao}`;
        }
    }

    return resultados;
}
alert(calcularTudo(10, 2));