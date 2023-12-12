const display = document.querySelector('.display');

function clearDisplay() {
    display.value = '';
}

function deleteChar() {
    display.value = display.value.slice(0, -1);
}

function appendNumber(number) {
    display.value += number;
}

function addOperator(operator) {
    display.value += ` ${operator} `;
}

function calculateResult() {
    try {
        const result = eval(display.value);
        display.value = result;
    } catch (error) {
        alert('Error: Invalid expression');
    }
}