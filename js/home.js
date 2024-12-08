// Events in the Donation Button




// Events in the history Button
document.getElementById('btn-history').addEventListener('click', function () {
    const allCardSection = document.getElementById('donation-section');
    allCardSection.classList.add('hidden');
    const donationBtn = document.getElementById('btn-donation');
    const historyBtn = document.getElementById('btn-history');
    donationBtn.classList.remove('bg-[#B4F461]');
    historyBtn.classList.add('bg-[#B4F461]');
    document.getElementById('histroy-secton').classList.remove('hidden');
});


// Events in the donation Button
document.getElementById('btn-donation').addEventListener('click', function () {
    console.log("i am donation btn");
});


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

    // add to transection history
    const historySection = document.getElementById('histroy-secton');
    const newHistoryCard = document.createElement('div');
    newHistoryCard.classList.add('border-2', 'border-gray-300', 'p-5', 'lg:p-8', 'rounded-md', 'lg:rounded-2xl', 'shadow-md');
    const cardTitle = document.getElementById('card-title-1').innerText;
    const h4 = document.createElement('h4');
    h4.classList.add('lg:text-xl', 'font-bold');
    h4.innerHTML = `
      ${inputAmount} Taka is Donated for ${cardTitle}
    `;
    const p = document.createElement('p');
    p.classList.add('lg:text-xl', 'font-semibold', 'opacity-70', 'mt-4');
    // p.innerText = getMonth() + 1 + 'Date: ' + new Date().toLocaleString("en-US", { timeZone: "Asia/Dhaka" });
    p.innerText = BangladeshTimeZone();
    newHistoryCard.appendChild(h4);
    newHistoryCard.appendChild(p);
    historySection.appendChild(newHistoryCard);

    document.getElementById('input-card-1').value = '';
    document.getElementById('histroy-secton').classList.add('hidden');
});




// Second card events
document.getElementById('btn-donate-2').addEventListener('click', function () {

    const inputAmount = getInputFieldValueById('input-card-2');

    // validation
    if (isNaN(inputAmount)) {
        alert("Please input number type!");
        return;
    } else if (inputAmount < 0) {
        alert("Please type positive number!")
        return;
    }

    const cardBalance = getTextFieldValueById('balance-card-2');

    const availableBalance = getTextFieldValueById('available-balance');

    const updateCardBalance = inputAmount + cardBalance;
    const updateAvailableBalance = availableBalance - inputAmount;

    document.getElementById('available-balance').innerText = updateAvailableBalance;

    document.getElementById('balance-card-2').innerText = updateCardBalance;

    // add to transection history
    const historySection = document.getElementById('histroy-secton');
    const newHistoryCard = document.createElement('div');
    newHistoryCard.classList.add('border-2', 'border-gray-300', 'p-5', 'lg:p-8', 'rounded-md', 'lg:rounded-2xl', 'shadow-md');
    const cardTitle = document.getElementById('card-title-2').innerText;
    const h4 = document.createElement('h4');
    h4.classList.add('lg:text-xl', 'font-bold');
    h4.innerHTML = `
      ${inputAmount} Taka is Donated for ${cardTitle}
    `;
    const p = document.createElement('p');
    p.classList.add('lg:text-xl', 'font-semibold', 'opacity-70', 'mt-4');
    p.innerText = BangladeshTimeZone();
    newHistoryCard.appendChild(h4);
    newHistoryCard.appendChild(p);
    historySection.appendChild(newHistoryCard);

    document.getElementById('input-card-2').value = '';
    document.getElementById('histroy-secton').classList.add('hidden');
});




// Third card events
document.getElementById('btn-donate-3').addEventListener('click', function () {

    const inputAmount = getInputFieldValueById('input-card-3');

    // validation
    if (isNaN(inputAmount)) {
        alert("Please input number type!");
        return;
    } else if (inputAmount < 0) {
        alert("Please type positive number!")
        return;
    }

    const cardBalance = getTextFieldValueById('balance-card-3');

    const availableBalance = getTextFieldValueById('available-balance');

    const updateCardBalance = inputAmount + cardBalance;
    const updateAvailableBalance = availableBalance - inputAmount;

    document.getElementById('available-balance').innerText = updateAvailableBalance;

    document.getElementById('balance-card-3').innerText = updateCardBalance;

    // add to transection history
    const historySection = document.getElementById('histroy-secton');
    const newHistoryCard = document.createElement('div');
    newHistoryCard.classList.add('border-2', 'border-gray-300', 'p-5', 'lg:p-8', 'rounded-md', 'lg:rounded-2xl', 'shadow-md');
    const cardTitle = document.getElementById('card-title-3').innerText;
    const h4 = document.createElement('h4');
    h4.classList.add('lg:text-xl', 'font-bold');
    h4.innerHTML = `
      ${inputAmount} Taka is Donated for ${cardTitle}
    `;
    const p = document.createElement('p');
    p.classList.add('lg:text-xl', 'font-semibold', 'opacity-70', 'mt-4');
    p.innerText = BangladeshTimeZone();
    newHistoryCard.appendChild(h4);
    newHistoryCard.appendChild(p);
    historySection.appendChild(newHistoryCard);

    document.getElementById('input-card-3').value = '';
    document.getElementById('histroy-secton').classList.add('hidden');
});