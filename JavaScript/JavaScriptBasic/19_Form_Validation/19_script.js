// Get HTML Elements
var usernameElement = document.querySelector('#username');
var emailElement = document.querySelector('#email');
var passwordElement = document.querySelector('#password');
var confirmPasswordElement = document.querySelector('#password_confirm');
// Get Error Msg Elements
var nameError = document.querySelector('#name_error');
var emailError = document.querySelector('#email_error');
var passwordError = document.querySelector('#password_error');
// Add Event Listeners for 'blur' event
usernameElement.addEventListener('blur',function() {
    clearErrorMessage(usernameElement,nameError);
});
emailElement.addEventListener('blur',function() {
    clearErrorMessage(emailElement,emailError);
});
passwordElement.addEventListener('blur',function() {
    clearErrorMessage(passwordElement,passwordError);
    clearErrorMessage(confirmPasswordElement,passwordError);
});
confirmPasswordElement.addEventListener('blur',function() {
    clearErrorMessage(confirmPasswordElement,passwordError);
    clearErrorMessage(passwordElement,passwordError);
});
function validate() {
    var result = true;
    // Required UserName validation
    if(usernameElement.value === ''){
        displayErrorMessage(usernameElement,nameError,'User Name is Required');
        result = false;
        return result;
    }
    // Username Length Validation
    if(usernameElement.value.length < 5){
        displayErrorMessage(usernameElement,nameError,'Add At least 5 letters');
        result = false;
        return result;
    }
    // Twitter UserName Pattern Validation
    if(!(usernameElement.value.match(/^[A-Za-z0-9_]{1,15}$/))){
        displayErrorMessage(usernameElement,nameError,"Pattern didn't match");
        result = false;
        return result;
    }
    // Required Email Validation
    if(emailElement.value === ''){
        displayErrorMessage(emailElement,emailError,'Email is Required');
        result = false;
        return result;
    }
    // Required Password Validation
    if(passwordElement.value === ''){
        displayErrorMessage(passwordElement,passwordError,'Password Required');
        result = false;
        return result;
    }
    // Required Confirm Password Validation
    if(confirmPasswordElement.value === ''){
        displayErrorMessage(confirmPasswordElement,passwordError,'Confirm Password Required');
        result = false;
        return result;
    }
    // Password Match Validation
    if(passwordElement.value !== confirmPasswordElement.value){
        displayErrorMessage(confirmPasswordElement,passwordError,'Passwords did not Match');
        passwordElement.style.backgroundColor = 'lightsalmon';
        passwordElement.style.boxShadow = '0 0 15px red';
        passwordElement.style.borderColor = 'red';
        result = false;
        return result;
    }
    if(result === false){
        return result;
    }
    else{
        alert('Form Submitted Successfully');
        return true;
    }
}
// Display Error Message Logic
function displayErrorMessage(inputElement,messageElement,message) {
    inputElement.style.backgroundColor = 'lightsalmon';
    inputElement.style.boxShadow = '0 0 15px red';
    inputElement.style.borderColor = 'red';
    messageElement.textContent = message;
    messageElement.style.color = 'red';
}
// Clear Error Message Logic
function clearErrorMessage(inputElement,messageElement) {
    inputElement.style.backgroundColor = 'white';
    inputElement.style.boxShadow = '';
    inputElement.style.borderColor = 'gray';
    messageElement.textContent = '';
}