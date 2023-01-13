// The inputs, by default have a very light border (#E5E7EB), but we’ve included 2 variations. For starters, the password inputs should be given an error class.

// The other variation is the selected input, which should have a blue border and subtle box-shadow. This can be done with the :focus pseudo-class you’ve learned about in an earlier lesson.

// Checking that the password fields match each other requires javascript. Try to implement this if you feel confident, otherwise just validate each field separately.

const register = document.querySelector("#register");
const username = document.querySelector("#username");
const email = document.querySelector("#email");

register.addEventListener("submit", submitForm);

function submitForm(e) {
  e.preventDefault();

  const usernameValue = username.value;
  const emailValue = email.value;

  if (usernameValue === "") {
    username.style.border = "2px solid red";
  }

  if (emailValue === "") {
    email.style.border = "2px solid red";
  }
}