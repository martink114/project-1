
//7.1: Create new function createTaskHtml
const createTaskHtml = (taskName, taskDescription, assignedTo, dueDate, status) => `
<li class="list-group-item">
<div class="d-flex w-100 mt-2 justify-content-between align-items-center">
    <h5>${taskName}</h5>
    <span class="badge badge-danger">${status}</span>
</div>
<div class="d-flex w-100 mb-3 justify-content-between">
    <small>Assigned To: ${assignedTo}</small>
    <small>Due: ${dueDate}</small>
</div>
<p>${taskDescription}</p>
</li>
`


//create taskManager class
class TaskManager {
    constructor(currentId = 0) {
        this.tasks = [];
        this.currentId = currentId;
    }

addTask (taskName, taskDescription, assignedTo, dueDate) {
    const task = {
        taskId: this.currentId++, 
        taskName: taskName, 
        taskDescription: taskDescription,
        assignedTo: assignedTo, 
        dueDate: dueDate, 
        status: 'To Do'
    };
    this.tasks.push(task);
}
//7.2: Create render() method
render() {
    //Create a variable storing an empty array to hold the HTML of all the tasks
const taskHtmlList = [];
    //Loop over the TaskManager's tasks, for each task
    for (let i = 0; i < this.tasks.length; i++) {
        
        //Store the current task in a variable
        const task = this.thasks[i];
        //Create a formattedDate variable, storing a readable string representing the date
        const date = new Date(task.dueDate);
        const formattedDate = date.getDate() + '/' + (date.getMonth() + 1) + '/' + date.getFullYear();
        //Create task html
        const taskHtml = createTaskHtml(task.name, task.description, task.assignedTo, formattedDate, task.status);
        //Push the taskHtml into the tasksHtmlList array
        taskHtmlList.push(taskHtml);
    }
    //Cteate tasksHtml 
    const tasksHtml = taskHtmlList.join('\n');
    
    //Select the tasks list element and set its innerHTML to the tasksHtml
    const tasksList = document.querySelector('#taskList');
    tasksList.innerHTML = tasksHtml;
}
}



