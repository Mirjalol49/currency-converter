//! GET ELEMENTS
const elCurrencyForm = document.querySelector('.currency-form');
const elCurrencyFormInput = document.querySelector('.currency-input');
const elCurrencyFormSelect = document.querySelector('.currency-select');
const elCurrencyFormResult = document.querySelector('.currency-result');
//! CURRENCY
const USD_to_UZS = 11342;
const RUBL_to_UZS = 160;
const EURO_to_UZS = 12212;
const FUNT_to_UZS = 13651;
const DINOR_to_UZS = 37560;

elCurrencyForm.addEventListener("submit", function(evt) {
    evt.preventDefault();

    if (elCurrencyFormSelect.value === "USD") {
        elCurrencyFormResult.textContent = "Natija : " + (elCurrencyFormInput.value * USD_to_UZS).toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ") + " so'm";
    } else if (elCurrencyFormSelect.value === "RUBL") {
        elCurrencyFormResult.textContent = "Natija : " + (elCurrencyFormInput.value * RUBL_to_UZS).toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ") + " so'm";
    } else if (elCurrencyFormSelect.value === "EURO") {
        elCurrencyFormResult.textContent = "Natija : " + (elCurrencyFormInput.value * EURO_to_UZS).toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ") + " so'm";
    } else if (elCurrencyFormSelect.value === "FUNT") {
        elCurrencyFormResult.textContent = "Natija : " + (elCurrencyFormInput.value * FUNT_to_UZS).toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ") + " so'm";
    } else if (elCurrencyFormSelect.value === "DINOR") {
        elCurrencyFormResult.textContent = "Natija : " + (elCurrencyFormInput.value * DINOR_to_UZS).toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ") + " so'm";
    } else {
        elCurrencyFormResult.innerHTML = "<strong class='text-danger'>To'g'ri  ma'lumot  kiriting😊</strong>";
    }
})