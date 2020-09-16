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
}

