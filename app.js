let btn = document.getElementsByClassName("validate-nic-mru")[0];
btn.onclick = validateNICMRU;

function validateNICMRU() {
    //Get value from input
    let lname = document.getElementsByClassName('validate-nic-lname')[0].value;
    let dob = document.getElementsByClassName('validate-nic-dob')[0].value;
    let nic = document.getElementsByClassName('validate-nic-no')[0].value;
    //Check for correct data input
    try {
        // statements
        if (getFirstCharacter(lname).match(/\d+/g)) throw "Numeric value not allowed.";
        if (getFirstCharacter(lname) == "") throw "Cannot be null.";

    } catch (err) {
        // statements
        console.error(err);
    }
    //Check if the first character of the surname and the DOB match the one in NIC
    if ((getFirstCharacter(lname) == getFirstCharacter(nic)) && ((nic.slice(1, 7)) == (getDateOfBirth(dob)))) {
        regexExp(getFirstCharacter(nic) + getDateOfBirth(dob), nic);
    } else {
        alert("First character in surname or Date of Birth does not match in NIC.");
        document.getElementsByClassName("validate-nic-no")[0].style.borderColor = "red";
    }
}

function getFirstCharacter(value) {
    // body...
    let trimCharacter = value.replace(/\s+/g, '');
    let firstCharater = trimCharacter.charAt(0).toUpperCase();

    return firstCharater;
}

function getDateOfBirth(value) {
    // body... 
    let splitText = value.split('-');
    let year = splitText[0].substring(2);
    let day = splitText[2];
    let month = splitText[1];

    return day + month + year;
}

function regexExp(value, nic) {
    let regex = new RegExp('^' + value + "\\d{6}[A-Z0-9]$");
    if (regex.test(nic)) {
        document.getElementsByClassName("validate-nic-no")[0].style.borderColor = "";
    } else {
        alert("NIC is not valid. Check again.");
        document.getElementsByCla
        ssName("validate-nic-no")[0].style.borderColor = "red";
    }
}
