var payroll = [];

  // Function to add an employee
  function addEmployee(name, daysWorked, dailyRate, deduction) {
    let grossPay = (daysWorked * dailyRate).toFixed(2);
    let netPay = (grossPay - deduction).toFixed(2);

    let newEmployee = {
      name: name,
      daysWorked: daysWorked,
      dailyRate: dailyRate,
      grossPay: grossPay,
      deduction: deduction,
      netPay: netPay
    };

    payroll.push(newEmployee);
    showEmployees();
  }

  // Function to display employees
  function showEmployees() {
    let tb = "", trec = "", tgpay = 0.00, tded = 0.00, tnetpay = 0.00;
    let lno = 1;
    for (emp of payroll) {
      trec = `<tr>
        <td class="ndata">${lno}</td>
        <td>${emp.name}</td>
        <td class="ndata">${emp.daysWorked.toFixed(2)}</td>
        <td class="ndata">${emp.dailyRate.toFixed(2)}</td>
        <td class="ndata">${emp.grossPay}</td>
        <td class="ndata">${emp.deduction.toFixed(2)}</td>
        <td class="ndata">${emp.netPay}</td>
      </tr>`;
      tb += trec;
      tgpay += parseFloat(emp.grossPay);
      ++lno;
    }
    document.getElementById("tablebody").innerHTML = tb;
    document.getElementById("tGrossPay").innerHTML = tgpay.toFixed(2);
    document.getElementById("tDeduction").innerHTML = tded.toFixed(2);
    document.getElementById("tNetPay").innerHTML = tnetpay.toFixed(2);
  }

  // Event Listeners and Dialog Logic
  document.addEventListener("DOMContentLoaded", () => {
    showEmployees();

    let dlgConfirmCancel = document.getElementById("dlgConfirmCancel");

    // Add new employee
    document.getElementById("btnAddEmployee").addEventListener("click", () => {
      let name = document.getElementById("empName").value.trim();
      let daysWorked = parseFloat(document.getElementById("empDays").value);
      let dailyRate = parseFloat(document.getElementById("empRate").value);
      let deduction = parseFloat(document.getElementById("empDeduction").value);

      // Validation check
      if (name && !isNaN(daysWorked) && !isNaN(dailyRate) && !isNaN(deduction)) {
        addEmployee(name, daysWorked, dailyRate, deduction);
        
        // Clear input fields after submission
        document.getElementById("empName").value = '';
        document.getElementById("empDays").value = '';
        document.getElementById("empRate").value = '';
        document.getElementById("empDeduction").value = '';
      } else {
        alert("Please fill all fields correctly.");
      }
    });

    // Delete specific employee
    document.getElementById("btndelete").addEventListener("click", () => {
      let x = document.getElementById("delemployee").value * 1 - 1;
      if (x >= 0 && x < payroll.length) {
        document.getElementById("dlgmsg").innerHTML = `Delete the employee ${x + 1}: ${payroll[x].name}?`;
        dlgConfirmCancel.showModal();
      }
    });

    // Delete all employees
    document.getElementById("btndeleteall").addEventListener("click", () => {
      document.getElementById("dlgmsg").innerHTML = "Delete all records?";
      dlgConfirmCancel.showModal();
    });

    dlgConfirmCancel.addEventListener("close", (e) => {
      let rst = e.target.returnValue;
      if (rst === "confirm") {
        let dlgmsg = document.getElementById("dlgmsg").innerHTML;
        if (dlgmsg === "Delete all records?") {
          let dlgAreYouSure = document.getElementById("dlgAreYouSure");
          document.getElementById("dlgmsg2").innerHTML = "Are you sure?";
          dlgAreYouSure.showModal();
        } else {
          let x = document.getElementById("delemployee").value * 1 - 1;
          payroll.splice(x, 1);
          showEmployees();
          document.getElementById("delemployee").value = '';
        }
      }
    });

    // Confirm deletion of all employees
    let dlgAreYouSure = document.getElementById("dlgAreYouSure");
    dlgAreYouSure.addEventListener("close", (e) => {
      let rst = e.target.returnValue;
      if (rst === "yes") {
        payroll = [];
        showEmployees();
      }
    });
  });
