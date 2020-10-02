//7.1: Create new function createTaskHtml
const createTaskHtml = (taskId, taskName, taskDescription, assignedTo, dueDate, status) => `
<li class="list-group-item" data-task-id=${taskId}>
        <div class="d-flex w-100 mt-2 justify-content-between align-items-center">
            <h4>${taskName}</h4>
            <span class="badge badge-danger ${status === 'TO DO' ? 'd-block' : 'd-none'}">${status}</span>
            <span class="badge badge-warning ${status === 'In Progress' ? 'd-block' : 'd-none'}">${status}</span>
            <span class="badge badge-success ${status === 'DONE' ? 'd-block' : 'd-none'}">${status}</span>            
        </div>
        <div class="d-flex w-100 mb-3 justify-content-between">
            <div id="Assignee" medium>Assigned To: ${assignedTo}</div>
            <large>Due: ${dueDate}</large>
        </div>
        <p>${taskDescription}</p>
        <div class="d-flex w-100 justify-content-end">
            <button class="btn btn-outline-warning acknowledge-button ${status === 'TO DO' ? 'd-block' : 'd-none'}">Acknowledge</button>
            <button class="btn btn-outline-success done-button ${status === 'In Progress' ? 'd-block' : 'd-none'}">Mark As Done</button>
            <button class="btn btn-outline-secondary delete-button ${status === 'DONE' ? 'd-block' : 'd-none'}">Remove from List</button>
        </div>
    </li>
`;


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
            status: 'TO DO'
        };
        this.tasks.push(task);
    }
    
    //Task 10 Step 2: deleting tasks

    deleteTask(taskId) {
        const newTasks = []; 
        for (let i = 0; i < this.tasks.length; i++) {
            const task = this.tasks[i]; 
            if (task.taskId !== taskId) {
                newTasks.push(task); 
            }

        }
        this.tasks = newTasks; 
    }

    //8.4: Add a new method, getTaskById(), it should accept a taskId as a parameter.
    getTaskById(taskId) {
        let foundTask;

       // Loop over the this.tasks array, for each task in the loop:
        for (let i = 0; i < this.tasks.length; i++) {
            const task = this.tasks[i];

            if (task.taskId === taskId) {
                foundTask = task;
            }
        }
        return foundTask;

    }

//FEATURE - creates task list based on User as selected in drop down. 

    getTasksByUser(assignedTo) {
        let userTasks = [];

        for (let i = 0; i < this.tasks.length; i++) {
            const task = this.tasks[i];

            if (task.assignedTo.toLowerCase() === assignedTo.toLowerCase()) {
                userTasks.push(task);
            }
        }
        return userTasks;
    }

    //7.2: Create render() method
    render(tasks) {
        //Create a variable storing an empty array to hold the HTML of all the tasks
        const taskHtmlList = [];

        //Loop over the TaskManager's tasks, for each task
        for (let i = 0; i < tasks.length; i++) {
            
            //Store the current task in a variable
            const task = tasks[i];

            //Create a formattedDate variable, storing a readable string representing the date
            const date = new Date(task.dueDate);

            const formattedDate = date.getDate() + '/' + (date.getMonth() + 1) + '/' + date.getFullYear();
            //Create task html
            const taskHtml = createTaskHtml(task.taskId, task.taskName, task.taskDescription, task.assignedTo, formattedDate, task.status);
            //Push the taskHtml into the tasksHtmlList array
            taskHtmlList.push(taskHtml);
        }
        //Create tasksHtml 
        const tasksHtml = taskHtmlList.join('\n');
            
        //Select the tasks list element and set its innerHTML to the tasksHtml
        const tasksList = document.querySelector('#tasksList');
        tasksList.innerHTML = tasksHtml;
    }

//Task 9 - Save and Load from localStorage

    save() {
        const tasksJson = JSON.stringify(this.tasks);
        localStorage.setItem('tasks', tasksJson);
        
        const currentId = String(this.currentId);
        localStorage.setItem('currentId', currentId);
    }

    load() {
        if (localStorage.getItem('tasks')) {
            const tasksJson = localStorage.getItem('tasks'); 
            this.tasks = JSON.parse(tasksJson); 
        }

        if (localStorage.getItem('currentId')) {
            const currentId = localStorage.getItem('currentId'); 
            this.currentId = Number(currentId);
        }
    }
}

