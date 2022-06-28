const firstNameEl = document.querySelector('#firstName');
const lastNameEl = document.querySelector('#lastName');
const emailEl = document.querySelector('#email');
const telephoneEl = document.querySelector('#telephone');
// const checkBox = document.getElementById("accept");
// const submitBtn = document.getElementById("submitButton");

const form = document.querySelector('#newLead');

const checkFirstName = () => {
    let valid = false;

    const firstName = firstNameEl.value.trim();

    if (!isRequired(firstName)) {
        showError(firstNameEl, 'First name cannot be left blank');
    } else if (!isFirstNameValid(firstName)) {
        showError(firstNameEl, 'First name must only contain letters');
    } else {
        showSuccess(firstNameEl);
        valid = true;
    };
    return valid;
};

const checkLastName = () => {
    let valid = false;

    const lastName = lastNameEl.value.trim();

    if (!isRequired(lastName)) {
        showError(lastNameEl, 'Last name cannot be left blank');
    } else if (!isLastNameValid(lastName)) {

        showError(lastNameEl, 'Last name must only contain letters');

    } else {
        showSuccess(lastNameEl);
        valid = true;
    }
    return valid;
};

const checkEmail = () => {
    let valid = false;
    const email = emailEl.value.trim();
    if (!isRequired(email)) {
        showError(emailEl, 'Email field cannot be left blank');
    } else if (!isEmailValid(email)) {
        showError(emailEl, 'Email is not valid')
    } else {
        showSuccess(emailEl);
        valid = true;
    }
    return valid;
};
const checkTelephone = () => {
    let valid = false;
    const telephone = telephoneEl.value.trim();
    if (!isRequired(telephone)) {
        showError(telephoneEl, 'Telephone field cannot be left blank');
    } else if (!isTelephoneValid(telephone)) {
        showError(telephoneEl, 'Number is not valid')
    } else {
        showSuccess(telephoneEl);
        valid = true;
    }
    return valid;
};


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
    const re = /^[0-9]+$/;
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
    
//final validation for the form
const checkBox = document.getElementById("accept");
const submitBtn = document.getElementById("submitButton");
const evalResult = "";
const hiddenBox = document.getElementById("check-container");

hiddenBox.style.visibility = "hidden";

function eval () {
   
    let isFirstNameValid = checkFirstName(),
    isLastNameValid = checkLastName(),
    isEmailValid = checkEmail(),
    isTelephoneValid = checkTelephone();

    let isFormValid = 
    isFirstNameValid &&
    isLastNameValid &&
    isEmailValid &&
    isTelephoneValid;

    if (isFormValid) {
        evalResult = true;
    }
     return evalResult;   
};

if (evalResult === true) {
    hiddenBox.style.visibility = "visible"
}

checkBox.addEventListener("click", function(){
    if (checkBox.checked == true) {
        submitBtn.disabled = false;
    } else {
        submitBtn.disabled = true;
    }
}); 

form.addEventListener('submit', function(e) {

    e.preventDefault();

    const formData = new FormData(this);
   
    fetch('post.php', {

        method: 'post',
        body: formData

    }).then(function(response) {
        return response.text();
    }).then(function(text) {
        console.log(text);
    }).catch(function(error) {
        console.log(error);
    });

});


// real time validation
function debounce(fn, delay = 500) {

    let timeoutId;

    return (...args) => {
        if (timeoutId) {
            clearTimeout(timeoutId);
        }
        timeoutId = setTimeout(() => {
            fn.apply(null, args);
        }, delay);
    };
}
//event delegation
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
