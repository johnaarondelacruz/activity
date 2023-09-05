// navbar

const menu = document.querySelector("#menu");
const header = document.querySelector("header");
menu.addEventListener("click", function () {
  header.classList.toggle("open");
});

// login

const form = document.getElementById("registerForm");

form.addEventListener("submit", function (event) {
  event.preventDefault();
  let username = document.getElementById("username");
  let password = document.getElementById("password");

  let hasUpperCase = false;
  let isEightCharactersLong = username.value.length >= 8;

  for (let index = 0; index < username.value.length; index++) {
    if (
      username.value.charAt(index) ===
      username.value.charAt(index).toUpperCase()
    ) {
      hasUpperCase = true;
    }
  }

  console.log(hasUpperCase);

  if (
    username.value &&
    isEightCharactersLong &&
    hasUpperCase &&
    password.value
  ) {
    console.log("Username detected");
    console.log(username.value);
    console.log(password.value);
    username.classList.remove("error");
  } else {
    username.classList.add("error");
  }
});
