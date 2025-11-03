const userFirstName = document.getElementById("firstName");
const lastName = document.getElementById("lastName");
const email = document.getElementById("email");
const password = document.getElementById("password");
const submitButton = document.querySelector(".button");
const successMessage = document.getElementById("successMessage");

const firstNameError = document.getElementById("firstNameError");
const lastNameError = document.getElementById("lastNameError");
const emailError = document.getElementById("emailError");
const passwordError = document.getElementById("passwordError");

const isValidEmail = (email) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

const validateInput = (event) => {
  event.preventDefault(); // prevent form submission
  let isValid = true;

  const firstNameVal = userFirstName.value.trim();
  const lastNameVal = lastName.value.trim();
  const emailVal = email.value.trim();
  const passwordVal = password.value.trim();

  // First Name
  if (!firstNameVal) {
    firstNameError.textContent = "First name cannot be empty";
    firstNameError.style.display = "block";
    userFirstName.classList.add("error");
    isValid = false;
  } else {
    firstNameError.style.display = "none";
    userFirstName.classList.remove("error");
    userFirstName.classList.add("success");
  }

  // Last Name
  if (!lastNameVal) {
    lastNameError.textContent = "Last name cannot be empty";
    lastNameError.style.display = "block";
    lastName.classList.add("error");
    isValid = false;
  } else {
    lastNameError.style.display = "none";
    lastName.classList.remove("error");
    lastName.classList.add("success");
  }

  // Email
  if (!emailVal) {
    emailError.textContent = "Email cannot be empty";
    emailError.style.display = "block";
    email.classList.add("error");
    isValid = false;
  } else if (!isValidEmail(emailVal)) {
    emailError.textContent = "Please enter a valid email";
    emailError.style.display = "block";
    email.classList.add("error");
    isValid = false;
  } else {
    emailError.style.display = "none";
    email.classList.remove("error");
    email.classList.add("success");
  }

  // Password
  if (!passwordVal) {
    passwordError.textContent = "Password cannot be empty";
    passwordError.style.display = "block";
    password.classList.add("error");
    isValid = false;
  } else if (passwordVal.length < 6) {
    passwordError.textContent = "Password must be at least 6 characters";
    passwordError.style.display = "block";
    password.classList.add("error");
    isValid = false;
  } else {
    passwordError.style.display = "none";
    password.classList.remove("error");
    password.classList.add("success");
  }

  if (isValid) {
    successMessage.textContent = "Success! Your account has been created.";
    successMessage.style.display = "block";

    userFirstName.value = "";
    lastName.value = "";
    email.value = "";
    password.value = "";

    userFirstName.classList.remove("success");
    lastName.classList.remove("success");
    email.classList.remove("success");
    password.classList.remove("success");
  } else {
    successMessage.style.display = "none";
  }
};

// Attach event listener
submitButton.addEventListener("click", validateInput);
