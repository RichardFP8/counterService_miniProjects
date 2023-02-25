"use strict";

window.onload = function () {
    const submitButton = document.querySelector("#submitForm");
    // submitButton.addEventListener("click", validateForm);
    submitButton.onclick = validateForm;
}
function validateForm() {
    // get all user inputs
    const getUsername = document.getElementById("userName");
    const passwordInputElement = document.getElementById("password");
    const getPassword = passwordInputElement.value;
    const confirmPassword = document.getElementById("confirmpsswrd");
    const getEmployeeID = document.getElementById("employeeID");
    const userRole = document.querySelector("input[name='userRole']:checked");
    // regex for the password requirements
    const specialChars = /[!@#$%^&*()]+/,
        upperCaseChars = /[A-Z]+/,
        lowerCaseChars = /[a-z]+/,
        numChars = /\d+/;
    const isValidPassword = specialChars.test(getPassword) && upperCaseChars.test(getPassword) && numChars.test(getPassword) && lowerCaseChars.test(getPassword);

    // validate username met requirements
    const usernameIsSixChars = getUsername.value.length >= 6;
    // // validate that either 15-char password and requirements for the min-length password
    const validatePassword = (getPassword.length >= 15) || (getPassword.length >= 8 && isValidPassword);
    const errorStyles = "red solid 3px";

    if (!usernameIsSixChars) {
        getUsername.style.border = errorStyles;
    } else {
        getUsername.style.border = "none";
    }
    if (!validatePassword) {
        passwordInputElement.style.border = errorStyles;
    } else {
        passwordInputElement.style.border = "none";
    }
    if (!userRole) {
        document.querySelector("fieldset").style.border = errorStyles;
    } else {
        document.querySelector("fieldset").style.border = "none";
    }
    if (getPassword !== confirmPassword.value) {
        passwordInputElement.style.border = errorStyles;
        confirmPassword.style.border = errorStyles
    } else {
        passwordInputElement.style.border = "none";
        confirmPassword.style.border = "none";
    }
    if(getEmployeeID.value !== "FO1234"){
        getEmployeeID.style.border = errorStyles;
    } else {
        getEmployeeID.style.border = "none";
    }
    return false;
}