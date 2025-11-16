const btnReset = document.getElementById("reset");
const display = document.getElementById("numberDisplay");

let A = "0";
let B = null;
let C = null;
let operation = null;

function debug(){
    let op;
    if (operation == null) op = null;
    else if (operation == 1) op = "+";
    else if (operation == 2) op = "-";
    else if (operation == 3) op = "*";
    else op = "/";

    console.log(A, op, B, "=", C);
}

function swapSign(){
    if (C != null){
        A = C.toString();
        C = null;
    }
    if (operation != null){
        if (B == null) B = "-0";
        else if (B.charAt(0) != "-") B = "-" + B;
        else B = B.slice(1);
        display.textContent = B;
    }
    else {
        if (A.charAt(0) != "-") A = "-" + A;
        else A = A.slice(1);
        display.textContent = A;
    }
    debug();
}

function addDecimal(){
    if (C != null){
        C = null;
        A = "0.";
    }
    else if (operation != null && (B == null || B.indexOf(".") == -1)){
        if (B == null) B = "0.";
        else B += ".";
        display.textContent = B;
    }
    else if (A.indexOf(".") == -1){
        A += ".";
        display.textContent = A;
    }
    btnReset.textContent = "C";
    debug();
}

function concatNumber(n){
    if (C != null) C = null;
    if (operation == null){
        if ((A == "0" || A == "-0") && n == "0") return;
        if (A == "0") A = n;
        else if (A == "-0") A = "-" + n;
        else A += n;
        display.textContent = A;
    }
    else {
        if ((B == "0" || B == "-0") && n == "0") return;
        if (B == "0" || B == null) B = n;
        else if (B == "-0") B = "-" + n;
        else B += n;
        display.textContent = B;
    }

    btnReset.textContent = "C";
    debug();    
}

function getAns(){
    if (B != null) calculate();
    debug();    
}

function operate(op){
    if (C != null){
        A = C.toString();
        C = null;
    }
    if (B == null) operation = op;
    else if (B != null){
        calculate();
        A = C.toString();
        C = null;
        operation = op;
    }
    debug();    
}

function clearDisplay(){
    if (C != null){
        C = null;
        display.textContent = A;
    }
    if (B == null || B == "0"){
        A = "0";
        B = null;
        operation = null;
        display.textContent = A;
    }
    else {
        B = "0";
        display.textContent = B;
    }

    btnReset.textContent = "AC";
    debug();    
}

function calculate(){
    let numA = Number(A);
    let numB = Number(B);

    if (operation == 1) numA += numB;
    else if (operation == 2) numA -= numB;
    else if (operation == 3) numA *= numB;
    else if (operation == 4) numA /= numB;
    else {
        display.textContent = "Error";
        return;
    }
    
    C = numA.toString();
    display.textContent = C;

    A = "0";
    B = null;
    operation = null;
}
