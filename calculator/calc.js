const btnReset = document.getElementById("reset");
const display = document.getElementById("numberDisplay");

let step = 0;
let A = "0";
let B = "0";
let operation = null;

function concatNumber(n){
    if (step == 0){
        if (A == "0" && n == "0") return;
        if (A == "0") A = n;
        else A += n;
        display.textContent = A;
    }
    else if(step == 1){
        if (B == "0" && n == "0") return;
        if (B == "0") B = n;
        else B += n;
        display.textContent = B;
    }
    else {
        A = n;
        step = 0;
        display.textContent = A;
    }

    btnReset.textContent = "C";
    console.log(A, " ", B);
}

function changeOperation(op){
    if (step == 0) step++;
    else if (step == 1){
        calculate();
    }
    else {
        calculate();
        step--;
    }
    operation = op;
}

function clearDisplay(){
    if (step == 0){
        A = "0";
        display.textContent = A;
    }
    else if (step == 1 && B == "0"){
        step--;
        A = 0;
        operation = null;
        display.textContent = A;
    }
    else if (step == 1){
        B = "0";
        display.textContent = B;
    }
    else {
        step = 0;
        A = "0";
        B = "0";
        display.textContent = A;
    }
    btnReset.textContent = "AC";
}

function calculate(){
    let numA = Number(A);
    let numB = Number(B);

    if (operation == 1) numA += numB;
    else if (operation == 2) numA -= numB;
    else if (operation == 3) numA *= numB;
    else if (operation == 4) numA /= numB;
    else display.textContent = "<!> Error";

    A = numA.toString();
    B = "0";
    aComplete = false;

    display.textContent = A;
}
