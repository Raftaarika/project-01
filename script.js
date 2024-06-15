let screen = document.getElementById('screen');
let currentInput = '';
let currentOperator = '';
let firstOperand = '';
let secondOperand = '';

function clearScreen() {
    currentInput = '';
    firstOperand = '';
    secondOperand = '';
    currentOperator = '';
    screen.innerText = '0';
}

function appendNumber(number) {
    if (currentInput.length < 10) {
        currentInput += number.toString();
        screen.innerText = currentInput;
    }
}

function appendOperator(operator) {
    if (currentInput === '' && firstOperand === '') {
        return;
    }
    if (firstOperand === '') {
        firstOperand = currentInput;
        currentOperator = operator;
        currentInput = '';
    } else if (currentInput !== '') {
        secondOperand = currentInput;
        calculateResult();
        firstOperand = screen.innerText;
        currentOperator = operator;
        currentInput = '';
    }
}

function calculateResult() {
    if (currentOperator === '' || currentInput === '') {
        return;
    }
    secondOperand = currentInput;
    let result;
    switch (currentOperator) {
        case '+':
            result = parseFloat(firstOperand) + parseFloat(secondOperand);
            break;
        case '-':
            result = parseFloat(firstOperand) - parseFloat(secondOperand);
            break;
        case '*':
            result = parseFloat(firstOperand) * parseFloat(secondOperand);
            break;
        case '/':
            result = parseFloat(firstOperand) / parseFloat(secondOperand);
            break;
        case '%':
            result = parseFloat(firstOperand) % parseFloat(secondOperand);
            break;
    }
    screen.innerText = result;
    firstOperand = result.toString();
    currentInput = '';
    currentOperator = '';
}

function calculateSquare() {
    if (currentInput === '') {
        return;
    }
    let result = parseFloat(currentInput) ** 2;
    screen.innerText = result;
    currentInput = result.toString();
}

function calculateCube() {
    if (currentInput === '') {
        return;
    }
    let result = parseFloat(currentInput) ** 3;
    screen.innerText = result;
    currentInput = result.toString();
}

function calculateSquareRoot() {
    if (currentInput === '') {
        return;
    }
    let result = Math.sqrt(parseFloat(currentInput));
    screen.innerText = result;
    currentInput = result.toString();
}

// Event Listeners
document.querySelectorAll('.btn').forEach(button => {
    button.addEventListener('click', function () {
        console.log(`Button ${button.innerText} clicked`);
    });
});
