function calculate() {
  const unit = Number(document.getElementById("units").value);
  

  let bill = 0;
  if (unit <= 50) {
    bill = unit * 0.5;
  } else if (unit <= 200) {
    bill = 50 * 0.5 + (unit - 50) * 0.75;
  } else if (unit <= 450) {
    bill = 50 * 0.5 + 150 * 0.75 + (unit - 200) * 1.2;
  } else {
    bill = 50 * 0.5 + 150 * 0.75 + 250 * 1.2 + (unit - 450) * 1.5;
  }
  const surcharge = bill * 0.2;
  const total = bill + surcharge;
  document.getElementById("total").innerText = total;
  document.getElementById("results").classList.remove("d-none");
}
function clearData() {
  document.getElementById("units").value = "";
  document.getElementById("slab1").innerText = "";
  document.getElementById("subtotal").innerText = "";
  document.getElementById("surcharge").innerText = "";
  document.getElementById("total").innerText = "";
  document.getElementById("results").classList.add("d-none");
}
const number = Math.floor(Math.random() * 10) + 1;

function alert() {
  const guess = parseInt(document.getElementById("guess").value, 10);
  value.preventDefault();

  if (guess > number) {
    document.getElementById("msg").innerText =
      "OOPS! SORRY!!! TRY A SMALLER NUMBER.";
  } else if (guess < number) {
    document.getElementById("msg").innerText =
      "OOPS! SORRY!!! TRY A LARGER NUMBER.";
  }
  //    else if (guess === number) {
  //     document.getElementById("msg").innerText = "Congratulations! You guessed it right!";
  //   }
  else {
    document.getElementById("msg").innerText = "Please enter a valid number.";
  }
}

document.querySelector("form").addEventListener("submit", (event) => {
  event.preventDefault();
  const bill = document.getElementById("billAmount").value;
  const ser = document.getElementById("serviceLevel").value;
  const pc = document.getElementById("peoplecount").value;

  const tipPerPerson = (bill * ser) / pc;


//   console.log(tipPerPerson);
  document.getElementById("billAmount").value="";
  document.getElementById("serviceLevel").value="";
  document.getElementById("peoplecount").value="";
  document.getElementById("tipInfo").innerText = tipPerPerson ;
});

function calculateSalary() {

    var basicSalary =
        Number(document.getElementById("basicSalary").value);

    if (basicSalary <= 0) {

        alert("Please enter valid salary");

        return;
    }

    var hra =
        basicSalary * 0.20;

    var da =
        basicSalary * 0.10;

    var grossSalary =
        basicSalary + hra + da;

    var tax =
        grossSalary * 0.05;


    var netSalary =
        grossSalary - tax;


    document.getElementById("result")
        .classList.remove("d-none");

    document.getElementById("hra")
        .innerHTML =
        "🏠 HRA : ₹ " + hra.toFixed(2);

    document.getElementById("da")
        .innerHTML =
        "📈 DA : ₹ " + da.toFixed(2);

    document.getElementById("tax")
        .innerHTML =
        "🧾 Tax : ₹ " + tax.toFixed(2);

    document.getElementById("netSalary")
        .innerHTML =
        "💼 Net Salary : ₹ " + netSalary.toFixed(2);
}

document.addEventListener("keydown", function (event) {

    if (event.key === "Enter") {
        calculateSalary();
    }
});