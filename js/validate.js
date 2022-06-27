// first name validation

const formFirstName = document.getElementsByTagName('form')[0];
const firstName = document.getElementById('firstName');
const firstNameError = document.querySelector('#firstName + span.firstNameError');

firstName.addEventListener('input', function(event) {
    if (firstName.validity.valid) {
        firstNameError.className = 'firstNameError';
    } else {
        showFirstError();
    }
});

formFirstName.addEventListener('submit', function(event) {
    if (!firstName.validity.valid) {
        showFirstError();
        event.preventDefault();
    }
});

function showFirstError() {
    if (firstName.validity.valueMissing) {
        firstNameError.textContent = "You need to enter your first name";
    } else if (firstName.validity.typeMismatch) {
        firstNameError.textContent = "You must only enter letters";
    }
};


// last name validation

const formLastName = document.getElementsByTagName('form')[1];
const lastName = document.getElementById('lastName');
const lastNameError = document.querySelector('#lastName + span.lastNameError');

lastName.addEventListener('input', function(event) {
    if (lastName.validity.valid) {
        lastNameError.className = 'lastNameError';
    } else {
        showLastError();
    }
});

formLastName.addEventListener('submit', function(event) {
    if (!lastName.validity.valid) {
        showLastError();
        event.preventDefault();
    }
});

function showLastError() {
    if (lastName.validity.valueMissing) {
        lastNameError.textContent = "You need to enter your last name";
    } else if (lastName.validity.typeMismatch) {
        lastNameError.textContent = "You must only enter letters";
    }
};

// email validation

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
        event.preventDefault();

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
};

// telephone number validation

const formTelephone = document.getElementsByTagName('form')[3];
const telephone = document.getElementById('telephone');
const telephoneError = document.querySelector('#telephone + span.telephoneError');

telephone.addEventListener('input', function(event) {
    if (telephone.validity.valid) {
        telephoneError.className = 'telephoneError';
    } else {
        showTelephoneError();
    }
});

formTelephone.addEventListener('submit', function(event) {
    if (!telephone.validity.valid) {
        showTelephoneError();
        event.preventDefault();
    }
});

function showTelephoneError() {
    if (telephone.validity.valueMissing) {
        telephoneError.textContent = "You need to enter your telephone number";
    } else if (telephone.validity.typeMismatch) {
        telephoneError.textContent = "You must only enter numbers";
    }
};