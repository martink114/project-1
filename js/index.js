// Validate
// Use bootstrap validation: https://getbootstrap.com/docs/4.5/components/forms/#server-side


const formValidate = document.querySelector('#form-validate');
const formValidateTaskName = document.querySelector('#form-validate-task-name');
const formValidateDueDate = document.querySelector('input[type="date"]');
const formValidateAssignee = document.querySelector('#form-validate-assignee');
const formValidateDescription = document.querySelector('#form-validate-task-description');


//////////////////////////////////___VALIDATION CODES___////////////////////////////////////
formValidate.addEventListener('submit', (event) => {
    event.preventDefault();

    if (formValidateTaskName.value.length > 7 && formValidateTaskName.value.length <=80) {
        formValidateTaskName.classList.add('is-valid');
        formValidateTaskName.classList.remove('is-invalid');
    } else {
        formValidateTaskName.classList.add('is-invalid');
        formValidateTaskName.classList.remove('is-valid');
    }
});


//VALIDATION FOR DATE PICKER NEEDS TO BE FIXED 
const today = new Date();

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

/////////////////////////////VALIDATION CODES END/////////////////////////


const task1 = new TaskManager();
const task2 = new TaskManager();
task1.addTask('Fix validation code for due date', 'Due date validation code is currently incomplete, refer to Nicks hint on slack \(pod2-code-busters channel\)', 'Diana', '11/09/2020');
task2.addTask('Add validation feature to \"Task Status\"', 'The element \'task status\' needs a validation feature as per Rubric', 'Irina', '18/09/2020');
