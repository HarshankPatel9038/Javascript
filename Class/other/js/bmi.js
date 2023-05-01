function bmi() {

    let weight = parseInt(document.getElementById("weight").value);
    let height = parseInt(document.getElementById("height").value);
    let bmiVal = document.getElementById("bmiVal");

    let bmi = weight / ((height/100) * (height/100));

    bmiVal.innerHTML = bmi.toFixed(2);

    let msg = document.getElementById("msg");
    msg.style.fontWeight = "600";

    if (bmi > 18.5) {
        msg.innerHTML = "underweight";
    } else if (bmi <= 18.5 && bmi >= 24.9) {
        msg.innerHTML = "normal weight";
    } else if (bmi < 24.9) {
        msg.innerHTML = "overweight";
    }

}