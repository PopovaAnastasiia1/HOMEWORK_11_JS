const iconPassword = document.querySelectorAll(".icon-password");
const btnConfirm = document.querySelector(".btn");

iconPassword.forEach((icon) => {
  icon.addEventListener("click", function () {
    const typePassword = icon.getAttribute("data-type");
    let password = document.querySelector(typePassword);
    if (password.type === "password") {
      password.type = "text";
      icon.classList.replace("fa-eye", "fa-eye-slash");
    } else {
      password.type = "password";
      icon.classList.replace("fa-eye-slash", "fa-eye");
    }
  });
});
btnConfirm.addEventListener("click", (event) => {
  const passwordInput = document.getElementById("input-password").value;
  const passwordConfirm = document.getElementById("confirm-password").value;
  if (passwordInput === "" || passwordConfirm === "") {
    alert("Поля не повинні бути пусті");
  } else if (passwordInput === passwordConfirm) {
    alert("You are welcome");
  } else {
    const text = document.createElement("span");
    btnConfirm.before(text);
    text.innerText = "Потрібно ввести однакові значення";
    text.style.color = "red";
  }
});

