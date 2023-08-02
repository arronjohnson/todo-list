import generateId from 'uniqid';
import sortTaskArray from './sort.js';

export default class Project {
  #id = generateId();
  #tasks = new Map();

  constructor(name) {
    this.name = name;
  }

  getId() {
    return this.#id;
  }

  getTasks() {
    return this.#tasks;
  }

  getTaskById(taskId) {
    return this.#tasks.get(taskId);
  }

  // array conversion necessary to allow sorting
  getTasksAsArray() {
    return [...this.getTasks().values()];
  }

  getSortedTasks() {
    // converting back to a map is unnecessary as we'll just iterate over this to display entries
    return sortTaskArray(this.getTasksAsArray());
  }

  addTask(task) {
    task.setProject(this);
    this.#tasks.set(task.getId(), task);
  }

  // id is used here as this is tied to each delete button using data attributes
  removeTaskById(taskId) {
    this.#tasks.delete(taskId);
  }
}
