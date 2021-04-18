//P141496148506G
//S0808739500254
 let btn = document.getElementsByClassName("validate-nic-mru")[0];
 btn.onclick = validateNICMRU;
 
function validateNICMRU() {
    let fname = document.getElementsByClassName('validate-nic-fname')[0].value;
    let lname = document.getElementsByClassName('validate-nic-lname')[0].value;
    let dob = document.getElementsByClassName('validate-nic-dob')[0].value;

    console.log(getDateOfBirth(dob));
    try {
        // statements
        if (getFirstCharacter(lname).match(/\d+/g)) throw "Numeric value not allowed.";
        if (getFirstCharacter(lname) == "") throw "Cannot be null.";

        let x = "S1112963950254";
        let c = "S";
		 let regex = /^[\b(c)\b]111296\d{6}[A-Z0-9]$/g;
		 if (regex.test(x)) {
		    console.log("Valid");
		} else {
		    console.log("Invalid");
		}

        console.log();
    } catch (err) {
        // statements
        console.error(err);
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

return day+month+year;
}