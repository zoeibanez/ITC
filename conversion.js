 // Toggle menu function for mobile burger icon
        function toggleMenu() {
            const nav = document.querySelector('nav');
            nav.classList.toggle('active');
        }

        // Conversion function
        function convert() {
            let inputValue = document.getElementById('inputValue').value;
            let conversionType = document.getElementById('conversionType').value;
            let resultText = '';

            if (inputValue !== '') {
                if (conversionType === 'FtoC') {
                    // Convert Fahrenheit to Celsius
                    let celsius = (inputValue - 32) * 5 / 9;
                    resultText = `${inputValue}°F = ${celsius.toFixed(2)}°C`;
                } else if (conversionType === 'CtoF') {
                    // Convert Celsius to Fahrenheit
                    let fahrenheit = (inputValue * 9 / 5) + 32;
                    resultText = `${inputValue}°C = ${fahrenheit.toFixed(2)}°F`;
                } else if (conversionType === 'MtoF') {
                    // Convert Meters to Feet
                    let feet = inputValue * 3.28084;
                    resultText = `${inputValue} meters = ${feet.toFixed(2)} feet`;
                } else if (conversionType === 'FtoM') {
                    // Convert Feet to Meters
                    let meters = inputValue / 3.28084;
                    resultText = `${inputValue} feet = ${meters.toFixed(2)} meters`;
                }
            } else {
                resultText = 'Please enter a value.';
            }

            document.getElementById('result').innerText = resultText;
        }

        // Automatically call the function to update the result as soon as the page is loaded
        document.getElementById('inputValue').addEventListener('input', convert);
        document.getElementById('conversionType').addEventListener('change', convert);
