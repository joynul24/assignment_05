// Number from string function

function getTextFieldValueById(id) {
    const elementId = document.getElementById(id).innerText;
    const element = parseFloat(elementId);
    return element;
};


// Number from input string value converted

function getInputFieldValueById(id) {
    const elementId = document.getElementById(id).value;
    const elementValue = parseFloat(elementId);
    return elementValue;
};