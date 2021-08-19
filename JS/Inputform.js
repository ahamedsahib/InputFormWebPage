var text = document.querySelector("#name")
var texterror = document.querySelector("#nameerror");
text.addEventListener("input", function () {
    let namePattern=RegExp('^[A-Z]{1}[a-z]{2,}$');//regex pattern to validate name
        if(namePattern.test(text.value))
        {
            texterror.textContent='';
        }
        else
        {
            texterror.textContent= "Incorrect name";//throw error if invalid
        }
});

const salary = document.querySelector("#salary");
const output = document.querySelector("#salary-output");
output.textContent = salary.value;
salary.addEventListener("input", function () {
    output.textContent = salary.value;
});
var email = document.querySelector("#email");
const emailError = document.querySelector("#emailError");
email.addEventListener("input", function () {
    let emailPattern = /^[a-z]+([+.-_]{1}\w+)?@[a-z0-9]+\.[a-z]{2,3}(\.[a-z]{2})?$/;
    if(emailPattern.test(email.value))
        emailError.textContent='';
    else
        emailError.textContent='Invalid Email Id';
});

var phone = document.querySelector("#phone");
const phoneError = document.querySelector("#phoneError");
phone.addEventListener("input", function () {
    let phonePattern = RegExp("[0-9]{1,2}[ ][0-9]{10}$");
    if(phonePattern.test(phone.value))
        phoneError.textContent='';
    else
        phoneError.textContent='Invalid Phone Number';
});