let lastOperator = null; // Store the last operator

function appendToDisplay(value) {
    const display = document.getElementById('display');

    // Prevent adding the same operator consecutively
    if (['+', '-', '*', '/'].includes(value) && lastOperator === value) {
        return; // Do nothing if the last operator is the same
    }

    display.value += value;
    if (['+', '-', '*', '/'].includes(value)) {
        lastOperator = value; // Update the last operator
    } else {
        lastOperator = null; // Reset if a number is pressed
    }
}

function clearDisplay() {
    const display = document.getElementById('display');
    display.value = '';
    lastOperator = null; // Reset the last operator
}

function eraseLast() {
    const display = document.getElementById('display');
    display.value = display.value.slice(0, -1); // Remove the last character
}

function calculateResult() {
    const display = document.getElementById('display');
    try {
        const result = eval(display.value) || ''; // Use eval to calculate the result
        display.value = result;
    } catch (error) {
        display.value = 'Error'; // Handle invalid input
    }
}

function percentage() {
    const display = document.getElementById('display');
    display.value = eval(display.value) / 100; // Calculate percentage
}

function toggleSign() {
    const display = document.getElementById('display');
    if (display.value) {
        display.value = eval(display.value) * -1; // Change sign
    }
}
