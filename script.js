// Below, the html elements are called for use in the program:
var setup = document.querySelector('.setup');
var clear = document.querySelector('.complete');
var taskHead = document.querySelector('.taskName');
var taskContent = document.querySelector('.taskContent');
var taskLog = document.querySelector('.taskLog');
var statsCounter = document.querySelector('.statsCounter');


//-------------------------------------------------------------------------
// Below is the doument object prototypes to use for object
// creation:
var Task = function(taskName, taskContent, dueDate) {
    this.taskName = taskName;
    this.taskContent = taskContent;
    this.dueDate = dueDate;
    this.getTaskName = function() {
        var showName = `${this.taskName}:`;
        return showName;
    }
    this.getTaskInfo = function() {
        var showInfo = `${this.taskContent} is due by ${this.dueDate}`;
        return showInfo;
    }
};

var Log = function(taskStart) {
    this.taskStart = taskStart;
};


//-------------------------------------------------------------------------
// Below are the variables and objects created for program
// init:
var taskLogArray = [];
var newTask = new Task();
let i = 0;


//-------------------------------------------------------------------------
// Below are the main functions for note creation:
var createFunction = function() {
    var name = prompt("Task Name:");
    var content = prompt("Task Description:");
    var date = prompt("When is the task due?");

    newTask = new Task(name, content, date);

    taskHead.innerText = newTask.getTaskName();
    taskContent.innerText = newTask.getTaskInfo();

};

setup.addEventListener('click', () => {
    setup.style.visibility = 'hidden';
});


//-------------------------------------------------------------------------
// Below are the main functions for note deletion:
function clearFunction() {
    taskHead.innerText = null;
    taskContent.innerText = null;

    recordTask(newTask);
    taskLog.innerText = taskLogArray.join(" ");
    
    i = i + 1;
    statsCounter.innerText = i;
};

clear.addEventListener('click', () => {
    setup.style.visibility = 'visible';
});

function recordTask(t) {
    var displayLogByTaskCompleted = `${t.taskName}: ${t.taskContent} was completed by ${t.dueDate}.
    `;

    taskLogArray.push(displayLogByTaskCompleted);
    return taskLogArray;
};