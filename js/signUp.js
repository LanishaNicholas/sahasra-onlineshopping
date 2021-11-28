$(document).ready(function() {             
    $('#registerbtn').on('click',function(){

        var $inputs    = $('#registerForm :input');
        var values     = {};

        $.each($('#registerForm').serializeArray(), function(i, field) {
            values[field.name] = field.value;
        });
        // console.log(values);
        var firstName       = values.firstName;
        var lastName        = values.lastName;
        var email           = values.email;
        var phoneNumber     = values.phoneNumber;
        var password        = values.password;
        var confPassword    = values.confPassword;
        var country         = values.country;
        var state           = values.state;
        var district        = values.district;
        var addressLine1    = values.addressLine1;
        var addressLine2    = values.addressLine2;
        var postalCode      = values.postalCode;

        /* Validation*/
        if(firstName == "")
            $('#fNameValidation').removeClass("d-none");
        else
            $('#fNameValidation').addClass("d-none");
        if(lastName == "")
            $('#lNameValidation').removeClass("d-none");
        else
            $('#lNameValidation').addClass("d-none");
        if(email == ""){
            $('#emailValidation').removeClass("d-none");
        }else{
            if(IsEmail(email)==false){
                $('#email1Validation').removeClass("d-none");
            }else{
                $('#emailValidation').addClass("d-none");
                $('#email1Validation').addClass("d-none");
            }
        }
        if(phoneNumber == ""){
            $('#phValidation').removeClass("d-none");
        }else{
            if(validatePhone(phoneNumber)==false){
                $('#ph1Validation').removeClass("d-none");
            }else{
                $('#phValidation').addClass("d-none");
                $('#ph1Validation').addClass("d-none");
            }
        }
        if(password != confPassword)
            $('#passwordValidation').removeClass("d-none");
        else
            $('#passwordValidation').addClass("d-none");
        if(postalCode == "")
            $('#postValidation').removeClass("d-none");
        else
            $('#postValidation').addClass("d-none");

        // save user details
        if(password == confPassword && email != ""){
            saveUserDetails(values);
        }

        event.preventDefault();
    });

    // email validation
    function IsEmail(email) {
        var regex = /^([a-zA-Z0-9_\.\-\+])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
        if(!regex.test(email)) {
            return false;
        }else{
            return true;
        }
    }

    // phone number validation
    function validatePhone(txtPhone) {
        // var a = document.getElementById(txtPhone).value;
        var filter = /^((\+[1-9]{1,4}[ \-]*)|(\([0-9]{2,3}\)[ \-]*)|([0-9]{2,4})[ \-]*)*?[0-9]{3,4}?[ \-]*[0-9]{3,4}?$/;
        if (filter.test(txtPhone)) {
            return true;
        }
        else {
            return false;
        }
    }

    // Save user details
    function saveUserDetails(values) {

        console.log(values);
        var firstName       = values.firstName;
        var lastName        = values.lastName;
        var email           = values.email;
        var phoneNumber     = values.phoneNumber;
        var password        = values.password;
        var confPassword    = values.confPassword;
        var country         = values.country;
        var state           = values.state;
        var district        = values.district;
        var addressLine1    = values.addressLine1;
        var addressLine2    = values.addressLine2;
        var postalCode      = values.postalCode;

        $.ajax({
                    type:"post",
                    url: "controller/signUp.php",
                    data:{
                            firstName          : firstName,
                            lastName           : lastName,
                            email              : email,
                            phoneNumber        : phoneNumber,
                            password           : password,
                            confPassword       : confPassword,
                            country            : country,
                            state              : state,
                            district           : district,
                            addressLine1       : addressLine1,
                            addressLine2       : addressLine2,
                            postalCode         : postalCode  
                    },
                    success:function(res){
                        // alert(res);
                        console.log(res);
                        console.log('Done');
                        // window.location.href='../view/login.html';
                    },
                    error:function(err){
                      // alert("something went wrong");
                      console.log(err);
                    }
                });
    }
});