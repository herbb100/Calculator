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

let firstNum = [] ;
let operator;
let secondNum = [];
let result = [];

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

let screenResult = document.querySelector("div.screenResult");
let screenTop = document.querySelector("div.screenTop");

const zero = document.querySelector("button.num.zero");
const one = document.querySelector("button.num.one");
const two = document.querySelector("button.num.two");
const three = document.querySelector("button.num.three");
const four = document.querySelector("button.num.four");
const five = document.querySelector("button.num.five");
const six = document.querySelector("button.num.six");
const seven = document.querySelector("button.num.seven");
const eight = document.querySelector("button.num.eight");
const nine = document.querySelector("button.num.nine");
const dot = document.querySelector("button.num.dot");

const plus = document.querySelector("button.num.add");
const minus = document.querySelector("button.num.sub");
const product = document.querySelector("button.num.times");
const quotient =document.querySelector("button.num.divide");
const equal = document.querySelector("button.num.equal");
const clear = document.querySelector("button.topLevel.clear");
const erase = document.querySelector("button.topLevel.delete");

erase.addEventListener("click", ()=> {
    if(operator){
        secondNum.pop(erase.textContent);
        screenResult.textContent = secondNum.join("").toString();

    }else{
        firstNum.pop(erase.textContent);
        screenResult.textContent = firstNum.join("").toString();
    }
})

clear.addEventListener("click", ()=>{
    firstNum = [];
    secondNum = [];
    operator = "";
    result = [];
    screenResult.textContent = "";
    screenTop.textContent = "";


})

function equalFunc(){
    if (operator === "+") {
        result.push(add(+firstNum.join("").toString(),+secondNum.join("").toString()));
        console.log(result)
        screenResult.textContent = (+result.toString()).toFixed(2);
        screenTop.textContent = (+result.toString()).toFixed(2);
        firstNum = [];
        secondNum = [];
        firstNum.push((+result.toString()).toFixed(2));
        result = [];
    }   
    else if (operator === "-"){
        result.push(subtract(+firstNum.join("").toString(), +secondNum.join("").toString()));
        console.log(result)
        screenResult.textContent = (+result.toString()).toFixed(2);
        screenTop.textContent = (+result.toString()).toFixed(2);
        firstNum = [];
        secondNum = [];
        firstNum.push((+result.toString()).toFixed(2));
        result = [];

        
    }   
    else if (operator === "*"){
        result.push(multiply(+firstNum.join("").toString(), +secondNum.join("").toString()));
        console.log(result)
        screenResult.textContent = (+result.toString()).toFixed(2);
        screenTop.textContent = (+result.toString()).toFixed(2);
        firstNum = [];
        secondNum = [];
        firstNum.push((+result.toString()).toFixed(2));
        result = [];
        
        
    }  
    else if (operator === "/"){
        result.push(divide(+firstNum.join("").toString(), +secondNum.join("").toString()));
        console.log(result)
        screenResult.textContent = (+result.toString()).toFixed(2);
        screenTop.textContent = (+result.toString()).toFixed(2);
        firstNum = [];
        secondNum = [];
        firstNum.push((+result.toString()).toFixed(2));
        result = [];
        
    }   
};

equal.addEventListener("click", equalFunc);

plus.addEventListener("click", ()=> {

    equalFunc();

    operator = plus.textContent;
    screenResult.textContent = operator;
    
    console.log(screenResult.textContent);
});

minus.addEventListener("click", ()=> {

    equalFunc();

    operator = minus.textContent;
    screenResult.textContent = operator;
    
    console.log(screenResult.textContent);
});

product.addEventListener("click", ()=> {

    equalFunc();

    operator = product.textContent;
    screenResult.textContent = operator;
    
    console.log(screenResult.textContent);
});

quotient.addEventListener("click", ()=> {

    equalFunc();

    operator = quotient.textContent;
    screenResult.textContent = operator;
    
    console.log(screenResult.textContent);
});

dot.addEventListener("click", ()=> {
    if(operator){
        if(!secondNum.includes(".")){
            secondNum.push(dot.textContent);
            screenResult.textContent = secondNum.join("").toString();
        }
        
    }else{
        if(!firstNum.includes(".")){
            firstNum.push(dot.textContent);
            screenResult.textContent = firstNum.join("").toString();
        }
    }
})

zero.addEventListener("click", ()=> {
    if(operator){
        secondNum.push(zero.textContent);
        screenResult.textContent = secondNum.join("").toString();

    }else{
        firstNum.push(zero.textContent);
        screenResult.textContent = firstNum.join("").toString();
    }
});

one.addEventListener("click", ()=> {
    if(operator){
        secondNum.push(one.textContent);
        screenResult.textContent = secondNum.join("").toString();

    }else{
        firstNum.push(one.textContent);
        screenResult.textContent = firstNum.join("").toString();
    }
});

two.addEventListener("click", ()=> {
    if(operator){
        secondNum.push(two.textContent);
        screenResult.textContent = secondNum.join("").toString();

    }else{
        firstNum.push(two.textContent);
        screenResult.textContent = firstNum.join("").toString();
    }
 
});

three.addEventListener("click", ()=> {
    if(operator){
        secondNum.push(three.textContent);
        screenResult.textContent = secondNum.join("").toString();

    }else{
        firstNum.push(three.textContent);
        screenResult.textContent = firstNum.join("").toString();
    }

});

four.addEventListener("click", ()=> {
    if(operator){
        secondNum.push(four.textContent);
        screenResult.textContent = secondNum.join("").toString();

    }else{
        firstNum.push(four.textContent);
        screenResult.textContent = firstNum.join("").toString();
    }

});

five.addEventListener("click", ()=> {
    if(operator){
        secondNum.push(five.textContent);
        screenResult.textContent = secondNum.join("").toString();

    }else{
        firstNum.push(five.textContent);
        screenResult.textContent = firstNum.join("").toString();
    }

})

six.addEventListener("click", ()=> {
    if(operator){
        secondNum.push(six.textContent);
        screenResult.textContent = secondNum.join("").toString();

    }else{
        firstNum.push(six.textContent);
        screenResult.textContent = firstNum.join("").toString();
    }

});

seven.addEventListener("click", ()=> {
    if(operator){
        secondNum.push(seven.textContent);
        screenResult.textContent = secondNum.join("").toString();

    }else{
        firstNum.push(seven.textContent);
        screenResult.textContent = firstNum.join("").toString();
    }

});

eight.addEventListener("click", ()=> {
    if(operator){
        secondNum.push(eight.textContent);
        screenResult.textContent = secondNum.join("").toString();

    }else{
        firstNum.push(eight.textContent);
        screenResult.textContent = firstNum.join("").toString();
    }

});

nine.addEventListener("click", ()=> {
    if(operator){
        secondNum.push(nine.textContent);
        screenResult.textContent = secondNum.join("").toString();

    }else{
        firstNum.push(nine.textContent);
        screenResult.textContent = firstNum.join("").toString();
    }

});