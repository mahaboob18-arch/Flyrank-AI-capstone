const form = document.getElementById("settingsForm");
const nameInput = document.getElementById("name");
const emailInput = document.getElementById("email");
const notificationsInput = document.getElementById("notifications");
const nameError = document.getElementById("nameError");
const emailError = document.getElementById("emailError");
const successMessage = document.getElementById("successMessage");

function validate() {
  let isValid = true;

  nameError.textContent = "";
  emailError.textContent = "";
  successMessage.textContent = "";

  if (nameInput.value.trim().length < 2) {
    nameError.textContent = "Name must be at least 2 characters";
    isValid = false;
  }

  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailPattern.test(emailInput.value.trim())) {
    emailError.textContent = "Enter a valid email";
    isValid = false;
  }

  return isValid;
}

form.addEventListener("submit", function (event) {
  event.preventDefault();

  if (validate()) {
    const data = {
      name: nameInput.value.trim(),
      email: emailInput.value.trim(),
      notifications: notificationsInput.checked,
    };

    console.log("Saved:", data);
    successMessage.textContent = "Settings saved!";
  }
});
