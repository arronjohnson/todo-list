import sortTaskArray from './sort.js';

class TodoList {
  // map isn't used as project quantity is likely minimal, so reduced lookup time is negligible
  #projects = [];

  addProject(project) {
    this.#projects.push(project);
  }

  // ids are used to allow easier DOM manipulation
  removeProjectById(projectId) {
    this.#projects = this.#projects.filter((project) => project.getId() !== projectId);
  }

  getProjects() {
    return this.#projects;
  }

  getProjectById(projectId) {
    return this.#projects.find((project) => project.getId() === projectId);
  }

  // this enables an 'All' view, which displays all tasks from every project on a single page
  getAllTasks() {
    return this.#projects.reduce((tasks, project) => tasks.concat(project.getTasksAsArray()), []);
  }

  getAllTasksSorted() {
    return sortTaskArray(this.getAllTasks());
  }
}

// only a single instance is ever needed, so that is created and exported
export default new TodoList();
