let signup = document.querySelector(".signup");
let login = document.querySelector(".login");
let slider = document.querySelector(".slider");
let formSection = document.querySelector(".form-section");
 
signup.addEventListener("click", () => {
    slider.classList.add("moveslider");
    formSection.classList.add("form-section-move");
});
 
login.addEventListener("click", () => {
    slider.classList.remove("moveslider");
    formSection.classList.remove("form-section-move");
});

function validateDEFAULT() {
  var username = document.getElementById("username").value;
  var password = document.getElementById("password").value;

  if (username == "" || password == "") {
    alert("Please enter both username and password.");
    alert("If you don't have an account, you must signup first.");
    return false;
  }

  // Add your authentication logic here

 // Retrieve the user credentials from Local Storage
 var storedUsername = localStorage.getItem('username');
 var storedPassword = localStorage.getItem('password');
  // For demonstration purposes, the code below just checks for a specific username and password

  if (username === "admin" && password === "password" || username === storedUsername && password === storedPassword ) {
    alert("Login successful!");
    window.location.href = "pages/Home.html"; // Redirect to success page
    return false; // Prevent form submission
  } else {
    alert("Invalid username or password.");
    alert("If you don't have an account, you must signup first.");
    return false;
  }
}


function validate() {
  var username = document.getElementById("username").value;
  var password = document.getElementById("password").value;

  if (username == "" || password == "") {
    alert("Please enter both username and password.");
    alert("If you don't have an account, you must signup first.");
    return false;
  }

  // Add your authentication logic here

 // Retrieve the user credentials from Local Storage
 var storedUsername = localStorage.getItem('username');
 var storedPassword = localStorage.getItem('password');
  // For demonstration purposes, the code below just checks for a specific username and password

  if (username === "admin" && password === "password" || username === storedUsername && password === storedPassword ) {
    alert("Login successful!");
    window.location.href = "Home.html"; // Redirect to success page
    return false; // Prevent form submission
  } else {
    alert("Invalid username or password.");
    alert("If you don't have an account, you must signup first.");
    return false;
  }
}

//for email signup validation if it has "@gmail.com"
function validateEmail(email) {
  var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}


// signup funtion
function signUp() {
  var username = document.getElementById("signupUsername").value;
  var password = document.getElementById("signupPassword").value;
  var email = document.getElementById("signupEmail").value;
  var confirm = document.getElementById("signupConfirm").value;
  


  // if content is none
  if (username == "" || password == "" || email == "" || confirm == "") {
    alert("Please fill-out the form");
    return false;
  }
  else if(confirm != password){
  alert("Password are not matched");
  return false;}

  if (!validateEmail(email)) {
    alert("Please enter a valid email address.");
    return;
  }

  else{

  // Save the user credentials in Local Storage

  // Save the user credentials in Local Storage
    localStorage.setItem('username', username);
    localStorage.setItem('password', password);

  alert("Sign up successful!");
  clearSignUpFields();
}
}

function clearLoginField() {
  document.getElementById("username").value = "";
  document.getElementById("password").value = "";
}
function clearSignUpFields() {
  document.getElementById("signupUsername").value = "";
  document.getElementById("signupPassword").value = "";
  document.getElementById("signupEmail").value = "";
  document.getElementById("signupConfirm").value = "";
}


//for login passsword checkbox function
function LoginPasswordVisibility() {
  var passwordField = document.getElementById("password");
  var showPasswordCheckbox = document.getElementById("showPassword");
  
  if (showPasswordCheckbox.checked) {
    passwordField.type = "text";
  } else {
    passwordField.type = "password";
  }
}

//for signup passsword checkbox function
function togglePasswordVisibility() {
  var passwordField = document.getElementById("signupPassword");
  var passwordField2 = document.getElementById("signupConfirm");
  var showPasswordCheckbox = document.getElementById("showPasswordsSignUp");
  
  if (showPasswordCheckbox.checked) {
    passwordField.type = "text";
    passwordField2.type = "text";
  } else {
    passwordField.type = "password";
    passwordField2.type = "password";

  }
}