function validateForm() {

    var fname = document.getElementById("fname").value;
    var lname = document.getElementById("lname").value;
    var address = document.getElementById("address").value;
    var city = document.getElementById("city").value;
    var postal_code = document.getElementById("postal_code").value;
    //var province = document.getElementById("province").value;
    var age = document.getElementById("age").value;
    var password = document.getElementById("password").value;
    var confirm = document.getElementById("confirm").value;
    var email = document.getElementById("email").value;


    document.getElementById("fnamemsg").innerHTML = "";
    document.getElementById("lnamemsg").innerHTML = "";
    document.getElementById("addressmsg").innerHTML = "";
    document.getElementById("citymsg").innerHTML = "";
    document.getElementById("postal_codemsg").innerHTML = "";
    //document.getElementById("provincemsg").innerHTML = "";
    document.getElementById("agemsg").innerHTML = "";
    document.getElementById("passwordmsg").innerHTML = "";
    document.getElementById("confirmmsg").innerHTML = "";
    document.getElementById("emailmsg").innerHTML = "";



    if (fname == "") {
        document.getElementById("fnamemsg").innerHTML = " First name cannot be left blank";
    }
    if (lname == "") {
        document.getElementById("lnamemsg").innerHTML = " Last name cannot be left blank";
    }
    if (address == "") {
        document.getElementById("addressmsg").innerHTML = " Address cannot be left blank";
    }
    if (city == "") {
        document.getElementById("citymsg").innerHTML = " City cannot be left blank";
    }






    //a0a0a0 format

    if (postal_code == "") {
        document.getElementById("postal_codemsg").innerHTML = " Postal code cannot be left blank";
    } else {
        if (/[a-zA-z]\d[a-zA-z]\d[a-zA-z]\d/.test(postal_code)) {
        } else {
            document.getElementById("postal_codemsg").innerHTML = " The postal code has to be in the a0a0a0 format";
        }
    }


        //if (province == "") {
    //    document.getElementById("provincemsg").innerHTML = "province cannot be empty";
    //} else {
    //var condition = 0;

    //for (index = 0; index < provincearr.length; index++) {
    //    if (provincearr[index] == province) {

    //        condition = 1;
    //        break;
    //    } else {

    //        condition = 0;

    //    }
    //}
    //if (condition == 1) {

    //} else {
    //    document.getElementById("provincemsg").innerHTML = "Province must be one of QC, ON, MN, SK, AB, BC";
    //}

    //}



        if (age == "") {
            document.getElementById("agemsg").innerHTML = " Age cannot be left blank";
        } else {
            if (age < 18) {
                document.getElementById("agemsg").innerHTML = " Age must be greater than 18";
            }
        }



        if (password == "") {
            document.getElementById("passwordmsg").innerHTML =" Password cannot be left blank";
        }


        else {
            if (/.{6,}/.test(password)) {
                //return (true)
            }
            else {
                document.getElementById("passwordmsg").innerHTML = " Passwords must contain at least 6 character";
            }
            if (/[A-Z]/.test(password)) {
            }
            else {
                document.getElementById("passwordmsg").innerHTML = " Passwords must contatin at least one uppercase letter";

            }
            if (/\d/.test(password)) {

            }
            else {
                document.getElementById("passwordmsg").innerHTML = " Passwords must contain at least one number";

            }
            if (/[~!@\#$%<>^&*]/.test(password)) {

            }
            else {
                document.getElementById("passwordmsg").innerHTML = " Passwords must have special character";
            }
        }






        if (confirm == "") {
            document.getElementById("confirmmsg").innerHTML = " Confirm password cannot be left blank";
        } else {
            if (confirm.localeCompare(password) == 0) {

            } else {
                document.getElementById("confirmmsg").innerHTML = " Password must match";
            }
        }




        if (email == "") {
            document.getElementById("emailmsg").innerHTML = " Email cannot be left blank";
        } else {
            if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)) {
                //return (true)
            } else {
                document.getElementById("emailmsg").innerHTML = " Please provide a valid email address";
            }

        }

    }





    function clearForm() {

        document.getElementById("fname").value = "";
        document.getElementById("lname").value = "";
        document.getElementById("address").value = "";
        document.getElementById("city").value = "";
        document.getElementById("postal_code").value = "";
        //document.getElementById("province").value = "";
        document.getElementById("age").value = "";
        document.getElementById("password").value = "";
        document.getElementById("confirm").value = "";
        document.getElementById("email").value = "";
    }
