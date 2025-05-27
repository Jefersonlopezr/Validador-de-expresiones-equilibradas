function delimitadoresEquilibrados(expresion) {
    var stack = [];
    var pares = {
        ')': '(',
        '}': '{',
        ']': '['
    };

    for (var i = 0; i < expresion.length; i++) {
        var char = expresion[i];
        if (char === '(' || char === '{' || char === '[') {
            stack.push(char);
        } else if (char === ')' || char === '}' || char === ']') {
            if (stack.length === 0 || stack.pop() !== pares[char]) {
                return false;
            }
        }
    }
    return stack.length === 0;
}

function validarExpresion() {
    var expresion = document.getElementById('expresion').value;
    var resultado = document.getElementById('resultado');
    if (delimitadoresEquilibrados(expresion)) {
        resultado.textContent = 'La expresión está equilibrada.';
    } else {
        resultado.textContent = 'La expresión NO está equilibrada.';
    }
}