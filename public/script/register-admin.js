const employeeidInput = document.querySelector(".employee-id-input");
const passwordInput = document.querySelector(".create-password-input");
const passwordInputConfirm = document.querySelector(".create-password-confirm");

const messageContainer = document.querySelector(".message-container");
const registerButton = document.querySelector(".register-button");

function sendDataToBackend() {
  const employeeId = employeeidInput.value;
  const password = passwordInput.value;
  const confirmPassword = passwordInputConfirm.value;

  if (password !== confirmPassword) {
    messageContainer.innerHTML = `Password does not match`;
  } else if (!employeeId) {
    messageContainer.innerHTML = `Please input your Employee ID`;
  } else {
    axios
      .post("http://localhost:5000/admins", {
        employeeId: employeeId,
        password: password,
      })
      .then((res) => {
        window.location.href = `../html/login-admin.html`;
      })
      .catch((error) => console.log(error));
  }
}

registerButton.addEventListener("click", (e) => {
  e.preventDefault();
  sendDataToBackend();
});
