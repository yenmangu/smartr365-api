const formFirstName = document.getElementsByTagName('form')[1];
const firstName = document.getElementById('firstName');
const firstNameError = document.querySelector('#firstName + span.firstNameError');

firstName.addEventListener('input', function(event) {
    if
})

const formEmail = document.getElementsByTagName('form')[2];

const email = document.getElementById("email");
const emailError = document.querySelector('#email + span.email-error');

email.addEventListener('input', function(event) {
    // each time user types, we check if the form fields are valid.

    if (email.validity.valid) {
        // In case there is an error message visible, if the field 
        // is valid, we remove the error message
        emailError.className = 'email-error'; // reset the visual stat of the message
    } else {
        // If there is still an error, show the correct error
        showError();
    }
});

formEmail.addEventListener('submit', function(event) {
    // If the email is valid, we let the form submit

    if (!email.validity.valid) {
        // if it isnt, we display an appropriate error message
        showError();
        // then we prevent the form from being sent by cancelling the event
        eevent.preventDefault();

    }
});

function showError() {
    if (email.validity.valueMissing) {
        //if the field is empty,
        // display the following error message.
        emailError.textContent = "You need to enter an e-mail address.";

    } else if (email.validity.typeMismatch) {
        //if the field doesnt contain an email address, 
        // display the following error message
        emailError.textContent = "Entered value needs to be an e-mail address";
        //if the data is too short, display the following error message.
        emailError.textContent = `E-mail should be at least ${email.minlength}
        characters, you have only entered ${email.value.length}.`
    }
}