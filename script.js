constform = document.getElementById("form");

const name = document.getElementById("name");
const email = document.getElementById("email");
const message = document.getElementById("message");

changeColour("207, 175, 105, 0.85", "231, 195, 104, 0.8", "247, 193, 144, 0.8");

function changeColour(backgroundColour, btnColour, iconColour) {
  let icons = [...document.querySelectorAll(".icon")];
  document.querySelector(".contact-bg").style.backgroundImage =
    "linear-gradient(rgba(" +
    backgroundColour +
    '), rgba(0, 0, 0, 0.9)), url("images/landscape-2.jpeg")';
  document.querySelector(".contact-form").style.backgroundImage =
    "linear-gradient(rgba(" +
    backgroundColour +
    '), rgba(0, 0, 0, 0.9)), url("../images/landscape-2.jpeg")';
  document.querySelector(".contact-btn").style.backgroundColor =
    "rgba(" + btnColour + ")";
  icons.filter(icon => (icon.style.color = "rgba(" + iconColour + ")"));
}

// Show input error message
function showError(input, message) {
  const formControl = input.parentElement;
  formControl.className =
    "form-control flex flex-col justify-center w-5/12 relative error";
  const small = formControl.querySelector("small");
  small.innerText = message;
}

// Show success outline
function showSuccess(input) {
  const formControl = input.parentElement;
  formControl.className =
    "form-control flex flex-col justify-center w-5/12 relative success";
}

// Check required fields
function checkRequired(inputArr) {
  inputArr.forEach(input => {
    if (input.value.trim() === "") {
      showError(input, `${getFieldName(input)} is required`);
    } else {
      showSuccess(input);
    }
  });
}

// Check email is valid
function checkEmail(input) {
  const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  if (re.test(input.value.trim())) {
    showSuccess(input);
  } else {
    showError(input, "Email is not valid");
  }
}

// Get field name
function getFieldName(input) {
  return input.id.charAt(0).toUpperCase() + input.id.slice(1);
}

// Event Listeneners
form.addEventListener("submit", function(e) {
  e.preventDefault();
  checkRequired([name, email, message]);
  checkEmail(email);
});
