function fatorial(n) {
    let resultado = n;

    if(n == 0) {
        resultado = 1;
    }
    
    if(n > 1) {
        resultado *= fatorial(n - 1);
    }

    return resultado;
}

alert(`Fatorial de 5: ${fatorial(5)}`);