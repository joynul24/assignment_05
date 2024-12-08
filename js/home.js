// Events in the Donation Button
document.getElementById('btn-donation').addEventListener('click', function () {
    document.getElementById('histroy-secton').classList.add('hidden');
    document.getElementById('donation-section').classList.remove('hidden');
    document.getElementById('btn-history').classList.remove('bg-[#B4F461]');
    document.getElementById('btn-donation').classList.add('bg-[#B4F461]');
});


// Events in the history Button
document.getElementById('btn-history').addEventListener('click', function () {
    document.getElementById('donation-section').classList.add('hidden');
    document.getElementById('btn-donation').classList.remove('bg-[#B4F461]');
    document.getElementById('btn-history').classList.add('bg-[#B4F461]');
    document.getElementById('histroy-secton').classList.remove('hidden');
    document.getElementById('footer').classList.add('hidden');
});




// first card events
document.getElementById('btn-donate-1').addEventListener('click', function () {

    const inputAmount = getInputFieldValueById('input-card-1');

    // validation
    if (isNaN(inputAmount)) {
        alert("Invalid donation Amount!");
        return;
    } else if (inputAmount < 0) {
        alert("Please type positive number!")
        return;
    }

    const cardBalance = getTextFieldValueById('balance-card-1');

    const availableBalance = getTextFieldValueById('available-balance');
    if (availableBalance <= 0 || inputAmount > availableBalance) {
        alert("Sorry available balance is already over!")
        return;
    }

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
    p.classList.add('font-semibold', 'opacity-70', 'mt-4');
    // p.innerText = getMonth() + 1 + 'Date: ' + new Date().toLocaleString("en-US", { timeZone: "Asia/Dhaka" });
    p.innerText = BangladeshTimeZone();
    newHistoryCard.appendChild(h4);
    newHistoryCard.appendChild(p);
    historySection.appendChild(newHistoryCard);

    document.getElementById('input-card-1').value = '';
    document.getElementById('histroy-secton').classList.add('hidden');
    document.getElementById('modal-section').classList.remove('hidden')
});




// Second card events
document.getElementById('btn-donate-2').addEventListener('click', function () {

    const inputAmount = getInputFieldValueById('input-card-2');

    // validation
    if (isNaN(inputAmount)) {
        alert("Invalid donation Amount!");
        return;
    } else if (inputAmount < 0) {
        alert("Please type positive number!")
        return;
    }

    const cardBalance = getTextFieldValueById('balance-card-2');

    const availableBalance = getTextFieldValueById('available-balance');
    if (availableBalance <= 0 || inputAmount > availableBalance) {
        alert("Sorry available balance is already over!")
        return;
    }

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
    p.classList.add('font-semibold', 'opacity-70', 'mt-4');
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
        alert("Invalid donation Amount!");
        return;
    } else if (inputAmount < 0) {
        alert("Please type positive number!")
        return;
    }

    const cardBalance = getTextFieldValueById('balance-card-3');

    const availableBalance = getTextFieldValueById('available-balance');
    if (availableBalance <= 0 || inputAmount > availableBalance) {
        alert("Sorry available balance is already over!")
        return;
    }

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
    p.classList.add('font-semibold', 'opacity-70', 'mt-4');
    p.innerText = BangladeshTimeZone();
    newHistoryCard.appendChild(h4);
    newHistoryCard.appendChild(p);
    historySection.appendChild(newHistoryCard);

    document.getElementById('input-card-3').value = '';
    document.getElementById('histroy-secton').classList.add('hidden');
});



// onclick="my_modal_5.showModal()"



document.getElementById('btn-blog').addEventListener('click', function () {
    window.location.href = './blog.html';
});