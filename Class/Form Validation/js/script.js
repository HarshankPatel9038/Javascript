let submit = document.getElementById("submit");
let email = document.getElementById("email");
let emailError = document.getElementById("emailError");
let password = document.getElementById("password");
let passwordError = document.getElementById("passwordError");
let passwordToggle = document.getElementById("passwordToggle");
let show = document.getElementById("show");
let hide = document.getElementById("hide");

// FORM SUBMIT
submit.addEventListener("submit", (e) => {
  e.preventDefault();
  if (email.value != "" && password.value === confirmPassword.value) {
    email.value = "";
    password.value = "";
  }
});

// WINDOWS TITLE
function oldTitle() {
  document.title = "Form Validation";
}
function newTitle() {
  document.title = "Come Back :)";
}
window.onblur = newTitle;
window.onfocus = oldTitle;

// EMAIL
email.addEventListener("blur", () => {
  if (email.value === "") {
    email.style.borderColor = "#F45050";
    email.style.background = "#F4505020";
    email.style.margin = "0";
    emailError.style.margin = "10px 0 25px 0";
    emailError.innerHTML = "Enter Valid Email Address";
  }
});

function emailOperation() {
  if (email.value != "") {
    email.style.borderColor = "#B2A4FF";
    email.style.background = "#B2A4FF20";
    email.style.margin = "0 0 25px 0";
    emailError.style.margin = "0";
    emailError.innerHTML = "";
  } else if (email.value === "") {
    email.style.borderColor = "#F45050";
    email.style.background = "#F4505020";
  }
}

email.addEventListener("keydown", emailOperation);

email.addEventListener("change", emailOperation);


// PASSWORD
password.addEventListener("blur", () => {
  let passwordValue = password.value;
  let i;
  if (password.value === "") {
    password.style.borderColor = "#F45050";
    password.style.background = "#F4505020";
    password.style.margin = "0";
    passwordError.style.margin = "10px 0 25px 0";
    passwordError.innerHTML = "Enter Valid Password";
  } else if (passwordValue.length < 8) {
    password.style.margin = "0";
    passwordError.style.margin = "10px 0 25px 0";
    passwordError.innerHTML = "Please Enter Password More Then 8 Character";
  }
});

function passwordOperator() {
  if (password.value != "") {
    password.style.borderColor = "#B2A4FF";
    password.style.background = "#B2A4FF20";
    password.style.margin = "0 0 25px 0";
    passwordError.style.margin = "0";
    passwordError.innerHTML = "";
  } else if (email.value === "") {
    email.style.borderColor = "#F45050";
    email.style.background = "#F4505020";
  }
}

password.addEventListener("keydown", passwordOperator);

password.addEventListener("change", passwordOperator);


// PASSWORD TOGGLE
passwordToggle.addEventListener("click", () => {
  if (password.type === "password") {
    password.type = "text";
    show.style.display = "none";
    hide.style.display = "block";
  } else {
    password.type = "password";
    show.style.display = "block";
    hide.style.display = "none";
  }
});
