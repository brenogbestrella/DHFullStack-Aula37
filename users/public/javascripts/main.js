// const button = document.getElementById("loginBtn");
// console.log("button");

// const form = document.getElementById("form");
// console.log("form");

// let color = 1;

// setInterval(() => {
//   const colorSpan = document.getElementById("color");
//   if (color == 1) {
//     button.style.background = "#000";
//     colorSpan.innerText = "preto";
//   }
//   if (color == 2) {
//     button.style.background = "#987";
//     colorSpan.innerText = "cinza bege";
//   }
//   if (color == 3) {
//     button.style.background = "#567324";
//     colorSpan.innerText = "verde musgo";
//     color = 1;
//     return;
//   }
//   color++;
// }, 1000);

// setInterval(() => {
//   const background = document.getElementById("background");
//   background.classList.toggle("dark-mode");
// }, 1000);

function onClickSubmit(event) {
  event.preventDefault();
  const inpUser = document.getElementById("user");
  const inpPassword = document.getElementById("password");
  window.alert(`Usuario: ${inpUser.value}. Senha: ${inpPassword.value}`);
}

function onClickDarkMode(event) {
  const background = document.getElementById("background");
  background.classList.toggle("dark-mode");

  if (background.classList.contains("dark-mode")) {
    event.target.innerText = "Default";
  } else event.target.innerText = "Dark";
}

function onClickDropDown() {
  const menu = document.querySelector(".dropdown-content");
  // if (menu.style.,display == "none") {
  //   menu.style.display = "block";
  // } else menu.style.,display == "none";
  menu.classList.toggle("show");
}

window.onload = function () {
  const form = document.getElementById("form");
  form.addEventListener("submit", onClickSubmit);

  const darkModeButton = document.getElementById("darkBtn");
  darkModeButton.addEventListener("click", onClickDarkMode);

  const dropdownMenu = document.getElementById("dropbtn");
  dropdownMenu.addEventListener("click", onClickDropDown);
};
