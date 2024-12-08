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



function BangladeshTimeZone() {
    const now = new Date();
    const bangladeshTime = now.toLocaleString("en-US", {
        timeZone: "Asia/Dhaka",
    });
    const bangladeshDate = new Date(bangladeshTime);
    return `Date : ${bangladeshDate.toString()}`;
};

// Date : Tue Sep 17 2024 08:39:11 GMT +0600 (Bangladesh Standard Time)