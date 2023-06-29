function handleFormSubmit(event){
    event.preventDefault();

    var form = document.getElementById("form_signup");
    var email = form.elements["email_input"].value;
    var error_label = document.getElementById("error_label");
    var email_input = document.getElementById("email_input");
    var newsletter_signup = document.getElementById("newsletter_signup");
    var email_span = document.getElementById("email_span");
    var newsletter_signup_success = document.getElementById("newsletter_signup_success");

    if(validateEmail(email)){
        console.log("email valide")
        newsletter_signup.style.display = "none";
        email_span.textContent = email;
        newsletter_signup_success.style.display = "flex";
    } else {
        console.log("email non valide")
        error_label.style.display = "block"
        email_input.classList.add("error")

    }

}

const email_input = document.getElementById("email_input");
const error_label = document.getElementById("error_label");

email_input.addEventListener('focus', function() {
    this.classList.remove('error');
    error_label.style.display = "none";
});

function validateEmail(email) {
    var re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
}
