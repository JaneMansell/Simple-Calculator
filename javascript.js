function add(a,b) {
    return parseFloat(a) + parseFloat(b);
}

function subtract(a,b) {
    return a - b;
}

function multiply(a,b) {
    return a * b;
}

function divide(a,b) {
    if (b === '0'){
        const display = document.querySelector('#display');
        display.textContent = 'ERROR';
        x = "";
        y = "";
        currentOperator = undefined;
        newOperator = undefined; 
    }
    else {
        return a / b;
    }
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

function ACListener() {
    const display = document.querySelector('#display');
    display.textContent = "hello";
    x = "";
    y = "";
    currentOperator = undefined;
    newOperator = undefined;
    numberButtons.forEach((button) => {
        button.addEventListener('click', numberListener);
    });

}

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

    /* Turn number listener back on as it may have been
    removed if input was too long or equals button was pressed*/
    numberButtons.forEach((button) => {
        button.addEventListener('click', numberListener);
    });
    /* Stop two in a row operators unless = button 
        in which case stop number input*/
    if (this.id !== "equalsButton") {
        operatorButtons.forEach((button) => {
            button.removeEventListener('click', operatorListener);
        });
        /*Allow negative button for negative numbers*/
        const subtractButton = document.querySelector('#subtractButton');
        subtractButton.addEventListener('click', operatorListener);
    }
    
    else {
        numberButtons.forEach((button) => {
            button.removeEventListener('click', numberListener);
        });
    }

    switch (this.id) {
        case 'addButton' :
            setOperators('+');            
            break;
        case 'subtractButton' :
            if (y === ""){
                y = y.concat('-');
                const display = document.querySelector('#display');
                display.textContent = `${y}`;  
                console.log(y+56);   
            }
            else {
                setOperators('-');
            }
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

    if (y === '-') {
        console.log(y);
    }

    else if (x===""){
        x = y;
        y= "";
    }
    else {
        let result = operate(currentOperator,x,y);
        console.log(`result is ${result}`);
        const display = document.querySelector('#display');
        if (result.toString().length > 12) {
            result = result.toFixed(4);
            
        }
        if (result.toString().length > 12) {
            display.textContent = `ERROR`;
            x = "";
            y = "";
            currentOperator = undefined;
            newOperator = undefined; 
        }
        else {
            console.log(`new result is ${result}`);
            display.textContent = `${result}`;
            if (newOperator !== '=') { 
                x = result;
                y= "";
            }
            else {
                x="";
                y=result;
                currentOperator = undefined;
                newOperator = undefined;

            }
        }
    }
    console.log(currentOperator); 
    console.log(newOperator);

}

function numberListener() {
    let num = this.id.charAt(6);
    console.log(y)
    y = y.concat(num);
    const display = document.querySelector('#display');
    display.textContent = `${y}`;  
    console.log(y);
    /* Stop too long input */
    if (y.length > 9) {
        numberButtons.forEach((button) => {
            button.removeEventListener('click', numberListener);
        });
    }
    /* Ensure operator listener on */
    operatorButtons.forEach((button) => {
        button.addEventListener('click', operatorListener);
    });
}

const numberButtons = document.querySelectorAll('.numberButton');
numberButtons.forEach((button) => {
    button.addEventListener('click', numberListener);
});

const operatorButtons = document.querySelectorAll('.operatorButton');
operatorButtons.forEach((button) => {
    button.addEventListener('click', operatorListener);
});

const ACButton = document.querySelector('#AC');
ACButton.addEventListener('click', ACListener);
