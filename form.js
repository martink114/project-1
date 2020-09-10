
// Validate
// Use bootstrap validation: https://getbootstrap.com/docs/4.5/components/forms/#server-side
// When the form with id "form-validate" is submitted,
// - prevent the default event from firing
// - check the length of the input with id "form-validate-first-name"
// - if the length is greater than 2, add "is-valid" class to the input, remove the "is-invalid" class
// - if the length if less than 2, add "is-invalid" class to the input, remove the "is-valid" class

const formValidate = document.querySelector('#form-validate');
const formValidateTaskName = document.querySelector('#form-validate-task-name');

formValidate.addEventListener('submit', (event) => {
    event.preventDefault();

    if (formValidateTaskName.value.length > 0 && formValidateTaskName.value.length <=8) {
        formValidateTaskName.classList.add('is-valid');
        formValidateTasktName.classList.remove('is-invalid');
    } else {
        formValidateTaskName.classList.add('is-invalid');
        formValidateTaskName.classList.remove('is-valid');
    }
});


//
const formValidateDescription = document.querySelector('#form-validate-task-description');

formValidate.addEventListener('submit', (event) => {
    event.preventDefault();

    if (formValidateDescription.value.length > 0 && formValidateDescription.value.length <=15) {
      
        
        formValidateDescription.classList.add('is-valid');
        formValidateDescription.classList.remove('is-invalid');
    } else {
        formValidateDescription.classList.add('is-invalid');
        formValidateDescription.classList.remove('is-valid');
    }
});

 // console.log ()

 
const formValidateDueDate = document.querySelector('#form-validate-due-date');

formValidate.addEventListener('submit', (event) => {
    event.preventDefault();

    if (formValidateDueDate.value.length > 0 ) {
        
        
        formValidateDueDate.classList.add('is-valid');
        formValidateDueDate.classList.remove('is-invalid');
    } else {
        formValidateDueDate.classList.add('is-invalid');
        formValidateDueDate.classList.remove('is-valid');
    }
});