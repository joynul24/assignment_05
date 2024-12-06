// Number from string function

function getSringByNumber(id) {
    const elementId = document.getElementById(id).innerText;
    const element = parseFloat(elementId);
    return element;
};


// Number from input string value converted

function getInputValueByNumber(id) {
    const elementId = document.getElementById(id).value;
    const element = parseFloat(elementId);
    return element;
};