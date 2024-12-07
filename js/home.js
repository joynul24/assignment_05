// first card events
document.getElementById('btn-donate-1').addEventListener('click', function () {
    const inputAmount = getInputFieldValueById('input-card-1');
    
    const cardAmount = getTextFieldValueById('balance-card-1');
    console.log(cardAmount);
});