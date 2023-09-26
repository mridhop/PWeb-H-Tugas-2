// calculate() function
function calculate() {
    // mengambil html elements
    let num1 = parseInt(document.getElementById("num1").value);
    let num2 = parseInt(document.getElementById("num2").value);
    let operator = document.getElementById("operator");
    let result = document.getElementById("result");

    if (isNaN(num1) || isNaN(num2)) {
        alert("Please enter a number in both fields");
        result.innerHTML = "";
        return;
    }

    if (operator.value == "add") {
        result.innerHTML = num1 + num2;
    } else if (operator.value == "subtract") {
        result.innerHTML = num1 - num2;
    } else if (operator.value == "multiply") {
        result.innerHTML = num1 * num2;
    } else if (operator.value == "divide") {
        result.innerHTML = num1 / num2;
    }
}