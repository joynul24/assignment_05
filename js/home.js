const allDonateBtn = document.getElementsByClassName('btn-donate');

for (const singleDonateBtn of allDonateBtn) {
    singleDonateBtn.addEventListener('click', function () {
        console.log("hi i am donate btn");
    });
};