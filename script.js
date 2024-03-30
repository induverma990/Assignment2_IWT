function validateForm() {
  var fname = document.getElementById('fname').value;
  var lname = document.getElementById('lname').value;
  var email = document.getElementById('email').value;
  var message = document.getElementById("message").value;

  var fnameError = document.getElementById('fnameError');
  var lnameError = document.getElementById('lnameError');
  var emailError = document.getElementById('emailError');
  var messageError = document.getElementById("messageError");

  fnameError.textContent = "";
  lnameError.textContent = "";
  emailError.textContent = "";
  messageError.textContent= "";

  var isValid = true;

  if (fname.trim() === "") {
      fnameError.textContent = "First name is required";
      isValid = false;
  }

  if (lname.trim() === "") {
      lnameError.textContent = "Last name is required";
      isValid = false;
  }

  if (email.trim() === "") {
      emailError.textContent = "Email is required";
      isValid = false;
  } else if (!isValidEmail(email)) {
      emailError.textContent = "Invalid email address";
      isValid = false;
  }
  if (message.trim() === "") {
      messageError.textContent = "Message is required";
      isValid = false;
  }
  return isValid;
}

function isValidEmail(email) {

  var re =  /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.\.-]+\.[a-zA-Z]{2,4}$/;
  return re.test(email);
}