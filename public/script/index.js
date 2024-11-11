const studentNumberInput = document.querySelector(".student-number-input");
const passwordInput = document.querySelector(".password-input");

const messageContainer = document.querySelector(".message-container");
const loginButton = document.querySelector(".login-button");

function getUserCredentials() {
  const studentNum = studentNumberInput.value;
  const password = passwordInput.value;

  axios
    .get(`http://localhost:5000/users/${studentNum}/?password=${password}`)
    .then((res) => {
      window.location.href = "../html/user-portal.html";
    })
    .catch((error) => {
      if (!studentNum) {
        messageContainer.innerHTML = `Please input your studentNum`;
      } else {
        messageContainer.innerHTML = error.response.data.msg;
      }
    });
}

loginButton.addEventListener("click", (e) => {
  e.preventDefault();
  getUserCredentials();
});
