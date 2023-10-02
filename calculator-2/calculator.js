let numField = document.getElementById("numfield");
let resultText = document.getElementById("result");

// tulis angka/operator ke text field
function addNum(value) {
    if (numField.value === "0" && value !== ".") {
        numField.value = value;
    } else {
        numField.value += value;
    }
}

// hitung
function calculateResult() {
    try {
        let result = eval(numField.value);
        resultText.textContent = result
    } catch (error) {
        resultText.textContent = "Error";
    }
}

// hapus field
function clearField() {
    numField.value = "";
    resultText.textContent = "";
}