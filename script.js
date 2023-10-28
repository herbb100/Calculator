function add(num1,num2){
    return num1 + num2;
};

function subtract(num1, num2){
    return num1 - num2;
};

function multiply (num1, num2){
    return num1 * num2;
};

function divide(num1, num2){
    return num1 / num2;
};

let firstNum;
let operator;
let secondNum;

function operate(operator, firstNum, secondNum){
    if(operator === "+"){
        console.log(add(firstNum, secondNum));
    }else if( operator === "-"){
        console.log(subtract(firstNum, secondNum));

    }else if( operator === "*"){
        console.log(multiply(firstNum, secondNum));

    }else if( operator === "/"){
        console.log(divide(firstNum, secondNum));
    }
}