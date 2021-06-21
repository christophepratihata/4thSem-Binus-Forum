var errorMessage = document.getElementById('errorMessage');

function validate() {
    if(!chkEmail())
        return;
    if(!chkPass())
        return;
    if(!chkConfirmPass())
        return;
    if(!chkRole())
        return;
    if(!chkPassword())
        return;
    errorMessage.innerHTML = "Register Success";
}

function chkEmail() {
    var email = document.getElementById('emailTxt').value;
    if(email == '') {
        errorMessage.innerHTML = 'Email must be filled';
        return false;
    }
    if(!email.endsWith('@binus.ac.id')) {
        errorMessage.innerHTML = 'Email must ends with "binus.ac.id"';
        return false;
    }
    return true;
}

function chkPass() {
    var password = document.getElementById('passwordTxt').value;
    if(password == '') {
        errorMessage.innerHTML = 'Password must be filled';
        return false;
    }
    if(password.length < 5) {
        errorMessage.innerHTML = 'Password must be more than 5 characters';
        return false;
    }
    return true;
}

function chkConfirmPass() {
    var confirmpassword = document.getElementById('confirmpasswordTxt').value;
    if(confirmpassword == '') {
        errorMessage.innerHTML = 'Confirm Password must be filled';
        return false;
    }
    return true;
}

function chkRole() {
    var gender = document.getElementById('roleTxt').value;
    if(gender == '') {
        errorMessage.innerHTML = 'Role must be choosen';
        return false;
    }
    return true;
}

function chkPassword() {
    var checkPass = document.getElementById('passwordTxt').value;
    var checkConfirmPass = document.getElementById('confirmpasswordTxt').value;

    if(checkPass == checkConfirmPass)
        return true;
    
    errorMessage.innerHTML = 'Password and Confirm Password must be the same';
    return false;
}