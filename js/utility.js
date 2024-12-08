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


// time common function
function BangladeshTimeZone() {
    const now = new Date();
    const bangladeshTime = now.toLocaleString("en-US", {
        timeZone: "Asia/Dhaka",
    });
    const bangladeshDate = new Date(bangladeshTime);
    return `Date : ${bangladeshDate.toString()}`;
};



const allDonateBtns = document.getElementsByClassName('donateBtns');
const modal = document.getElementById('modal-btn');

for(const btn of allDonateBtns) {
    btn.addEventListener('click', function(){
        modal.click()
        document.getElementById('modal-section').classList.remove('hidden');
    })
}

const close = document.getElementById('close');
close.addEventListener('click', function(){
    document.getElementById('modal-section').classList.add('hidden');
})