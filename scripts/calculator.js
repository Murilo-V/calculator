const keyboard = document.querySelectorAll('.keyboard-numbers button');
const operators = document.querySelectorAll('#operators button');
const btnClear = document.querySelector('#btn-clear');
const btnResult = document.querySelector('#btn-result');
const panel = document.querySelector('.calculator-panel');

keyboard.forEach((key) => {
    key.onclick = function getValue() {
        if (panel.innerHTML === 'result area' || panel.innerHTML === 'invalid') {
            panel.innerHTML = key.innerHTML;
        } else {
            panel.innerHTML += key.innerHTML;

        }
    }
});

operators.forEach((operator) => {
    operator.onclick = function getValue() {
        if (panel.innerHTML === 'result area' || panel.innerHTML === 'invalid') {
            panel.innerHTML = 'invalid';
        } else {
            panel.innerHTML += operator.innerHTML
        }
    }
});

btnClear.onclick = function clear() {
    panel.innerHTML = 'result area'
}

btnResult.onclick = function getResult() {
    if (panel.innerHTML === 'result area' || panel.innerHTML === 'invalid') {
        panel.innerHTML = 'result area';
    } else {
        const expression = panel.innerHTML;
        expression.split(/(\D)/g)
        .map(value =>  (value.match(/\d/g) ? parseFloat(value, 0) : value))
        .reduce((acc, value, index, array) => {
            if (value === '+') {
                panel.innerHTML = (acc = acc + array[index + 1])
            } else if (value === '-') {
                panel.innerHTML = (acc = acc - array[index + 1])
            } else if (value === '*') {
                panel.innerHTML = (acc = acc * array[index + 1])
            } else if (value === '/') {
                panel.innerHTML = (acc = acc / array[index + 1])
            }
        });
    }
}