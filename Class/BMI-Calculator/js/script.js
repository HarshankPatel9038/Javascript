document.getElementById("form").addEventListener("click", function(event){
  event.preventDefault();
});

function calculateBMI() {

  let height = parseInt(document.getElementById("height").value);
  let weight = parseInt(document.getElementById("weight").value);
	var result = document.getElementById("result");

  var bmi = weight / ((height/100) * (height/100));

	result.innerHTML = "Your BMI is " + bmi.toFixed(1);

	if (bmi < 18.5) {
		result.innerHTML += ' <span>(Underweight)</span>';
    result.style.margin = "30px 0";
    result.style.color = "#FF9A42";
	} else if (bmi >= 18.5 && bmi <= 24.9) {
		result.innerHTML += ' <span>(Normal weight)</span>';
    result.style.color = "#6cd46c";
    result.style.margin = "30px 0";
	} else if (bmi >= 25 && bmi <= 29.9) {
		result.innerHTML += ' <span>(Overweight)</span>';
    result.style.margin = "30px 0";
    result.style.color = "#ff4242";
	} else {
		result.innerHTML += ' <span>(Obesity)</span>';
    result.style.margin = "30px 0";
    result.style.color = "#ff4242";
	}

}