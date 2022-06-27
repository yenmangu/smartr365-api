const firstNameEl = document.querySelector('#firstName');
const lastNameEl = document.querySelector('#lastName');
const emailEl = document.querySelector('#email');
const telephoneEl = document.querySelector('#telephone');

const form = document.querySelector('#apply');

const checkFirstName = () => {
    const firstName = firstNameEl.value.trim();
    if (!isRequired(firstName)) {
        showError(firstNameEl, 'First name cannot be blank');
    } else if (!isFirstNameValid(firstName)) {
        showError(firstNameEl, 'First name must only contain letters');
    } else {
        showSuccess(firstNameEl);
        valid = true;
    };
    return valid;
};

const checkLastName = () => {
    const lastName = lastNameEl.value.trim();
    if (!isRequired(lastName)) {
        showError(lastNameEl, 'Last name cannot be blank');
    } else if (!isLastNameValid(lastName)) {

        showError(lastName, 'Last name must only contain letters');

    } else {
        showSuccess(lastNameEl);
        valid = true;
    }
    return valid;
};

const checkEmail = () => {
    const email = emailEl.value.trim();
    if (!isRequired(email)) {
        showError(emailEl, 'E-mail field cannot be blank');

    } else if (!isEmailValid(email)) {
        showError(email, 'E-mail is not valid')
    } else {
        showSuccess(emailEl);
        valid = true;
    };
    return valid;
}

const checkTelephone = () => {
    const telephone = telephoneEl.value.trim();
    if (!isRequired(telephone)) {
        showError(telephone, 'Telephone field cannot be left blank');
    } else {
        showSuccess(telephoneEl);
        valid = true;
    }
    return valid;
};

// const accept = () => {
//     if (!document.querySelector('#accept').checked) {
//         showError(accept, 'You must accept the terms to continue')
//     } else {
//         showSuccess(accept);
//         valid = true;
//     }
//     return valid;
// };

const isFirstNameValid = (firstName) => {
    const re = /^[a-zA-Z]+$/;
    return re.test(firstName);
};

const isLastNameValid = (lastName) => {
    const re = /^[a-zA-Z]+$/;
    return re.test(lastName);
};


const isEmailValid = (email) => {
    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(email);
};

const isTelephoneValid = (telephone) => {
    const re = /[0 - 9] + $/;
    return re.test(telephone);
};

const isRequired = value => value === '' ? false : true;


const showError = (input, message) => {
    const formField = input.parentElement;
    formField.classList.remove('success');
    formField.classList.add('error');

    const error = formField.querySelector('small');
    error.textContent = message;
};

const showSuccess = (input) => {
    const formField = input.parentElement;

    formField.classList.remove('error');
    formField.classList.add('success');

    const error = formField.querySelector('small');
    error.textContent = '';
}



form.addEventListener('submit', function(e) {
    e.preventDefault();

    let isFirstNameValid = checkFirstName(),
        isLastNameValid = checkLastName(),
        isEmailValid = checkEmail(),
        isTelephoneValid = checkTelephone();


    let
        isFormValid = isFirstNameValid &&
        isLastNameValid &&
        isEmailValid &&
        isTelephoneValid;

    if (isFormValid) {

    }

});

const debounce = (fn, delay = 200) => {

    let timeoutId;

    return (...args) => {
        if (timeoutId) {
            clearTimeout(timeoutId);
        }
        timeoutId = setTimeout(() => {
            fn.apply(null, args)
        }, delay);
    };
};

form.addEventListener('input', debounce(function(e) {
    switch (e.target.id) {
        case 'firstName':
            checkFirstName();
            break;
        case 'lastName':
            checkLastName();
            break;
        case 'email':
            checkEmail();
            break;
        case 'telephone':
            checkTelephone();
            break;
    }
}));