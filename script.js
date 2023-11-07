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

let firstNum ;
let operator;
let secondNum;
let result;

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

const plus = document.querySelector("button.num.add");
const minus = document.querySelector("button.num.sub");
const product = document.querySelector("button.num.times");
const quotient =document.querySelector("button.num.divide");
const equal = document.querySelector("button.num.equal");
const clear = document.querySelector("button.topLevel.clear");
const erase = document.querySelector("button.topLevel.delete");

clear.addEventListener("click", ()=>{
    firstNum = "";
    secondNum = "";
    operator = "";
    result = "";
    screenResult.textContent = "";
    screenTop.textContent = "";


})

function equalFunc(){
    if (operator === "+") {
        result = add(+firstNum,+secondNum);
        console.log(result)
        screenResult.textContent = result.toString();
        screenTop.textContent = result.toString();
        firstNum = result;
    }   
    else if (operator === "-"){
        result = subtract(+firstNum, +secondNum);
        console.log(result)
        screenResult.textContent = result.toString();
        screenTop.textContent = result.toString();
        firstNum = result;
        
    }   
    else if (operator === "*"){
        result = multiply(+firstNum,+secondNum);
        console.log(result)
        screenResult.textContent = result.toString();
        screenTop.textContent = result.toString();
        firstNum = result;
        
    }  
    else if (operator === "/"){
        result = divide(+firstNum,+secondNum);
        console.log(result)
        screenResult.textContent = result.toString();
        screenTop.textContent = result.toString();
        firstNum = result;
        
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



zero.addEventListener("click", ()=> {
    if(firstNum){
        secondNum = zero.textContent;
        screenResult.textContent = secondNum;
        screenTop.textContent = `${firstNum} ${operator} ${secondNum}`
        
    }else{
        firstNum = zero.textContent;
        screenResult.textContent = firstNum;       
    }
    console.log(screenResult.textContent); 
       
});

one.addEventListener("click", ()=> {
    if(firstNum){
        secondNum = one.textContent;
        screenResult.textContent = secondNum;
        screenTop.textContent = `${firstNum} ${operator} ${secondNum}`
        
    }else{
        firstNum = one.textContent;
        screenResult.textContent = firstNum;       
    }
    console.log(screenResult.textContent); 
});

two.addEventListener("click", ()=> {
    if(firstNum){
        secondNum = two.textContent;
        screenResult.textContent = secondNum;
        screenTop.textContent = `${firstNum} ${operator} ${secondNum}`
        
    }else{
        firstNum = two.textContent;
        screenResult.textContent = firstNum;       
    }
    console.log(screenResult.textContent); 
});

three.addEventListener("click", ()=> {
    if(firstNum){
        secondNum = three.textContent;
        screenResult.textContent = secondNum;
        screenTop.textContent = `${firstNum} ${operator} ${secondNum}`
        
    }else{
        firstNum = three.textContent;
        screenResult.textContent = firstNum;       
    }
    console.log(screenResult.textContent); 
});

four.addEventListener("click", ()=> {
    if(firstNum){
        secondNum = four.textContent;
        screenResult.textContent = secondNum;
        screenTop.textContent = `${firstNum} ${operator} ${secondNum}`
        
    }else{
        firstNum = four.textContent;
        screenResult.textContent = firstNum;       
    }
    console.log(screenResult.textContent); 
});

five.addEventListener("click", ()=> {
    if(firstNum){
        secondNum = five.textContent;
        screenResult.textContent = secondNum;
        screenTop.textContent = `${firstNum} ${operator} ${secondNum}`
        
    }else{
        firstNum = five.textContent;
        screenResult.textContent = firstNum;       
    }
    console.log(screenResult.textContent); 
})

six.addEventListener("click", ()=> {
    if(firstNum){
        secondNum = six.textContent;
        screenResult.textContent = secondNum;
        screenTop.textContent = `${firstNum} ${operator} ${secondNum}`
        
    }else{
        firstNum = six.textContent;
        screenResult.textContent = firstNum;       
    }
    console.log(screenResult.textContent); 
});

seven.addEventListener("click", ()=> {
    if(firstNum){
        secondNum = seven.textContent;
        screenResult.textContent = secondNum;
        screenTop.textContent = `${firstNum} ${operator} ${secondNum}`
        
    }else{
        firstNum = seven.textContent;
        screenResult.textContent = firstNum;       
    }
    console.log(screenResult.textContent); 
});

eight.addEventListener("click", ()=> {
    if(firstNum){
        secondNum = eight.textContent;
        screenResult.textContent = secondNum;
        screenTop.textContent = `${firstNum} ${operator} ${secondNum}`
        
    }else{
        firstNum = eight.textContent;
        screenResult.textContent = firstNum;       
    }
    console.log(screenResult.textContent); 
});

nine.addEventListener("click", ()=> {
    if(firstNum){
        secondNum = nine.textContent;
        screenResult.textContent = secondNum;
        screenTop.textContent = `${firstNum} ${operator} ${secondNum}`
        
    }else{
        firstNum = nine.textContent;
        screenResult.textContent = firstNum;       
    }
    console.log(screenResult.textContent); 
});