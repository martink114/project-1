// Validate
// Use bootstrap validation: https://getbootstrap.com/docs/4.5/components/forms/#server-side


const newTaskForm = document.querySelector('#newTaskForm');
const newTaskNameInput = document.querySelector('#newTaskNameInput');
const newTaskDueDate = document.querySelector('#newTaskDueDate');
const newTaskAssignedTo = document.querySelector('#newTaskAssignedTo');
const newTaskDescription = document.querySelector('#newTaskDescription');


//////////////////___VALIDATION CODES___/////////////////////
newTaskForm.addEventListener('submit', (event) => {
    event.preventDefault();

    if (newTaskNameInput.value.length > 5 && newTaskNameInput.value.length <=80) {
        newTaskNameInput.classList.add('is-valid');
        newTaskNameInput.classList.remove('is-invalid');
    } else {
        newTaskNameInput.classList.add('is-invalid');
        newTaskNameInput.classList.remove('is-valid');
    }
});


const today = new Date();
today.setUTCHours(0,0,0,0);

newTaskForm.addEventListener('submit', (event) => {
    event.preventDefault();

    if (newTaskDueDate.valueAsNumber < today.getTime() || newTaskDueDate.value == 0) {
        newTaskDueDate.classList.remove('is-valid');
        newTaskDueDate.classList.add('is-invalid');

    } else {
        newTaskDueDate.classList.add('is-valid');
        newTaskDueDate.classList.remove('is-invalid');
    }
});


newTaskForm.addEventListener('submit', (event) => {
    event.preventDefault();

    if (newTaskAssignedTo.value.length > 2) {
        newTaskAssignedTo.classList.add('is-valid');
        newTaskAssignedTo.classList.remove('is-invalid');
    } else {
        newTaskAssignedTo.classList.add('is-invalid');
        newTaskAssignedTo.classList.remove('is-valid');
    }
});


newTaskForm.addEventListener('submit', (event) => {
    event.preventDefault();

    if (newTaskDescription.value.length > 10) {        
        newTaskDescription.classList.add('is-valid');
        newTaskDescription.classList.remove('is-invalid');
    } else {
        newTaskDescription.classList.add('is-invalid');
        newTaskDescription.classList.remove('is-valid');
    }
});
//////////////////VALIDATION CODES END///////////////////////


const task1 = new TaskManager();
const task2 = new TaskManager();
task1.addTask('Fix validation code for due date', 'Due date validation code is currently incomplete, refer to Nicks hint on slack \(pod2-code-busters channel\)', 'Diana', '11/09/2020');
task2.addTask('Add validation feature to \"Task Status\"', 'The element \'task status\' needs a validation feature as per Rubric', 'Irina', '18/09/2020');

