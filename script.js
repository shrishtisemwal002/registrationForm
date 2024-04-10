
function validateForm() {
    var registrationForm = document.getElementById("registrationForm").value;
    var firstName = document.getElementById("firstName").value;
    var lastName = document.getElementById("lastName").value;
    var password = document.getElementById("password").value;
    var confirmPassword = document.getElementById("confirmPassword").value;
    var phoneNumber = document.getElementById("phoneNumber").value;
    var adhaarNumber = document.getElementById("adhaarNumber").value;
    var address = document.querySelector('textarea[name="address"]')
    var pinCode = document.getElementById("pinCode").value;

    var isValid = true;

    // if (!isString(firstName)) {
    if (!isStringReg(firstName)) {
        document.getElementById("firstName").style.border = "1px solid red";
        document.getElementById("invalidFirstName").innerHTML = "Invalid First Name";
        isValid = false;
    } else {
        document.getElementById("firstName").style.border = "none";
        document.getElementById("invalidFirstName").innerHTML = "";
    }

    if (!isStringReg(lastName)) {
        document.getElementById("lastName").style.border = "1px solid red";
        document.getElementById("invalidLastName").innerHTML = "Invalid Last Name";
        isValid = false;
    } else {
        document.getElementById("lastName").style.border = "none";
        document.getElementById("invalidLastName").innerHTML = "";
    } 

    //if(!isValidPassword(password)){
    if(!isValidPasswordReg(password)){
        document.getElementById("password").style.border = "1px solid red";
        document.getElementById("invalidPassword").innerHTML = "Invalid Password";
        isValid = false;
    } else {
        document.getElementById("password").style.border = "none";
        document.getElementById("invalidPassword").innerHTML = "";
    }

    if(!(password === confirmPassword)){
        document.getElementById("confirmPassword").style.border = "1px solid red";
        document.getElementById("confirmPasswordMatch").innerHTML = "Password does not match";
        isValid = false;
    } else {
        document.getElementById("confirmPassword").style.border = "none";
        document.getElementById("confirmPasswordMatch").innerHTML = "";
    }

    // if ((isNaN(phoneNumber) || phoneNumber.length !== 10) || (phoneNumber.includes("e"))) {
    if(!validPhoneNumber(phoneNumber)) {
        document.getElementById("phoneNumber").style.border = "1px solid red";
        document.getElementById("invalidPhoneNumber").innerHTML = "Invalid Phone Number";
        isValid = false;
    } else {
        document.getElementById("phoneNumber").style.border = "none";
        document.getElementById("invalidPhoneNumber").innerHTML = "";
    }

    // if ((isNaN(adhaarNumber) || adhaarNumber.length !== 12) || (adhaarNumber.includes("e"))) {
    if(!validAdhaarNumber(adhaarNumber)) {
        document.getElementById("adhaarNumber").style.border = "1px solid red";
        document.getElementById("invalidAdhaarNumber").innerHTML = "Invalid Adhaar Number";
        isValid = false;
    } else {
        document.getElementById("adhaarNumber").style.border = "none";
        document.getElementById("invalidAdhaarNumber").innerHTML = "";
    }

    if(address.length == 0) {
        document.getElementById("address").style.border = "1px solid red";
        document.getElementById("invalidAddress").innerHTML = "Enter Address";
        isValid = false;
    } else {
        document.getElementById("address").style.border = "none";
        document.getElementById("invalidAddress").innerHTML = "";
    }

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

//regex
function isStringReg(str) {
    var regex = /^[a-zA-Z]+$/;
    return regex.test(str);

}

function isValidPasswordReg(password) {
    var regex = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/;
    return regex.test(password);
}

function validPhoneNumber(phoneNumber) {
    var regex = /^\d{10}$/;
    return regex.test(phoneNumber);
}

function validAdhaarNumber(adhaarNumber) {
    var regex = /^\d{12}$/;
    return regex.test(adhaarNumber);
}

function validPinCode(pinCode) {
    var regex = /^\d{6}$/;
    return regex.test(pinCode);
}

function clear() {
    registrationForm.reset();
}


