// window.onload = function() {
//     clearForm();
// };

window.addEventListener("pageshow", function(event) {

    if (event.persisted || (window.performance && window.performance.navigation.type === 2)) {
        clearForm();
    }

});

function validateForm() {
    debugger;
    var firstName = document.getElementById("firstName").value;
    var lastName = document.getElementById("lastName").value;
    var email = document.getElementById("inputEmail").value;
    var password = document.getElementById("password").value;
    var confirmPassword = document.getElementById("confirmPassword").value;
    var phoneNumber = document.getElementById("phoneNumber").value;
    var adhaarNumber = document.getElementById("adhaarNumber").value;
    var gender = document.querySelector('input[name="gender"]').value;
    var address = document.getElementById("address").value;
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

    if(!validEmail(email)) {
        document.getElementById("inputEmail").style.border = "1px solid red";
        document.getElementById("invalidEmail").innerHTML = "Invalid Email";
        isValid = false;
    }else {
        document.getElementById("inputEmail").style.border = "none";
        document.getElementById("invalidEmail").innerHTML = "";
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
        document.getElementById("invalidAddress").innerHTML = "Please Enter Address";
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

function clearForm() {
    // Reset the form
    document.getElementById("registrationForm").reset();
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

function validEmailReg(email) {
    var regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return regex.test(email);
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



