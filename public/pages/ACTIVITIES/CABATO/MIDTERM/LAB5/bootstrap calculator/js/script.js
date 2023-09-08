function addNumbers()
{
    num1 = parseInt(document.getElementById('txtNum1').value);
    num2 = parseInt(document.getElementById('txtNum2').value);
    sum = num1 + num2;
    alert("Result: " + sum);
}
function subtractNumbers()
{
    num1 = parseInt(document.getElementById('txtNum1').value);
    num2 = parseInt(document.getElementById('txtNum2').value);
    sum = num1 - num2;
    alert("Result: " + sum);
}
function multiplyNumbers()
{
    num1 = parseInt(document.getElementById('txtNum1').value);
    num2 = parseInt(document.getElementById('txtNum2').value);
    sum = num1 * num2;
    alert("Result: " + sum);
}
function divideNumbers()
{
    num1 = parseInt(document.getElementById('txtNum1').value);
    num2 = parseInt(document.getElementById('txtNum2').value);
    sum = num1 / num2;
    alert("Result: " + sum);
}
function clearTextboxes()
{
    num1 = parseInt(document.getElementById('txtNum1').value = null);
    num2 = parseInt(document.getElementById('txtNum2').value = null);
}