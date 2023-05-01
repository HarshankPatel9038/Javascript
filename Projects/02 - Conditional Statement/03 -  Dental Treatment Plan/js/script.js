let tc_c = 1,
  tc_s = 500,
  fl_c = 2,
  fl_s = 1500,
  rtc_c = 4,
  rtc_s = 2500,
  rtc_c_c = 6,
  rtc_c_s = 12000,
  bi_c = 12,
  bi_s = 35000,
  final_name,
  final_c,
  final_s;
let treatment = document.getElementById("treatment");
let btn = document.getElementById("submit");

let tableText = (t, s, c) => {

  document.querySelector("#treatmentName").innerHTML = t;
  document.querySelector("#seating").innerHTML = s;
  document.querySelector("#costing").innerHTML = c;

  (final_name = t), (final_c = c), (final_s = s);

};

treatment.addEventListener("change", () => {

  let treatmentPlan = document.querySelector("#treatmentPlan");
  let val = document.querySelector("#treatment").value;

  treatmentPlan.style.display = "block";

  if (val === "0") {
    treatmentPlan.style.display = "none";
  } else if (val === "tc") {
    tableText("Teeth Cleaning", tc_c, tc_s);
  } else if (val === "fl") {
    tableText("Filling", fl_c, fl_s);
  } else if (val === "rct") {
    tableText("Root canal Treatment", rtc_c, rtc_s);
  } else if (val === "rct_c") {
    tableText("RCT + Cover", rtc_c_c, rtc_c_s);
  } else if (val === "bi") {
    tableText("Braces / Invisalign", bi_c, bi_s);
  }

});


let appointment = () => {
  let date = document.querySelector("#datepicker").value;
  let errorMsg = document.querySelector("#errorMsg");
  console.log(date);

  if (date === "") {
    btn.style.pointerEvent = "none";
    errorMsg.innerHTML = "Please Select a Appointment Date";
  } else {
    // console.log(final_name, final_c, final_s);
    let price = final_c / final_s;
    // console.log(price);

    let hello = new Date(date);
    console.log(hello);

    let plan = '';

    plan += '<table class="table table-responsive"><tr class="table-light"><th scope="col">Sr No:</th><th scope="col">Seating</th><th scope="col">Costing</th></tr>';

    for (let i = 1; i <=final_s; i++) {

      let tr = () => {
        plan += '<tr>';
        plan += '<td>' + i + '</td>';
        plan += '<td>' + hello.toLocaleDateString() + '</td>';
        plan += '<td>' + price + '</td>';
        plan += '</tr>';
      }

      if (i === 1) {
        tr();
        // console.log(i, hello.toLocaleDateString(), price);
      } else {
        hello.setDate(hello.getDate() + 7);
        tr();
        // console.log(i, hello.toLocaleDateString(), price);
      }
    }

    plan += '</table>';

    // console.log(plan);

    document.querySelector("#tre-plan-table").style.display = "block";
    document.querySelector("#tre-plan-table").innerHTML = plan;
  }
};

btn.addEventListener("click", appointment);