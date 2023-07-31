import generateId from 'uniqid';

export default class Task {
  #id = generateId();
  #projectId;
  #projectName;

  constructor(title, desc, dueDate, priority) {
    this.title = title;
    this.desc = desc;
    this.dueDate = new Date(dueDate);
    this.priority = priority;
  }

  getId() {
    return this.#id;
  }

  // this makes DOM manipulation easier later, as we can easily find the correct project by its ID
  setProject(project) {
    this.#projectId = project.getId();
    this.#projectName = project.name;
  }

  getProjectId() {
    return this.#projectId;
  }

  getProjectName() {
    return this.#projectName;
  }
}
