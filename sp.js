let payroll = [];

  // Function to calculate Gross Pay and Net Pay
  function calculatePay(daysWorked, dailyRate, deduction) {
    let grossPay = daysWorked * dailyRate;
    let netPay = grossPay - deduction;
    return { grossPay, netPay };
  }

  // Function to add an employee to the payroll list
  function addEmployee(name, daysWorked, dailyRate, deduction) {
    let { grossPay, netPay } = calculatePay(daysWorked, dailyRate, deduction);
    let employee = {
      name: name,
      daysWorked: daysWorked,
      dailyRate: dailyRate,
      grossPay: grossPay,
      deduction: deduction,
      netPay: netPay
    };
    payroll.push(employee);
    displayPayroll();
  }

  // Function to display the payroll table
  function displayPayroll() {
    let tableBody = document.getElementById("payrollBody");
    tableBody.innerHTML = ''; // Clear the table before displaying new data

    payroll.forEach((emp, index) => {
      let row = `<tr>
        <td>${index + 1}</td>
        <td>${emp.name}</td>
        <td>${emp.daysWorked}</td>
        <td>${emp.dailyRate}</td>
        <td>${emp.grossPay.toFixed(2)}</td>
        <td>${emp.deduction.toFixed(2)}</td>
        <td>${emp.netPay.toFixed(2)}</td>
      </tr>`;
      tableBody.innerHTML += row;
    });
  }

  // Function to delete an employee from the payroll
  function deleteEmployee(lineNumber) {
    if (lineNumber > 0 && lineNumber <= payroll.length) {
      payroll.splice(lineNumber - 1, 1); // Remove the employee from the array
      displayPayroll();
    } else {
      alert("Invalid Line Number. Please try again.");
    }
  }

  // Function to delete all employees from the payroll
  function deleteAllEmployees() {
    payroll = [];
    displayPayroll();
  }

  // Event Listener for Adding Employee
  document.getElementById("btnAddEmployee").addEventListener("click", () => {
    let empName = document.getElementById("empName").value;
    let empDays = parseInt(document.getElementById("empDays").value);
    let empRate = parseFloat(document.getElementById("empRate").value);
    let empDeduction = parseFloat(document.getElementById("empDeduction").value);

    if (empName && empDays && empRate && empDeduction) {
      addEmployee(empName, empDays, empRate, empDeduction);
      document.getElementById("empName").value = '';
      document.getElementById("empDays").value = '';
      document.getElementById("empRate").value = '';
      document.getElementById("empDeduction").value = '';
    } else {
      alert("Please fill out all fields with valid information.");
    }
  });

  // Event Listener for Deleting Employee
  document.getElementById("btnDeleteEmployee").addEventListener("click", () => {
    let lineNumber = parseInt(document.getElementById("empToDelete").value);
    if (lineNumber > 0 && lineNumber <= payroll.length) {
      document.getElementById("deleteConfirmationMessage").textContent = `Are you sure you want to delete employee ${lineNumber}?`;
      document.getElementById("deleteConfirmationDialog").showModal();
    } else {
      alert("Invalid Line Number. Please try again.");
    }
  });

  // Event Listener for Confirm Delete Employee
  document.getElementById("btnConfirmDelete").addEventListener("click", () => {
    let lineNumber = parseInt(document.getElementById("empToDelete").value);
    deleteEmployee(lineNumber);
    document.getElementById("deleteConfirmationDialog").close();
  });

  // Event Listener for Cancel Delete Employee
  document.getElementById("btnCancelDelete").addEventListener("click", () => {
    document.getElementById("deleteConfirmationDialog").close();
  });

  // Event Listener for Delete All Employees
  document.getElementById("btnDeleteAllEmployees").addEventListener("click", () => {
    document.getElementById("deleteAllConfirmationDialog").showModal();
  });

  // Event Listener for Confirm Delete All Employees
  document.getElementById("btnConfirmDeleteAll").addEventListener("click", () => {
    deleteAllEmployees();
    document.getElementById("deleteAllConfirmationDialog").close();
  });

  // Event Listener for Cancel Delete All Employees
  document.getElementById("btnCancelDeleteAll").addEventListener("click", () => {
    document.getElementById("deleteAllConfirmationDialog").close();
  });
