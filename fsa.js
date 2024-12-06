// Income Tax Computation Function
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

            // Determine the tax based on the income brackets
            if (taxableIncome <= 250000) {
                // No tax for incomes up to 250,000
                tax = 0;
            } else if (taxableIncome <= 400000) {
                // 20% on the excess over 250,000
                tax = (taxableIncome - 250000) * 0.20;
            } else if (taxableIncome <= 800000) {
                // 30,000 + 25% on the excess over 400,000
                tax = 30000 + (taxableIncome - 400000) * 0.25;
            } else if (taxableIncome <= 2000000) {
                // 130,000 + 30% on the excess over 800,000
                tax = 130000 + (taxableIncome - 800000) * 0.30;
            } else if (taxableIncome <= 8000000) {
                // 490,000 + 32% on the excess over 2,000,000
                tax = 490000 + (taxableIncome - 2000000) * 0.32;
            } else {
                // 2,410,000 + 35% on the excess over 8,000,000
                tax = 2410000 + (taxableIncome - 8000000) * 0.35;
            }

            // Set the computed tax to the output field
            document.getElementById('totaltax').value = tax.toFixed(2); // Rounded to 2 decimal places
        }

        // Menu toggle functionality for burger icon
        const menuToggle = document.getElementById('menuToggle');
        const navLinks = document.getElementById('navLinks');

        menuToggle.addEventListener('click', () => {
            navLinks.classList.toggle('active');
        });
