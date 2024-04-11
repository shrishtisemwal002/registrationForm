// Function for clearing the form on navigating back or forward 

window.addEventListener("pageshow", function(event) {

    if (event.persisted || (window.performance && window.performance.navigation.type === 2)) {
        clearForm();
    }

});

// this function will be invoked whenever the input is changed or the form is submitted 
function validateForm() {

    var firstName = document.getElementById("firstName").value;
    var lastName = document.getElementById("lastName").value;
    var email = document.getElementById("inputEmail").value;
    var password = document.getElementById("password").value;
    var confirmPassword = document.getElementById("confirmPassword").value;
    var phoneNumber = document.getElementById("phoneNumber").value;
    var adhaarNumber = document.getElementById("adhaarNumber").value;
    var gender = document.getElementsByName("gender");
    var dob = document.getElementById("dob").value;
    var address = document.getElementById("address").value;
    var pinCode = document.getElementById("pinCode").value;

    var isValid = true;

    // validation for first name

    // if (!isString(firstName)) {
    if (!isStringReg(firstName)) {
        document.getElementById("firstName").style.border = "1px solid red";
        document.getElementById("invalidFirstName").innerHTML = "Invalid First Name";
        isValid = false;
    } else {
        document.getElementById("firstName").style.border = "none";
        document.getElementById("invalidFirstName").innerHTML = "";
    }

    // validation for first name

    // if(isString(lastName)) {
    if (!isStringReg(lastName)) {
        document.getElementById("lastName").style.border = "1px solid red";
        document.getElementById("invalidLastName").innerHTML = "Invalid Last Name";
        isValid = false;
    } else {
        document.getElementById("lastName").style.border = "none";
        document.getElementById("invalidLastName").innerHTML = "";
    } 

    // validation for email

    // if(!validEmail(email)) {
    if(!validEmailReg(email)) {
        document.getElementById("inputEmail").style.border = "1px solid red";
        document.getElementById("invalidEmail").innerHTML = "Invalid Email";
        isValid = false;
    }else {
        document.getElementById("inputEmail").style.border = "none";
        document.getElementById("invalidEmail").innerHTML = "";
    } 

    // validation for password

    //if(!isValidPassword(password)){
    if(!isValidPasswordReg(password)){
        document.getElementById("password").style.border = "1px solid red";
        document.getElementById("invalidPassword").innerHTML = "Invalid Password";
        isValid = false;
    } else {
        document.getElementById("password").style.border = "none";
        document.getElementById("invalidPassword").innerHTML = "";
    }

    // validation for confirm password

    if(!(password === confirmPassword)){
        document.getElementById("confirmPassword").style.border = "1px solid red";
        document.getElementById("confirmPasswordMatch").innerHTML = "Password does not match";
        isValid = false;
    } else {
        document.getElementById("confirmPassword").style.border = "none";
        document.getElementById("confirmPasswordMatch").innerHTML = "";
    }

    // validation for phone number

    // if ((isNaN(phoneNumber) || phoneNumber.length !== 10) || (phoneNumber.includes("e"))) {
    if(!validPhoneNumber(phoneNumber)) {
        document.getElementById("phoneNumber").style.border = "1px solid red";
        document.getElementById("invalidPhoneNumber").innerHTML = "Invalid Phone Number";
        isValid = false;
    } else {
        document.getElementById("phoneNumber").style.border = "none";
        document.getElementById("invalidPhoneNumber").innerHTML = "";
    }

    // validation for adhaar number

    // if ((isNaN(adhaarNumber) || adhaarNumber.length !== 12) || (adhaarNumber.includes("e"))) {
    if(!validAdhaarNumber(adhaarNumber)) {
        document.getElementById("adhaarNumber").style.border = "1px solid red";
        document.getElementById("invalidAdhaarNumber").innerHTML = "Invalid Adhaar Number";
        isValid = false;
    } else {
        document.getElementById("adhaarNumber").style.border = "none";
        document.getElementById("invalidAdhaarNumber").innerHTML = "";
    }

    // validation for gender

    if(!validGender(gender)) {
        document.getElementById("invalidGender").innerHTML = "Please select a gender";
        isValid = false;
    } else {
        document.getElementById("invalidGender").innerHTML = "";
    }

    // validation for date of birth 

    if(!validDOB(dob)) {
        document.getElementById("dob").style.border = "1px solid red";
        document.getElementById("invalidDOB").innerHTML = "Invalid Date Of Birth";
        isValid = false;

    } else {
        document.getElementById("dob").style.border = "none";
        document.getElementById("invalidDOB").innerHTML = "";
    }

    // validation for address

    if(address.length == 0) {
        document.getElementById("address").style.border = "1px solid red";
        document.getElementById("invalidAddress").innerHTML = "Please Enter Address";
        isValid = false;
    } else {
        document.getElementById("address").style.border = "none";
        document.getElementById("invalidAddress").innerHTML = "";
    }

    // validation for pincode

    // if ((isNaN(pinCode) || pinCode.length !== 6) || (pinCode.includes("e"))) {
    if(!validPinCode(pinCode)) {
        document.getElementById("pinCode").style.border = "1px solid red";
        document.getElementById("invalidPinCode").innerHTML = "Invalid Pin Code";
        isValid = false;
    } else {
        document.getElementById("pinCode").style.border = "none";
        document.getElementById("invalidPinCode").innerHTML = "";
    }
    
    return isValid;
}


//for resetting the form 
function clearForm() {
    document.getElementById("registrationForm").reset();
}

// function for checking whether the input field is string only  

function isString(str) {
    var flag = true;
    for (var i = 0; i < str.length; i++) {
        var charCode = str.charCodeAt(i);
        if (!((charCode >= 65 && charCode <= 90) || (charCode >= 97 && charCode <= 122))) {
            flag = false;
            break;
        }
    }
    return flag;
}

// function to check the validity of the email input field 

function validEmail(email) {
    let atIndex = email.indexOf("@");
    if(email.length == 0) {
        return false;
    }
    if(atIndex == -1 || atIndex == 0 || atIndex == email.length-1) {
        return false;
    }
    if(email.includes("@",atIndex+1)) {
        return false;
    }

    if(email.indexOf(".") == -1 || email.indexOf(".") == email.length-1) {
        return false;
    }

    if(email.includes("..")){
        return false;
    }

    if((email.indexOf(".") +1) == atIndex) {
        return false;
    }

    return true;
}

// function for checking the validity of password 

function isValidPassword(password) {
    let num=false;
    let specialChar=false;
    let char = false;

    if(password.length<8) {
        return false;
    }

    for(let i=0;i<password.length;i++){
        if(password.charCodeAt(i) >=48 && password.charCodeAt(i)<=57) {
            num=true;
        }
        else if((password.charCodeAt(i) >= 65 && password.charCodeAt(i) <= 90) || (password.charCodeAt(i) >= 97 && password.charCodeAt(i) <= 122)) {
            char = true;
        }
        else {
            specialChar=true;
        }
    }
    return num && char && specialChar; 
}


//  function for checking the validity of date of birth

function validDOB(dob) {
    var currentDate = new Date();
    var inputDOB = new Date(dob);

    if(inputDOB > currentDate) {
        return false;
    }
    return true;
}

// function for checking gender radio button

function validGender(gender) {

    let isChecked = false;
    for (let i = 0; i < gender.length; i++) {
        if (gender[i].checked) {
            isChecked = true;
            break;
        }
    }
    return isChecked;

}

//regex functions

// for string input field

function isStringReg(str) {
    var regex = /^[a-zA-Z]+$/;
    return regex.test(str);

}

// for email 

function validEmailReg(email) {
    var regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return regex.test(email);
}

// for password validation 
function isValidPasswordReg(password) {
    var regex = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/;
    return regex.test(password);
}

// for phone number validtion

function validPhoneNumber(phoneNumber) {
    var regex = /^\d{10}$/;
    return regex.test(phoneNumber);
}

// for adhaar number validation 

function validAdhaarNumber(adhaarNumber) {
    var regex = /^\d{12}$/;
    return regex.test(adhaarNumber);
}

// for pincode validation 

function validPinCode(pinCode) {
    var regex = /^\d{6}$/;
    return regex.test(pinCode);
}

// for showing or hiding the password on clicking the eye icon

function showPassword(input) {
    var inputField = document.getElementById(input);

    if(inputField.type == "password") {
        inputField.type = "text";
    }
    else {
        inputField.type="password";
    }
}


