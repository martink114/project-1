// Validate
// Use bootstrap validation: https://getbootstrap.com/docs/4.5/components/forms/#server-side


const formValidate = document.querySelector('#form-validate');
const formValidateTaskName = document.querySelector('#form-validate-task-name');

formValidate.addEventListener('submit', (event) => {
    event.preventDefault();

    if (formValidateTaskName.value.length > 7 && formValidateTaskName.value.length <=80) {
        formValidateTaskName.classList.add('is-valid');
        formValidateTasktName.classList.remove('is-invalid');
    } else {
        formValidateTaskName.classList.add('is-invalid');
        formValidateTaskName.classList.remove('is-valid');
    }
});

//
//
//
//VALIDATION FOR DATE PICKER NEEDS TO BE FIXED - SPECIFICALLY LINE 31
const formValidateDueDate = document.querySelector('input[type="date"]');
const today = new Date();
//console.log(today);

formValidate.addEventListener('submit', (event) => {
    event.preventDefault();

    if (formValidateDueDate > today) {
        formValidateDueDate.classList.add('is-valid');
        formValidateDueDate.classList.remove('is-invalid');
    } else {
        formValidateDueDate.classList.add('is-invalid');
        formValidateDueDate.classList.remove('is-valid');
    }
});

//
//
//

const formValidateAssignee = document.querySelector('#form-validate-assignee');

formValidate.addEventListener('submit', (event) => {
    event.preventDefault();

    if (formValidateAssignee.value.length > 7) {
        formValidateAssignee.classList.add('is-valid');
        formValidateAssignee.classList.remove('is-invalid');
    } else {
        formValidateAssignee.classList.add('is-invalid');
        formValidateAssignee.classList.remove('is-valid');
    }
});


const formValidateDescription = document.querySelector('#form-validate-task-description');

formValidate.addEventListener('submit', (event) => {
    event.preventDefault();

    if (formValidateDescription.value.length > 15) {        
        formValidateDescription.classList.add('is-valid');
        formValidateDescription.classList.remove('is-invalid');
    } else {
        formValidateDescription.classList.add('is-invalid');
        formValidateDescription.classList.remove('is-valid');
    }
});

 

 


