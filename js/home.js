// first card events
document.getElementById('btn-donate-1').addEventListener('click', function () {

    const inputAmount = getInputFieldValueById('input-card-1');
    
    // validation
    if (isNaN(inputAmount)) {
        alert("Please input number type!");
        return;
    } else if (inputAmount < 0) {
        alert("Please type positive number!")
        return;
    }

    const cardBalance = getTextFieldValueById('balance-card-1');

    const availableBalance = getTextFieldValueById('available-balance');

    const updateCardBalance = inputAmount + cardBalance;
    const updateAvailableBalance = availableBalance - inputAmount;

    document.getElementById('available-balance').innerText = updateAvailableBalance;

    document.getElementById('balance-card-1').innerText = updateCardBalance;
    document.getElementById('input-card-1').value = '';
});




// first card events
// document.getElementById('')