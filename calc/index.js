const displayValue = document.querySelector('#result-display');
let curr = ''; // 123 -> 0 -> 100 -> 0
let prev = 0; // 0 -> 123 -> 223
let result = 0; // 0 -> 0 -> 223
let operand = ''; // '' -> + -> +


document.querySelector('.controls-wrapper').addEventListener('click', (e) => {
    let elem = e.target;
    if (elem.tagName === 'BUTTON') {
        if (elem.classList.contains('btn-methods')) {

            if (elem.value === '√') {
                if (curr.indexOf('√') === -1) {
                    curr = '√' + curr;
                    displayValue.value = curr;
                }
                return;
            }

            if (curr.indexOf('√') > -1) {
                curr = Math.sqrt(parseFloat(curr.replace('√', '')));
            }

            if (!prev) {
                prev = +curr;
                curr = '';
                operand = elem.value;
                displayValue.value = '';
            } else {
                switch (operand) {
                    case "÷":
                        result = prev / +curr;
                        break;

                    case "%":
                        result = (+curr / prev) * 100
                        break;

                    case "*":
                        result = prev * +curr;
                        break;

                    case "-":
                        result = prev - +curr;
                        break;

                    case "+":
                        result = prev + +curr;
                        break;
                }
                if (elem.value === '=') {
                    prev = '';
                    operand = '';
                } else {
                    prev = result;
                    operand = elem.value;
                }
                curr = '';
                displayValue.value = result;

            }

        } else if (elem.classList.contains('btn-number')) {
            switch (elem.value) {
                case '.':
                    if (curr === '') {
                        curr = '0.';
                        return
                    }
                    if (!curr.includes('.')) {
                        curr += elem.value;
                    }
                    break;

                case '0':
                    if (!(curr === '0') && curr.length < 10) {
                        curr += elem.value;
                    }
                    break;

                default:
                    if (curr.length < 10) {
                        curr += elem.value;
                    }
                    break;

            }
            displayValue.value = curr;
        } else if (elem.classList.contains('btn-delete')) {
            if (curr.trim()) {
                curr = curr.slice(0, -1);
                displayValue.value = curr;
            }
        } else {
            result = 0;
            operand = '';
            displayValue.value = '';
        }
    }
})


