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

