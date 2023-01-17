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

// Checking that the password fields match each other requires javascript. Try to implement this if you feel confident, otherwise just validate each field separately.

// function verifyPassword() {
//     let pw = document.getElementById("pswd").value;
//     //check empty password field
//     if(pw == "") {
//        document.getElementById("message").innerHTML = "**Fill the password please!";
//        return false;
//     }
   
//    //minimum password length validation
//     if(pw.length < 8) {
//        document.getElementById("message").innerHTML = "**Password length must be atleast 8 characters";
//        return false;
//     }
  
//   //maximum length of password validation
//     if(pw.length > 15) {
//        document.getElementById("message").innerHTML = "**Password length must not exceed 15 characters";
//        return false;
//     } else {
//        alert("Password is correct");
//     }
//   }

// Validate password function

// function validate() {
//     var password = document.getElementById("password").value;
//     var confirmPassword = document.getElementById("ConfirmPassword").value;
//     if (password != confirmPassword) {
//         alert("Passwords do not match.");
//         return false;
//     }
//     return true;
// }