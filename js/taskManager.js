class TaskManager {
    constructor(taskName, dueDate, assignee, taskDescription, status) {
        this.taskName = taskName;
        this.dueDate = dueDate;
        this.assignee = assignee; 
        this.taskDescription = taskDescription;
        this.status = status;
    }

taskList() {
    console.log('Task Name = ' + this.taskName + '; (due ' + this.dueDate + '); has been assigned to ' + this.assignee + '. Full description of the task is as follows: ' + this.taskDescription + 'and it\'s current status = ' + this.status + '.');
};

};

let task1 = new TaskManager('taskName1', 'dueDate1', 'assignee1', 'taskDescription1', 'status1');




