function formblank() {
    let fname = document.getElementById("fname").value;
    let mname = document.getElementById("mname").value;
    let lname = document.getElementById("lname").value;
    let addr = document.getElementById("addr").value;
    let dob = document.getElementById("dob").value;
    let male = document.getElementById("male").checked;
    let female = document.getElementById("female").checked;
    let other = document.getElementById("other").checked;
    let experience = document.getElementById("experience").value;
    let mobile = document.getElementById("mobile").value;

    if (fname == "" &&
        mname == "" &&
        lname == "" &&
        addr == "" &&
        dob == "" &&
        male == false &&
        female == false &&
        other == false &&
        experience == -1 &&
        mobile == "") {

        document.getElementById("fname-msg").innerHTML = "Enter first name";

        document.getElementById("mname-msg").innerHTML = "Enter middle name";

        document.getElementById("lname-msg").innerHTML = "Enter last name";

        document.getElementById("addr-msg").innerHTML = "Enter address";

        document.getElementById("dob-msg").innerHTML = "Select date";

        document.getElementById("gender-msg").innerHTML = "Select gender";

        document.getElementById("experience-msg").innerHTML = "Select experience";

        document.getElementById("mobile-msg").innerHTML = "Enter Mobile no.";


        return false;
    }

}

function fnameblank() {
    let fname = document.getElementById("fname").value;

    if (fname == "") {
        document.getElementById("fname-msg").innerHTML = "Enter first name";
        return false;
    }
    else {
        document.getElementById("fname-msg").innerHTML = "";
        return false;
    }

}

function mnameblank() {
    let mname = document.getElementById("mname").value;

    if (mname == "") {
        document.getElementById("mname-msg").innerHTML = "Enter middle name";
        return false;
    }
    else {
        document.getElementById("mname-msg").innerHTML = "";
        return false;
    }

}

function lnameblank() {
    let lname = document.getElementById("lname").value;

    if (lname == "") {
        document.getElementById("lname-msg").innerHTML = "Enter last name";
        return false;
    }
    else {
        document.getElementById("lname-msg").innerHTML = "";
        return false;
    }

}
