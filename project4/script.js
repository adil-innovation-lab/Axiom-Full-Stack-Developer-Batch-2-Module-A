// Get DOM Elements
const baseCurrency = document.getElementById('base-currency');
const targetCurrency = document.getElementById('target-currency');
const baseAmount = document.getElementById('base-amount');
const targetAmount = document.getElementById('target-amount');
const exchangeRate = document.getElementById('xrate');
const flipBtn = document.getElementById('flip');

// Function to fetch exchange rates from API and update DOM
function calculate() {
    // Get the currency codes for base and target currencies
    const baseCode = baseCurrency.value;
    const targetCode = targetCurrency.value;
    // Execute Fetch API
    fetch(`https://v6.exchangerate-api.com/v6/a43d02c063c1303f1c06c071/latest/${baseCode}`)
        .then( res => res.json() )
        .then( data => {
            // Get the exchange rate for base currency to target currency
            const rate = data.conversion_rates[targetCode];
            // Update DOM with the exchange rate
            exchangeRate.innerText = `1 ${baseCode} = ${rate} ${targetCode}`;
            // Calculate amount of target currency based on exchange rate
            targetAmount.value = (baseAmount.value * rate).toFixed(2);
        })
};

// Event Listeners
// 1. Listen for change to base currency select box
baseCurrency.addEventListener('change', calculate);

// 2. Listen for input in base amount input field
baseAmount.addEventListener('input', calculate);

// 3. Listen for change to target currency select box
targetCurrency.addEventListener('change', calculate);

// 4. Listen for input in target amount input field
targetAmount.addEventListener('input', calculate);

// 5. Listen for click on the flip button
flipBtn.addEventListener('click', () => {
    // Save the value of the base currency in a temp variable
    const tempCurrency = baseCurrency.value;
    // Reassign base currency using target currency
    baseCurrency.value = targetCurrency.value;
    // Reassign target currency using the original base currency
    targetCurrency.value = tempCurrency;
    // Recalculate exchange rate and update DOM
    calculate();    
})

// Initial calculation
calculate();
