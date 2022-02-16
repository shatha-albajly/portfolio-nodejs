// selectors
const hamburger = document.querySelector(".hamburger");
const navlinks = document.querySelector(".nav-links");
const links = document.querySelectorAll(".nav-links li");

const contactForm = document.getElementById("contact-form");
const username = document.getElementById("name");
const email = document.getElementById("email");
const message = document.getElementById("message");

// clicks

// the navbar hamburger
hamburger.addEventListener("click", () => {
  navlinks.classList.toggle("open");
  links.forEach((link) => {
    link.classList.add("fade");
  });
});

links.forEach(function (link) {
  link.addEventListener("click", function () {
    console.log(link);
    navlinks.classList.toggle("open");
  });
});

// contact form validation
contactForm.addEventListener("submit", (e) => {
  e.preventDefault();
  const usernameValue = username.value.trim();
  const emailValue = email.value.trim();
  const messageValue = message.value.trim();

  // validate username
  if (usernameValue === "") {
    setError(username, "The name can't be empty");
  } else if (!(usernameValue.length > 3 && usernameValue.length < 10)) {
    setError(username, "The name must has 3-10 characters long");
  } else {
    setSucess(username);
  }

  // validate email
  if (emailValue === "") {
    setError(email, "The email can't be empty");
  } else if (isEmail(emailValue)) {
    setSucess(email);
  } else {
    setError(email, "Enter a valid email");
  }

  // validate message
  if (messageValue === "") {
    setError(message, "The message can't be empty");
  } else if (!(messageValue.length > 20)) {
    console.log(messageValue.length);

    setError(message, "The message must has more than 20 characters long");
  } else {
    setSucess(message);
  }
});

// functions

// show error message
function setError(item, message) {
  const inputBox = item.parentElement;
  const messageText = inputBox.querySelector("small");
  messageText.innerText = message;
  inputBox.classList.add("fail");
  inputBox.classList.remove("success");
}

// show success
function setSucess(item) {
  const inputBox = item.parentElement;
  inputBox.classList.add("success");
  inputBox.classList.remove("fail");
}

// check if it is correct email
function isEmail(email) {
  return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
    email
  );
}

const content = document.body;

const darkMode = document.getElementById("dark-change");
darkMode.addEventListener("click", function () {
  darkMode.classList.toggle("active");
  content.classList.toggle("dark-theme");
  content.classList.toggle("night");
});

// var angle = 0;
// img = document.getElementById("img-container");
// window.addEventListener("DOMContentLoaded", function () {
//   angle = (angle + 90) % 360;
//   img.className = "rotate" + angle;
//   console.log(angle);
// });

// var angle = 0,
//   img = document.getElementById("img-container");
// document.getElementById("button").onclick = function () {
//   angle = (angle + 90) % 360;
//   img.className = "rotate" + angle;
// };
