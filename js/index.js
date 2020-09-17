// Initialize a new TaskManager with currentId set to 0
const newTasks = new TaskManager(0);

// Select the New Task Form
const newTaskForm = document.querySelector('#newTaskForm');




// Select the inputs
const newTaskNameInput = document.querySelector('#newTaskNameInput');
const newTaskDueDate = document.querySelector('#newTaskDueDate');
const newTaskAssignedTo = document.querySelector('#newTaskAssignedTo');
const newTaskDescription = document.querySelector('#newTaskDescription');



//////////////////___VALIDATION CODES___/////////////////////
// Add an 'onsubmit' event listener
newTaskForm.addEventListener('submit', (event) => {
    event.preventDefault();  // Prevent default action

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
newTaskForm.addEventListener('submit', (event) => {
    event.preventDefault(); 

// Get the values of the inputs
const taskName = newTaskNameInput.value;
const taskDescription = newTaskDescription.value;
const assignedTo = newTaskAssignedTo.value;
const dueDate = newTaskDueDate.value;

// Add the task to the task manager
newTasks.addTask(taskName, taskDescription, assignedTo, dueDate);

// Clear the form
newTaskNameInput.value = '';
newTaskDescription.value = '';
newTaskAssignedTo.value = '';
newTaskDueDate.value = '';

console.log(newTasks);
});


/*const newTask = new TaskManager();

newTask.addTask('Fix validation code for due date', 'Due date validation code is currently incomplete, refer to Nicks hint on slack \(pod2-code-busters channel\)', 'Diana', '11/09/2020');

newTask.addTask('Add validation feature to \"Task Status\"', 'The element \'task status\' needs a validation feature as per Rubric', 'Irina', '18/09/2020');

newTasks.addTask('fix status button on New Task Form', 'Status button does not work', 'Diana', '30/09/2020');*/
