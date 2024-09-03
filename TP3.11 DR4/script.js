function calcularAreaTradicional(a, b) {
    return a * b;
}

const calcularAreaArrow = (a, b) => a * b;

alert(`Área usando função tradicional: ${calcularAreaTradicional(5, 8)}`);
alert(`Área usando arrow function: ${calcularAreaArrow(5, 8)}`);