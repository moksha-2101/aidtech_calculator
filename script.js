function calculate() {
    // Get the input values
    const num1 = parseFloat(document.getElementById('num1').value);
    const num2 = parseFloat(document.getElementById('num2').value);
    const operator = document.getElementById('operator').value;
    const resultElement = document.getElementById('result');

    // Check if both inputs are valid numbers
    if (isNaN(num1) || isNaN(num2)) {
        resultElement.textContent = 'Please enter valid numbers.';
        return;
    }

    // Perform the calculation based on the operator
    let result;
    switch (operator) {
        case '+':
            result = num1 + num2;
            break;
        case '-':
            result = num1 - num2;
            break;
        case '*':
            result = num1 * num2;
            break;
        case '/':
            if (num2 === 0) {
                resultElement.textContent = 'Division by zero is not allowed.';
                return;
            }
            result = num1 / num2;
            break;
        default:
            resultElement.textContent = 'Invalid operator. Please use +, -, *, or /.';
            return;
    }

    // Display the result
    resultElement.textContent = 'Result: ' + result;
}
