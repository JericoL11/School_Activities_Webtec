function ADD() {
    var num1 = Number(document.getElementById("num1").value); 
    var num2 = Number(document.getElementById("num2").value);
    var add = num1 + num2;
    alert("SUM : " + add); 
}

function MIN() {
    var num1 = Number(document.getElementById("num1").value); 
    var num2 = Number(document.getElementById("num2").value);
    var min = num1 - num2;
    alert("SUBTRACTION : " + min);
}

function PROD() {
    var num1 = Number(document.getElementById("num1").value); 
    var num2 = Number(document.getElementById("num2").value);
    var prod = num1 * num2;
    alert("PRODUCT : " + prod); 
}

function DIV() {
    var num1 = Number(document.getElementById("num1").value); 
    var num2 = Number(document.getElementById("num2").value);
    var div = num1 /  num2;
    alert("DIVISION : " + div); 
}

function CLEAR() {
    var num1 = Number(document.getElementById("num1").value=""); 
    var num2 = Number(document.getElementById("num2").value="");
}