// const button = document.getElementById("loginBtn");
// console.log(button);

// const form = document.getElementById("form");
// console.log(form);

// let color = 1;

// setInterval(() => {
//     const colorSpan = document.getElementById("color");
//     if (color == 1) {
//         button.style.background = '#000';
//         colorSpan.innerText = "preto";
//     }
//     if (color == 2) {
//         button.style.background = '#987';
//         colorSpan.innerText = "cinza bege";
//     }
//     if (color == 3) {
//         button.style.background = '#567324';
//         colorSpan.innerText = "verde musgo";
//         color = 1;
//         return;
//     }
//     color ++;
// }, 1000);

// setInterval(() => {
// const background = document.getElementById("background");
// background.classList.toggle("dark-mode");
// }, 1000);

function onValidateUser() {
  const inpUser = document.getElementById("user");
  const user = inpUser.value;
  const userError = document.getElementById("userError");
  userError.classList.remove("show");
  const errors = [];

  if (!user) {
    errors.push({
      element: userError,
      message: "Usuário precisa ser informado",
    });
    // userError.innerText = "Usuário precisa ser informado";
    // userError.classList.add("show");
    // return;
  }

  if (user.indexOf(" ") >= 0) {
    errors.push({
      element: userError,
      message: "O usuário não pode conter espaços em branco",
    });
    // userError.innerText = "O usuário não pode conter espaços em branco";
    // userError.classList.add("show");
    // return;
  }

  if (errors.length > 0) {
    errors.forEach((error) => {
      error.element.innerText = error.message;
      error.element.classList.add("show");
    });
  }

  return errors.length == 0;
}

function onValidatePassword() {
  const inpPassword = document.getElementById("password");
  const passwordError = document.getElementById("passwordError");
  passwordError.classList.remove("show");
  const password = inpPassword.value;
  const errors = [];

  if (!password) {
    errors.push({
      element: passwordError,
      message: "A senha precisa ser informada",
    });
    // passwordError.innerText = "senha precisa ser informado";
    // passwordError.classList.add("show")
    // return
  }

  if (errors.length > 0) {
    errors.forEach((error) => {
      error.element.innerText = error.message;
      error.element.classList.add("show");
    });
  }

  return errors.length == 0;
}

function onClickSubmit(event) {
  event.preventDefault();

  if (!onValidatePassword(event) || !onValidateUser(event)) {
    return;
  }
  console.log("backend");
  // chamada backend
}

function onClickDarkMode(event) {
  console.log(event);

  const background = document.getElementById("background");

  background.classList.toggle("dark-mode");

  if (background.classList.contains("dark-mode")) {
    event.target.innerText = "default";
  } else event.target.innerText = "dark";
}

function onClickDropdown() {
  const menu = document.querySelector(".dropdown-content");
  // if (menu.style.display == "none") {
  //     menu.style.display = "block";
  // }else menu.style.display = "none";
  menu.classList.toggle("show");
}

window.onload = function () {
  const form = document.getElementById("form");
  form.addEventListener("submit", onClickSubmit);

  const background = document.getElementById("background");
  background.classList.toggle("dark-mode");

  const userInput = document.getElementById("user");
  userInput.addEventListener("blur", onValidateUser);

  const passwordInput = document.getElementById("password");
  passwordInput.addEventListener("blur", onValidatePassword);
  // const darkModeButton = document.getElementById("darkBtn");
  // darkModeButton.addEventListener("click", onClickDarkMode);

  // const dropdownMenu = document.getElementById("dropbtn");
  // dropdownMenu.addEventListener("click", onClickDropdown);
};
