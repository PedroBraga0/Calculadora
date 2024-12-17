function calculate() {
    // Obter os valores dos campos de entrada
    const num1 = parseFloat(document.getElementById('num1').value);
    const num2 = parseFloat(document.getElementById('num2').value);
    const operation = document.getElementById('operation').value;

    let result;

    // Realizar a operação selecionada
    switch (operation) {
        case 'add':
            result = num1 + num2;
            break;
        case 'subtract':
            result = num1 - num2;
            break;
        case 'multiply':
            result = num1 * num2;
            break;
        case 'divide':
            if (num2 !== 0) {
                result = num1 / num2;
            } else {
                result = 'Erro: divisão por zero!';
            }
            break;
        default:
            result = 'Operação inválida!';
    }

    // Exibir o resultado
    document.getElementById('result').innerText = 'Resultado: ' + result;
}
