function computeTax() {
    // Get the taxable income from the input field
    var taxableIncome = document.getElementById('ti').value;

    // Ensure the input is a number and greater than 0
    taxableIncome = parseFloat(taxableIncome);
    if (isNaN(taxableIncome) || taxableIncome < 0) {
        document.getElementById('totaltax').value = '';
        return;
    }

    // Logic for calculating the tax based on income (example)
    let tax = 0;
    if (taxableIncome <= 50000) {
        tax = taxableIncome * 0.05; // 5% tax for income up to 50,000
    } else if (taxableIncome <= 100000) {
        tax = 50000 * 0.05 + (taxableIncome - 50000) * 0.1; // 10% tax for income between 50,001 and 100,000
    } else {
        tax = 50000 * 0.05 + 50000 * 0.1 + (taxableIncome - 100000) * 0.2; // 20% tax for income above 100,000
    }

    // Set the computed tax to the output field
    document.getElementById('totaltax').value = tax.toFixed(2); // Rounded to 2 decimal places
}
