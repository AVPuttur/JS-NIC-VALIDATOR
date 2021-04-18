//P141496148506G
//S0808739500254
 let btn = document.getElementsByClassName("validate-nic-mru")[0];
 btn.onclick = validateNICMRU;


function validateNICMRU() {
    let fname = document.getElementsByClassName('validate-nic-fname')[0].value;
    let lname = document.getElementsByClassName('validate-nic-lname')[0].value;
    let dob = document.getElementsByClassName('validate-nic-dob')[0].value;

    console.log(fname + lname + dob);
    try {
        // statements
        if (getFirstCharacter(lname).match(/\d+/g)) throw "Numeric value not allowed.";
        if (getFirstCharacter(lname) == "") throw "Cannot be null.";

        console.log(getFirstCharacter(lname));
    } catch (err) {
        // statements
        console.error(err);
    }
}

function getFirstCharacter(lname) {
    // body...
    let trimCharacter = lname.replace(/\s+/g, '');
    let firstCharater = trimCharacter.charAt(0).toUpperCase();

    return firstCharater;
}