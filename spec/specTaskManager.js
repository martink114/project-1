//  addTask
// deleteTask
//  getTaskById
/* CHALLENGE:
                render
                save
                load */
describe('TaskManager', () => {
    describe('#constructor', () => {
        describe('when initialising a new TaskManager', () => {
            it('should create an empty task array', () => {
                const taskmanager = new TaskManager(1);

                expect(taskmanager.tasks).toEqual([]);
            });
            it('should set the currentId to the passed in number', () => {
                const taskManager = new TaskManager(1);

                expect(taskManager.currentId).toBe(1);
            });
        });
    });
    describe('#addTask', () => {
        describe('passing new task data as parameters', () => {
            it('should add the task to the tasks array', () => {
                const taskManager = new TaskManager(10);

                const task = {
                    taskId: taskManager.currentId,
                    taskName: 'test',
                    taskDescription: 'test',
                    assignedTo: 'test',
                    dueDate: Date.now(),
                    status: 'TO DO'
                };

                taskManager.addTask(task.taskName, task.taskDescription, task.assignedTo, task.dueDate);

                expect(taskManager.tasks[0]).toEqual(task);
            });

            it('should increment the currentId property', () => {
                const taskManager = new TaskManager(10);

                const task = {
                    taskId: taskManager.currentId,
                    taskName: 'test',
                    taskDescription: 'test',
                    assignedTo: 'test',
                    dueDate: Date.now(),
                    status: 'TO DO'
                };
                taskManager.addTask(task.taskName, task.taskDescription, task.assignedTo, task.dueDate);

                expect(taskManager.currentId).toBe(11);
            });
        });
    });
    describe('#deleteTask', () => {
        describe('when passed an existing taskId', () => {
            it('should remove the task from the tasks array', () => {
                const taskManager = new TaskManager();

                const taskToDelete = {
                    taskId: taskManager.currentId,
                    taskName: 'test',
                    taskDescription: 'test',
                    assignedTo: 'test',
                    dueDate: Date.now(),
                    status: 'TO DO'
                };
                taskManager.addTask(taskToDelete.taskName, taskToDelete.taskDescription, taskToDelete.assignedTo, taskToDelete.dueDate);
                taskManager.addTask('sleep', 'go to sleep at proper time, avoid any distractions', 'irina', Date.now());
                taskManager.deleteTask(taskToDelete.taskId);

                expect(taskManager.tasks).not.toContain(taskToDelete);
            });
        });
    });
    describe('#getTaskById', () => {
        describe('when passed an existing taskId', () => {
            it('should return the task', () => {
                const taskManager = new TaskManager();

                const task = {
                    taskId: taskManager.currentId,
                    taskName: 'test',
                    taskDescription: 'test',
                    assignedTo: 'test',
                    dueDate: Date.now(),
                    status: 'TO DO'
                };

                taskManager.addTask(task.taskName, task.taskDescription, task.assignedTo, task.dueDate);
                const result = taskManager.getTaskById(task.taskId);

                expect(result).toEqual(task);
            });
        });
    });
    describe ('#render', () => {
        describe('when tasks exist in the task manager', () => {
            it('should render the test in the innerHTML of the tasksList according to Assignee', () => {
                const taskManager = new TaskManager();

                const task ={
                    taskId: taskManager.currentId,
                    taskName: 'test',
                    taskDescription: 'test',
                    assignedTo: 'test',
                    dueDate: 1601451685812,
                    status: 'TO DO'
                };
                taskManager.addTask(task.taskName, task.taskDescription, task.assignedTo, task.dueDate);
                const tasksList = {innerHTML: '' };

                spyOn(document, 'querySelector').and.returnValue(tasksList);
                 
                taskManager.render();

                expect(tasksList.innerHTML).toContain('<li class="list-group-item" data-task-id=0>');
                expect(tasksList.innerHTML).toContain('<h4>test</h4>');
                expect(tasksList.innerHTML).toContain('<span class="badge badge-danger d-block">TO DO</span>');
                expect(tasksList.innerHTML).toContain('<medium>Assigned To: test</medium>');
                expect(tasksList.innerHTML).toContain('<large>Due: 30/9/2020</large>');
                expect(tasksList.innerHTML).toContain('<p>test</p>');
                expect(tasksList.innerHTML).toContain('<button class="btn btn-outline-warning acknowledge-button d-block">Acknowledge</button>');
                expect(tasksList.innerHTML).toContain('<button class="btn btn-outline-success done-button d-none">Mark As Done</button>');
                expect(tasksList.innerHTML).toContain('<button class="btn btn-outline-secondary delete-button d-none">Remove from List</button>');
            });
        });
    });

    describe('#save', () => {
        describe('when tasks exist in the task manager', () => {
            it('should store the tasks in the local storage', () => {
                const taskManager = new TaskManager();

                const task ={
                    taskId: taskManager.currentId,
                    taskName: 'test',
                    taskDescription: 'test',
                    assignedTo: 'test',
                    dueDate: Date.now(),
                    status: 'TO DO'
                };
                taskManager.addTask(task.taskName, task.taskDescription, task.assignedTo, task.dueDate);
                const tasksJson = JSON.stringify([task]);
                const localStorageSpy = spyOn(localStorage, 'setItem');
                taskManager.save();
                expect(localStorageSpy.calls.first().args).toEqual(['tasks', tasksJson]);
            });
            it('should store the currentId in local storage', () => {
                const taskManager = new TaskManager();

                taskManager.addTask('test', 'test', 'test', Date.now());
                const localStorageSpy = spyOn(localStorage, 'setItem');
                taskManager.save();
                const currentId = String(taskManager.currentId);
                expect(localStorageSpy.calls.mostRecent().args).toEqual(['currentId', currentId]);
            });
        });
    });

    describe('#load', () => {
        describe('when tasks are saved in localStorage', () => {
            it('should set the tasks array to saved tasks', () => {
                const taskManager = new TaskManager();
                const task = {
                    taskId: taskManager.currentId,
                    taskName: 'test',
                    taskDescription: 'test',
                    assignedTo: 'test',
                    dueDate: Date.now(),
                    status: 'TO DO'
                };
                const tasks = [task];
                const tasksJson = JSON.stringify(tasks);
            });
        });
        describe('when the currentId is saved in localStorage', () => {
            it('should set the currentId to the saved currentId', () => {
                const taskManager = new TaskManager();
                spyOn(localStorage, 'getItem').and.returnValue('1');
                taskManager.load();
                expect(taskManager.currentId).toBe(1);
            });
        });
    }); 
})