let n1 = Math.floor(Math.random() * 10);
document.getElementById("num1").innerHTML = n1;

let n2 = Math.floor(Math.random() * 10);
document.getElementById("num2").innerHTML = n2;

function submit() {

    let input = parseInt(document.getElementById("input").value);

    let sum = n1 + n2;

    if (input === sum) {
        alert("correct");
    } else {
        alert("incorrect" + "Correct ans Is: " + sum);
    }

    location.reload();

}