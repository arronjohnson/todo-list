import 'normalize.css';
import './style.scss';
import TodoList from './modules/todo-list.js';
import Project from './modules/project.js';
import Task from './modules/task.js';
import View from './modules/view.js';

// TESTING CODE
const projectOne = new Project('Default');
const projectOneTasks = [
  new Task('Default #1', '', '2024/01/01', 1, ''),
  new Task('Default #2', '', '2024/05/01', 3, ''),
  new Task('Default #3', '', '2024/01/27', 1, ''),
  new Task('Default #4', '', '2024/01/11', 1, ''),
  new Task('Default #5', '', '2023/12/01', 2, ''),
];

for (const todo of projectOneTasks) {
  projectOne.addTask(todo);
}

const projectTwo = new Project('Testing');
const projectTwoTasks = [
  new Task('Testing #1', '', '2023/01/01', 3, ''),
  new Task('Testing #2', '', '2023/01/01', 2, ''),
  new Task('Testing #3', '', '2023/07/31', 1, ''),
];

for (const todo of projectTwoTasks) {
  projectTwo.addTask(todo);
}

TodoList.addProject(projectOne);
TodoList.addProject(projectTwo);

window.TodoList = TodoList;
View.init();
