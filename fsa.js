// Factorial, Sum, and Average Calculation
        function calculate() {
            var n = document.getElementById('number').value;

            // Factorial using While Loop
            var factorial = 1;
            var i = 1;
            while (i <= n) {
                factorial *= i;
                i++;
            }
            document.getElementById('factorialResult').textContent = factorial;

            // Sum using Do While Loop
            var sum = 0;
            var j = 1;
            do {
                sum += j;
                j++;
            } while (j <= n);
            document.getElementById('sumResult').textContent = sum;

            // Average using For Loop
            var total = 0;
            for (var k = 1; k <= n; k++) {
                total += k;
            }
            var average = n > 0 ? (total / n).toFixed(2) : 0; // Prevent division by 0
            document.getElementById('averageResult').textContent = average;
        }

        // Menu toggle functionality for burger icon
        const menuToggle = document.getElementById('menuToggle');
        const navLinks = document.getElementById('navLinks');

        menuToggle.addEventListener('click', () => {
            navLinks.classList.toggle('active');
        });
