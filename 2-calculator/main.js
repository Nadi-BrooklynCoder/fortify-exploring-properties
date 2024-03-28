let currentDisplay = '0';
let resultDisplay = false;
let operator = 0;
let operator1 = 0;
let operator2 = 0;


function calculatorDisplay(val) {
    if (currentDisplay === '0' || resultDisplay || currentDisplay === '') {
        currentDisplay = val;
    } else {
        currentDisplay += val;
    }
    resultDisplay = false;
    updatedDisplay();
    console.log(val);
}

function updatedDisplay() {
    const display = document.querySelector('.calculator__display');
    display.innerHTML = currentDisplay;
}

function setOperator(val) {
    if (currentDisplay !== '0' && !resultDisplay) {
        operator1 = Number(currentDisplay);
        operator = val;
        currentDisplay = '';
    }
    console.log(val);
}

function calculateResult() {
    let result;
    operator2 = Number(currentDisplay);

    switch (operator) {
        case '+':
            result = operator1 + operator2;
            break;
        case '-':
            result = operator1 - operator2;
            break;
        case '*':
            result = operator1 * operator2;
            break;
        case '/': result = operator1 / operator2;
            break;
        default:
            currentDisplay = 'Error: Invalid Operation';
            updatedDisplay();
            return;
    }

    currentDisplay = result.toString();
    updatedDisplay();
    resultDisplay = true;
}

function clearDisplay() {
    currentDisplay = '0';
    updatedDisplay();
}