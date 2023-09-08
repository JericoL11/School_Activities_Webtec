var Num1 = document.getElementById("txtNum1");
var Num2 = document.getElementById("txtNum2");

function addNumbers() {
    res = parseInt(Num1.value) + parseInt(Num2.value);
    alert ("Sum = " + res);
}

function subtractNumbers() {
    res = parseInt(Num1.value) - parseInt(Num2.value);
    alert ("Difference = " + res);
}

function multiplyNumbers() {
    res = parseInt(Num1.value) * parseInt(Num2.value);
    alert ("Product = " + res);
}

function divideNumbers() {
    res = parseInt(Num1.value) / parseInt(Num2.value);
    alert ("Quotient = " + res);
}

function clearTextboxes() {
    Num1.value = "";
    Num2.value = "";
    alert("ALL CLEAR");
}