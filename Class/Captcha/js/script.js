let text1 = Math.floor(Math.random() * 10);
document.getElementById("text1").innerHTML = text1;

let text2 = Math.floor(Math.random() * 10);
document.getElementById("text2").innerHTML = text2;


function captcha() {

  let input = parseInt(document.getElementById("input").value);

  let totalText = text1 + text2;

  if (input === totalText) {
    alert("Captcha code is correct!");
  } else {
    alert("Captcha code is incorrect!" + " " + "Corret Code Is :" + totalText);
  }

  location.reload();

}
