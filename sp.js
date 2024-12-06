// Array to store employee data
const payrollList = [];

// Function to add an employee to the payroll
function addEmployee() {
    const name = document.getElementById('employeeName').value;
    const daysWorked = parseFloat(document.getElementById('daysWorked').value);
    const dailyRate = parseFloat(document.getElementById('dailyRate').value);
    const deductionAmount = parseFloat(document.getElementById('deductionAmount').value);

    if (!name || isNaN(daysWorked) || isNaN(dailyRate) || isNaN(deductionAmount)) {
        alert("Please fill all fields correctly.");
        return;
    }

    const grossPay = daysWorked * dailyRate;
    const netPay = grossPay - deductionAmount;

    payrollList.push({
        name: name,
        daysWorked: daysWorked,
        dailyRate: dailyRate,
        grossPay: grossPay,
        deductionAmount: deductionAmount,
        netPay: netPay
    });

    // Clear the form fields
    document.getElementById('employeeName').value = '';
    document.getElementById('daysWorked').value = '';
    document.getElementById('dailyRate').value = '';
    document.getElementById('deductionAmount').value = '';

    // Update the table
    updateTable();
}

// Function to delete an employee from the payroll by line number
function deleteEmployee() {
    const lineNumber = parseInt(document.getElementById('lineNumber').value);

    if (lineNumber > 0 && lineNumber <= payrollList.length) {
        if (confirm("Are you sure you want to delete this employee?")) {
            payrollList.splice(lineNumber - 1, 1); // Remove employee by line number
            updateTable();
        }
    } else {
        alert("Invalid line number.");
    }

    // Clear the line number input
    document.getElementById('lineNumber').value = '';
}

// Function to delete all employees from the payroll
function deleteAllEmployees() {
    if (confirm("Are you sure you want to delete all employees?")) {
        payrollList.length = 0; // Clear the entire payroll list
        updateTable();
    }
}

// Function to update the payroll table
function updateTable() {
    const tableBody = document.getElementById('payrollTable').getElementsByTagName('tbody')[0];
    tableBody.innerHTML = ''; // Clear existing table rows

    payrollList.forEach((employee, index) => {
        const row = tableBody.insertRow();
        row.innerHTML = `
            <td>${index + 1}</td>
            <td>${employee.name}</td>
            <td>${employee.daysWorked}</td>
            <td>${employee.dailyRate.toFixed(2)}</td>
            <td>${employee.grossPay.toFixed(2)}</td>
            <td>${employee.deductionAmount.toFixed(2)}</td>
            <td>${employee.netPay.toFixed(2)}</td>
            <td><button onclick="deleteSpecificEmployee(${index})">Delete</button></td>
        `;
    });
}

// Function to delete a specific employee directly from the table
function deleteSpecificEmployee(index) {
    if (confirm("Are you sure you want to delete this employee?")) {
        payrollList.splice(index, 1);
        updateTable();
    }
}
