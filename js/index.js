// Initialize a new TaskManager with currentId set to 0
const taskManager = new TaskManager(0);

taskManager.load(); 

taskManager.render(); 

// Select the New Task Form
const newTaskForm = document.querySelector('#newTaskForm');

newTaskForm.addEventListener('submit', (event) => {
    event.preventDefault(); 

    const newTaskNameInput = document.querySelector('#newTaskNameInput');
    const newTaskDueDate = document.querySelector('#newTaskDueDate');
    const newTaskAssignedTo = document.querySelector('#newTaskAssignedTo');
    const newTaskDescription = document.querySelector('#newTaskDescription');


 ////////////////////// VALIDATION STARTS////////////////////
    if (newTaskNameInput.value.length > 5 && newTaskNameInput.value.length <=80) {
        newTaskNameInput.classList.add('is-valid');
        newTaskNameInput.classList.remove('is-invalid');
    } else {
        newTaskNameInput.classList.add('is-invalid');
        newTaskNameInput.classList.remove('is-valid');
    }

    const today = new Date();localStorage
    today.setUTCHours(0,0,0,0);

    if (newTaskDueDate.valueAsNumber < today.getTime() || newTaskDueDate.value == 0) {
        newTaskDueDate.classList.remove('is-valid');
        newTaskDueDate.classList.add('is-invalid');

    } else {
        newTaskDueDate.classList.add('is-valid');
        newTaskDueDate.classList.remove('is-invalid');
    }

    if (newTaskAssignedTo.value.length > 2) {
        newTaskAssignedTo.classList.add('is-valid');
        newTaskAssignedTo.classList.remove('is-invalid');
    } else {
        newTaskAssignedTo.classList.add('is-invalid');
        newTaskAssignedTo.classList.remove('is-valid');
    }

    if (newTaskDescription.value.length > 10) {        
        newTaskDescription.classList.add('is-valid');
        newTaskDescription.classList.remove('is-invalid');
    } else {
        newTaskDescription.classList.add('is-invalid');
        newTaskDescription.classList.remove('is-valid');
    }

 //////////////////VALIDATION CODES END///////////////////////

    // Get the values of the inputs
    const taskName = newTaskNameInput.value;
    const taskDescription = newTaskDescription.value;
    const assignedTo = newTaskAssignedTo.value;
    const dueDate = newTaskDueDate.value;

    // Add the task to the task manager
    taskManager.addTask(taskName, taskDescription, assignedTo, dueDate);
    taskManager.save(); 

    // Render the tasks
    taskManager.render();

    // Clear the form
    newTaskNameInput.value = '';
    newTaskDescription.value = '';
    newTaskAssignedTo.value = '';
    newTaskDueDate.value = '';

});




//8.2 Select the Task List and store it in a variable
const tasksList = document.querySelector('#tasksList');



//8.3 Add an Event Listener to the Task List, listening for the 'click' event.
tasksList.addEventListener('click', (event) => {

    if (event.target.classList.contains('acknowledge-button')) {
        const parentTask = event.target.parentElement.parentElement;
        const taskId = Number(parentTask.dataset.taskId);
        const task = taskManager.getTaskById(taskId);
        task.status = 'In Progress';

        taskManager.save(); 
        taskManager.render();
    }

    if (event.target.classList.contains('done-button')) {
        const parentTask = event.target.parentElement.parentElement;
        const taskId = Number(parentTask.dataset.taskId);
        const task = taskManager.getTaskById(taskId);
        task.status = 'DONE';

        taskManager.save(); 
        taskManager.render();
    }

    if (event.target.classList.contains('delete-button')) {
        const parentTask = event.target.parentElement.parentElement;
        const taskId = Number(parentTask.dataset.taskId); 
        taskManager.deleteTask(taskId); 

        taskManager.save(); 
        taskManager.render();
    }
});


