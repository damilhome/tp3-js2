const valores = [3, 4, 5];

function fatorial(n) {
    let resultado = n;

    if(n > 1) {
        resultado *= fatorial(n - 1);
    }

    return resultado;
}

let fatoriais = valores.map(valor => fatorial(valor));

alert(`Fatoriais dos elementos: ${fatoriais}`);