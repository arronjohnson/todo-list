import Project from './project';
import Task from './task';
import TodoList from './todo-list';
import View from './view';

export default class Storage {
  static KEY_NAMES = ['projects', 'tasks', 'activeProjectId', 'defaultProjectId'];

  static init() {
    // a default project is mandatory
    const defaultProject = new Project('Default');
    // add an example task to the default project for demonstration purposes
    defaultProject.addTask(new Task('Example', '', '2023-12-31', 2));
    TodoList.setProjects([defaultProject]);
    Storage.setActiveProjectId(defaultProject.getId());
    Storage.setDefaultProjectId(defaultProject.getId());
    Storage.save();
    View.init();
  }

  static save() {
    localStorage.setItem('projects', JSON.stringify(TodoList.getProjects()));
    localStorage.setItem('tasks', JSON.stringify(TodoList.getAllTasks()));
  }

  static checkStorageProperties() {
    return Storage.KEY_NAMES.every((key) => localStorage.getItem(key) !== null);
  }

  static load() {
    // check if the user has a todo list saved, otherwise we won't have anything to show
    if (!Storage.checkStorageProperties()) {
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

    View.init();
  }

  static getActiveProjectId() {
    return localStorage.getItem('activeProjectId');
  }

  static setActiveProjectId(projectId) {
    localStorage.setItem('activeProjectId', projectId);
  }

  static getDefaultProjectId() {
    return localStorage.getItem('defaultProjectId');
  }

  static setDefaultProjectId(projectId) {
    localStorage.setItem('defaultProjectId', projectId);
  }
}
