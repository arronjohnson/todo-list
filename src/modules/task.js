import generateId from 'uniqid';
import { format as dateToString } from 'date-fns';

export default class Task {
  #id = generateId();
  #projectId;
  #projectName;

  static DEFAULT_DESCRIPTION = 'No description.';

  constructor(title, desc, dueDate, priority) {
    this.setValues(title, desc, dueDate, priority);
  }

  setValues(title, desc, dueDate, priority) {
    this.title = title;
    this.desc = desc;
    this.dueDate = dueDate;
    this.priority = priority;
  }

  get desc() {
    return this._desc;
  }

  set desc(newDesc) {
    this._desc = newDesc === '' ? Task.DEFAULT_DESCRIPTION : newDesc;
  }

  get dueDate() {
    return this._dueDate;
  }

  set dueDate(dateStr) {
    this._dueDate = new Date(dateStr);
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

  toJSON() {
    return {
      projectId: this.#projectId,
      projectName: this.#projectName,
      title: this.title,
      desc: this.desc === Task.DEFAULT_DESCRIPTION ? '' : this.desc,
      dueDate: dateToString(this.dueDate, 'yyyy-MM-dd'),
      priority: this.priority,
    };
  }
}
