function add(a,b) {
    return a + b;
}

function subtract(a,b) {
    return a - b;
}

function multiply(a,b) {
    return a * b;
}

function divide(a,b) {
    return a / b;
}

function operate(operator,a,b) {
    switch (operator) {
        case '+' :
            return add(a,b);
            break;
        case '-' :
            return subtract(a,b);
            break;
        case '*' :
            return multiply(a,b);
            break;
        case '/' :
            return divide(a,b);
            break;   

    }
}

console.log(operate('+',3,2));
console.log(operate('-',3,2));
console.log(operate('*',3,2));
console.log(operate('/',3,2));

let x = "";
let y = "";
let currentOperator;
let newOperator;

function setOperators(operator) {
    if (currentOperator === undefined) {
        currentOperator = operator;
    }
    else if (newOperator === undefined) {
        newOperator = operator;
    }
    else {
        currentOperator = newOperator;
        newOperator = operator;
    }

}

function operatorListener() {
    console.log(this.id);
    x = y;
    y= "";
    switch (this.id) {
        case 'addButton' :
            setOperators('+');            
            break;
        case 'subtractButton' :
            setOperators('-');
            break;
        case 'multButton' :
            setOperators('*');
            break;
        case 'divideButton' :
            setOperators('/');
            break;
        case 'equalsButton' :
            setOperators('=');
            break;   

    }
    console.log(currentOperator); 
    console.log(newOperator);   
}

function numberListener() {
    let num = this.id.charAt(6);
    y = y.concat(num);
    console.log(y);
}

const numberButtons = document.querySelectorAll('.numberButton');
numberButtons.forEach((button) => {
    button.addEventListener('click', numberListener);
});

const operatorButtons = document.querySelectorAll('.operatorButton');
operatorButtons.forEach((button) => {
    button.addEventListener('click', operatorListener);
});