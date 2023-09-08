// function Displayname{
//     var name = document.getElementById("textname").value;
//     alert("Name: " + value);
// }

//function use for calculation
function addNumbers(){
    var num1,num2,result;
    num1 = Number (document.getElementById("txtNum1").value);
    num2 = Number(document.getElementById("txtNum2").value);
    result = num1 + num2;
    alert("SUM: " + result);
}
function subtractNumbers(){
    var num1,num2,result;
    num1 = Number (document.getElementById("txtNum1").value);
    num2 = Number(document.getElementById("txtNum2").value);
    result = num1 - num2;
    alert("DIFFERENCE: " + result);
}
function multiplyNumbers(){
    var num1,num2,result;
    num1 = Number (document.getElementById("txtNum1").value);
    num2 = Number(document.getElementById("txtNum2").value);
    result = num1 * num2;
    alert("PRODUCT: " + result);
}
function divideNumbers(){
    var num1,num2,result;
    num1 = Number (document.getElementById("txtNum1").value);
    num2 = Number (document.getElementById("txtNum2").value);
    result = num1 / num2;
    alert("QUOTIENT: " + result);
}

function clearTextboxes(){
  
   document.getElementById("txtNum1").value="";
    document.getElementById("txtNum2").value="";
      
}