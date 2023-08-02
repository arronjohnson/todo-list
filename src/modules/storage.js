import Project from './project.js';
import Task from './task.js';
import TodoList from './todo-list.js';
import View from './view.js';

export default class Storage {
  static init() {
    // a default project is mandatory
    const defaultProject = new Project('Default');
    // add an example task to the default project for demonstration purposes
    defaultProject.addTask(new Task('Example', '', '2023-12-31', 2));
    TodoList.setProjects([defaultProject], defaultProject.getId(), defaultProject.getId());
    Storage.save();
    View.init();
  }

  static save() {
    const projects = TodoList.getProjects();
    const tasks = TodoList.getAllTasks();
    localStorage.setItem('activeProjectId', TodoList.getActiveProjectId());
    localStorage.setItem('defaultProjectId', TodoList.getDefaultProjectId());
    localStorage.setItem('projects', JSON.stringify(projects));
    localStorage.setItem('tasks', JSON.stringify(tasks));
  }

  static load() {
    // check if the user has a todo list saved, otherwise we won't have anything to show
    if (localStorage.getItem('projects') === null) {
      Storage.init();
      return;
    }

    // we can only save properties, not actual class instances
    // so we must create a new class instance using the saved data
    const savedProjects = JSON.parse(localStorage.getItem('projects'));
    const newProjects = [];
    savedProjects.forEach((project) => {
      newProjects.push(new Project(project.name, project.id));
    });

    const activeProjectId = localStorage.getItem('activeProjectId');
    const defaultProjectId = localStorage.getItem('defaultProjectId');
    TodoList.setProjects(newProjects, activeProjectId, defaultProjectId);

    const savedTasks = JSON.parse(localStorage.getItem('tasks'));
    savedTasks.forEach((task) => {
      const newTask = new Task(task.title, task.desc, task.dueDate, task.priority);
      TodoList.getProjectById(task.projectId).addTask(newTask);
    });

    console.log(TodoList);
    View.init();
  }
}
