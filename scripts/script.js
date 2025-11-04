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

const firstNameIcon = document.getElementById("firstNameIcon");
const lastNameIcon = document.getElementById("lastNameIcon");
const emailIcon = document.getElementById("emailIcon");
const passwordIcon = document.getElementById("passwordIcon");

const originalPlaceholders = {
  firstName: userFirstName.placeholder,
  lastName: lastName.placeholder,
  email: email.placeholder,
  password: password.placeholder,
};

const errorEmail = "email@example/com";

const isValidEmail = (email) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

const validateInput = (event) => {
  event.preventDefault();
  let isValid = true;

  const firstNameVal = userFirstName.value.trim();
  const lastNameVal = lastName.value.trim();
  const emailVal = email.value.trim();
  const passwordVal = password.value.trim();

  // Helper functions
  function showError(input, msgEl, iconEl, message) {
    msgEl.textContent = message;
    msgEl.style.display = "block";
    input.classList.add("error");
    iconEl.classList.add("show");

    // Remove placeholder after showing error
    input.placeholder = "";
  }

  function hideError(input, msgEl, iconEl) {
    msgEl.style.display = "none";
    input.classList.remove("error");
    iconEl.classList.remove("show");
    input.classList.add("success");

    // Restore the original placeholder
    input.placeholder = originalPlaceholders[input.id];
  }

  // First Name
  if (!firstNameVal) {
    showError(
      userFirstName,
      firstNameError,
      firstNameIcon,
      "First Name cannot be empty"
    );
    isValid = false;
  } else {
    hideError(userFirstName, firstNameError, firstNameIcon);
  }

  // Last Name
  if (!lastNameVal) {
    showError(
      lastName,
      lastNameError,
      lastNameIcon,
      "Last Name cannot be empty"
    );
    isValid = false;
  } else {
    hideError(lastName, lastNameError, lastNameIcon);
  }

  // Email
  if (!emailVal) {
    showError(email, emailError, emailIcon, "Looks like this is not an email");
    isValid = false;

    // Show example email style
    email.value = "email@example/com";
    email.classList.add("errorEmail");
  } else if (!isValidEmail(emailVal)) {
    showError(email, emailError, emailIcon, "Looks like this is not an email");
    isValid = false;
    email.classList.add("errorEmail");
  } else {
    hideError(email, emailError, emailIcon);
    email.classList.remove("errorEmail");
  }

  // Password
  if (!passwordVal) {
    showError(
      password,
      passwordError,
      passwordIcon,
      "Password cannot be empty"
    );
    isValid = false;
  } else if (passwordVal.length < 6) {
    showError(
      password,
      passwordError,
      passwordIcon,
      "Password must be at least 6 characters"
    );
    isValid = false;
  } else {
    hideError(password, passwordError, passwordIcon);
  }

  // Success message
  if (isValid) {
    successMessage.textContent = "Success! Your account has been created.";
    successMessage.style.display = "block";

    [userFirstName, lastName, email, password].forEach((input) => {
      input.value = "";
      input.classList.remove("success");
    });
  } else {
    successMessage.style.display = "none";
  }
};

submitButton.addEventListener("click", validateInput);
