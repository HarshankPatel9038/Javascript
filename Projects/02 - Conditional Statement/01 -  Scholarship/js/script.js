let cgpa = document.getElementById("cgpa");
let fees = document.getElementById("fees");
let cast = document.getElementById("cast");
let submit = document.getElementById("submit");
let gradeMsg = document.getElementById("gradeMsg");
let castMsg = document.getElementById("castMsg");
let feesMsg = document.getElementById("feesMsg");
let finalMsg = document.getElementById("finalMsg");
let scholarshipMsg = document.getElementById("scholarshipMsg");
let totalAmountMsg = document.getElementById("totalAmountMsg");
let underline = '<span id="underline">';
let underline2 = "</span>";
let grade, amount, x, y;

// =============== SCHOLARSHIP FUNCTION ===============
function Scholarship() {
  if (grade === "A" || grade === "B") {
    if (cast.value === "Open") {
      finalMsg.innerHTML = "Your Are Not Eligible For Scholarship";
      amount = (fees.value * 0) / 100;
      x = "0";
      y = fees.value - amount;
    } else if (cast.value === "OBC") {
      amount = (fees.value * 25) / 100;
      x = "25%";
      y = fees.value - amount;
    } else if (cast.value === "SC") {
      amount = (fees.value * 50) / 100;
      x = "50%";
      y = fees.value - amount;
    } else if (cast.value === "ST") {
      amount = (fees.value * 100) / 100;
      x = "100%";
      y = fees.value - amount;
    }
  } else if (grade === "C" || grade === "D") {
    x = "0";
  }
  castMsg.innerHTML = "Your Cast Is " + underline + cast.value + underline2;
  feesMsg.innerHTML = "Your Fees Is " + underline + fees.value + underline2;
  scholarshipMsg.innerHTML = "Your Scholarship Is " + underline + x + underline2;
  totalAmountMsg.innerHTML = "Your Total Amount Is " + underline + y + underline2;
}

// =============== CLICK EVENT ===============
submit.addEventListener("click", () => {
  console.log(fees.value);
  console.log(cast.value);

  if (cgpa.value > 7.5 && cgpa.value <= 8) {
    grade = "D";
    Scholarship();
  } else if (cgpa.value > 8 && cgpa.value <= 8.5) {
    grade = "C";
    Scholarship();
  } else if (cgpa.value > 8.5 && cgpa.value <= 9) {
    grade = "B";
    Scholarship();
  } else if (cgpa.value > 9 && cgpa.value <= 10) {
    grade = "A";
    Scholarship();
  } else {
    grade = "Not Valid";
  }
  gradeMsg.innerHTML = "You Grade Is " + underline + grade + underline2;
});
