class Calculator{
    constructor(previousOperand, currentOperand){
        this.previousOperand = previousOperand
        this.currentOperand = currentOperand
    }
    clear() {

    }
    delete() {

    }

    appendNumber() {

    }
    chooseOperation() {

    }
    compute() {

    }
    getDisplayNumber() {

    }
    updateDisplay() {

    }
}






const numberButtons = document.querySelectorAll('[data-number]');
const operationsButtons =document.querySelectorAll('[data-operation]');
const equalsButton = document.querySelector('[data-equals]');
const deleteButton = document.querySelector('[data-delete]');
const allClearButton = document.querySelector('[data-all-clear]')
const previousOperandTextElement = document.querySelector('[data-previous-operand ]')
const currentOperandTextElement = document.querySelector('[data-current-operand ]') 

const calculator = new Calculator(previousOperandTextElement,currentOperandTextElement)

numberButtons.forEach((button) => {
    button.addEventListener('click',function () {
        console.log(button.innerHTML)
    })
})