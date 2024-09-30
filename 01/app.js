const resultElement = document.getElementById('result');
const inputOne = document.getElementById('input1');
const inputTwo = document.getElementById('input2');
const submitBtn = document.getElementById('submit');
const plusBtn = document.getElementById('plus');
const minusBtn = document.getElementById('minus');
let action = '+'

plusBtn.onclick = function () {
    action = '+'
};

minusBtn.onclick = function () {
    action = '-'
};

function computeNumbersWithAction(inp1, inp2, actionSymbol) {
    const num1 = Number(inp1.value);
    const num2 = Number(inp2.value);

    if (actionSymbol == '+') {
        return num1 + num2;
    }
    
    if (actionSymbol == '-') {
        return num1 - num2;
    }
}

function printResult(result) {
    if (result < 0) {
        resultElement.style.color = 'red';
    } else {
        resultElement.style.color = 'green';
    }
    resultElement.textContent = result;
}

submitBtn.addEventListener('click', () => {
    const sum = computeNumbersWithAction(inputOne, inputTwo, action);
    printResult(sum);
})

