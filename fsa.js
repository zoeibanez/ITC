<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Factorial, Sum, and Average Calculator</title>
    <link rel="stylesheet" href="style.css">
</head>
<body>
    <!-- Navbar -->
    <nav>
        <div class="burger" id="menuToggle">
            <div class="bar"></div>
            <div class="bar"></div>
            <div class="bar"></div>
        </div>
        <div id="navLinks">
            <a href="index.html">Home</a>
            <a href="conversion.html">Conversion</a>
            <a href="incomeTax.html">Income Tax</a>
            <a href="fsa.html">Factorial, Sum, Avg</a>
            <a href="sp.html">Simple Payroll</a>
        </div>
    </nav>

    <!-- Factorial, Sum, and Average Calculator -->
    <center>
        <h1>Factorial, Sum, and Average Calculator</h1>

        <div>
            <label for="number">Enter a number (N):</label>
            <input type="number" id="number" oninput="calculate()">
        </div>

        <div>
            <h3>Results:</h3>
            <p><strong>Factorial:</strong> <span id="factorialResult" class="result"></span></p>
            <p><strong>Sum:</strong> <span id="sumResult" class="result"></span></p>
            <p><strong>Average:</strong> <span id="averageResult" class="result"></span></p>
        </div>
    </center>

    <script>
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
    </script>
</body>
</html>
