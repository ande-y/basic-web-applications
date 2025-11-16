const btn0 = document.getElementById("zero");
const btn1 = document.getElementById("one");
const btn2 = document.getElementById("two");
const btn3 = document.getElementById("three");
const btn4 = document.getElementById("four");
const btn5 = document.getElementById("five");
const btn6 = document.getElementById("six");
const btn7 = document.getElementById("seven");
const btn8 = document.getElementById("eight");
const btn9 = document.getElementById("nine");

const reset = document.getElementById("reset");
const btnAdd = document.getElementById("add");
const btnSub = document.getElementById("sub");
const btnMult = document.getElementById("mult");
const btnDiv = document.getElementById("div");
const btnEql = document.getElementById("equal");

const display = document.getElementById("numberDisplay");

let num1Set = false;
let num2Set = false;
let num1 = "0";
let num2 = "0";
let operation = "add";

console.log("display", display, "btn9", btn9);

function concatNumber(n){
    if (num1 == "0" && n == "0") return;
    if (num1 == "0") num1 = n;
    else num1 += n;
    
    console.log(typeof num1);
    console.log(`num1 = ${num1}`);
    display.textContent = num1;
}

function changeOperation(op){
    operation = op;
}

function clear(){
    if (!num1Set){
        num2Set = false;
        num1 = "0";
        num2 = "0";
        operation = "add";
    }
    display.textContent = num1;
}

function calculate(){
    if (operation = 1) num1 += num2;
    else if (operation = 2) num1 -= num2;
    else if (operation = 3) num1 *= num2;
    else num1 /= num2;
    display.textContent = num1;
}

// btn0.onclick = concatNumber("0");
// btn1.onclick = concatNumber("1");
// btn2.onclick = concatNumber("2");
// btn3.onclick = concatNumber("3");
// btn4.onclick = concatNumber("4");
// btn5.onclick = concatNumber("5");
// btn6.onclick = concatNumber("6");
// btn7.onclick = concatNumber("7");
// btn8.onclick = concatNumber("8");
// btn9.onclick = concatNumber("9");

// reset.onclick = clear;
// btnAdd.onclick = changeOperation(1);
// btnSub.onclick = changeOperation(2);
// btnMult.onclick = changeOperation(3);
// btnDiv.onclick = changeOperation(4);
// btnEql.onclick = calculate;