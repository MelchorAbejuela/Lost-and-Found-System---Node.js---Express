const studentNumberInput = document.querySelector(".student-number-input");
const passwordInput = document.querySelector(".password-input");
const passwordInputConfirm = document.querySelector(".password-input-confirm");
const registerButton = document.querySelector(".register-button");
const messageContainer = document.querySelector(".message-container");

function sendDataToBackend() {
  const studentNum = studentNumberInput.value;
  const password = passwordInput.value;
  const confirmPassword = passwordInputConfirm.value;

  if (password !== confirmPassword) {
    messageContainer.innerHTML = `Password does not match`;
  } else if (!studentNum) {
    messageContainer.innerHTML = `Please input your Student Number  `;
  } else {
    axios
      .post("http://localhost:5000/users", {
        studentNum: studentNum,
        password: password,
      })
      .then((res) => {
        console.log(res);
        window.location.href = "../index.html";
      })
      .catch((error) => console.log(error));
  }
}

registerButton.addEventListener("click", (e) => {
  e.preventDefault();
  sendDataToBackend();
});
