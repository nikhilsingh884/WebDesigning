
// ---------fname validation--------------

function fnamevalid() {
    let fname = document.getElementById("fname").value;
    let regex = /^[a-zA-Z]*$/;
    if (regex.test(fname)) {
        document.getElementById("fname-msg-2").innerHTML = "";
    }
    else {
        document.getElementById("fname-msg-2").innerHTML = "Only letters are allowed.";

    }
}

// ---------mname validation--------------

function mnamevalid() {
    let mname = document.getElementById("mname").value;
    let regex = /^[a-zA-Z]*$/;
    if (regex.test(mname)) {
        document.getElementById("mname-msg-2").innerHTML = "";
    }
    else {
        document.getElementById("mname-msg-2").innerHTML = "Only letters are allowed.";

    }
}

// ---------lname validation--------------

function lnamevalid() {
    let lname = document.getElementById("lname").value;
    let regex = /^[a-zA-Z]*$/;
    if (regex.test(lname)) {
        document.getElementById("lname-msg-2").innerHTML = "";
    }
    else {
        document.getElementById("lname-msg-2").innerHTML = "Only letters are allowed.";

    }
}

// ---------lname validation--------------

function addrvalid() {
    let addr = document.getElementById("addr").value;
    if (addr.length < 20) {
        document.getElementById("addr-msg-2").innerHTML = "Atleast 20 characters are required";

    }
}