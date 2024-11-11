const employeeIdInput = document.querySelector(".employee-id-input");
const passwordInput = document.querySelector(".password-input");

const messageContainer = document.querySelector(".message-container");
const loginButton = document.querySelector(".login-button");

function getAdminCredentials() {
  const employeeId = employeeIdInput.value;
  const password = passwordInput.value;

  axios
    .get(`http://localhost:5000/admins/${employeeId}/?password=${password}`)
    .then((res) => {
      console.log(res);
      window.location.href = "../html/admin-portal.html";
    })
    .catch((error) => {
      if (!employeeId) {
        messageContainer.innerHTML = `Please input your employee ID`;
      } else {
        messageContainer.innerHTML = error.response.data.msg;
        console.log(error);
      }
    });
}

loginButton.addEventListener("click", (e) => {
  e.preventDefault();
  getAdminCredentials();
});
