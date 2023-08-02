import sortTaskArray from './sort.js';

class TodoList {
  #activeProjectId;
  #defaultProjectId;
  // map isn't used as project quantity is likely minimal, so reduced lookup time is negligible
  #projects = [];

  setProjects(projects, activeProjectId, defaultProjectId) {
    this.#projects = projects;
    this.#activeProjectId = activeProjectId;
    this.#defaultProjectId = defaultProjectId;
  }

  addProject(project) {
    this.#projects.push(project);
  }

  getDefaultProjectId() {
    return this.#defaultProjectId;
  }

  getActiveProjectId() {
    return this.#activeProjectId;
  }

  setActiveProjectId(projectId) {
    this.#activeProjectId = projectId;
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

  getDefaultProject() {
    return this.getProjectById(this.getDefaultProjectId());
  }

  getActiveProject() {
    return this.getProjectById(this.getActiveProjectId());
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
