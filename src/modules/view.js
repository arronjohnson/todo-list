import { intlFormatDistance as getRemainingTime, format as dateToString } from 'date-fns';
import Task from './task.js';
import Project from './project.js';
import TodoList from './todo-list.js';

export default class View {
  static currentDate = new Date();

  static init() {
    View.renderProjects();
    View.renderTasks();
    View.registerEventHandlers();
  }

  static createProjectButton(name, id) {
    const button = document.createElement('button');
    button.className = 'sidebar__button button';
    button.dataset.projectId = id;
    button.textContent = name;
    button.addEventListener('click', () => {
      TodoList.setActiveProjectId(id);
      View.displayActiveProject();
    });
    return button;
  }

  static resetActiveProject() {
    const projectButtons = document.querySelectorAll('#js-projects-container .button');
    projectButtons.forEach((button) => button.classList.remove('sidebar__button--active'));
  }

  static displayActiveProject() {
    View.resetActiveProject();

    const projectId = TodoList.getActiveProjectId();
    const projectButton = document.querySelector(`[data-project-id="${projectId}"]`);
    projectButton.classList.add('sidebar__button--active');
    View.renderTasks();
  }

  static renderProjects() {
    View.resetElement('js-projects-container');

    const container = document.getElementById('js-projects-container');
    const allButton = View.createProjectButton('All', 0);
    container.appendChild(allButton);

    const projects = TodoList.getProjects();
    projects.forEach((project) =>
      container.appendChild(View.createProjectButton(project.name, project.getId()))
    );

    View.displayActiveProject();
  }

  static createTaskCard(task) {
    const article = document.createElement('article');
    article.className = 'task-card';
    article.dataset.id = task.getId();
    article.dataset.priority = task.priority;
    article.dataset.projectId = task.getProjectId();

    const h3 = document.createElement('h3');
    h3.className = 'task-card__heading';
    h3.textContent = task.title;

    const due = document.createElement('p');
    due.className = 'task-card__due-date';
    due.textContent = `Due ${getRemainingTime(task.dueDate, View.currentDate, { unit: 'day' })}`;

    const textContainer = document.createElement('section');
    textContainer.className = 'task-card__text-container';

    const projectName = document.createElement('p');
    projectName.className = 'task-card__project-name task-card__project-name--hidden';
    // we don't need to display the project name if we're not in the 'All' view
    if (TodoList.getActiveProjectId() === 0) {
      projectName.classList.toggle('task-card__project-name--hidden');
      projectName.textContent = TodoList.getProjectById(task.getProjectId()).name;
    }

    const desc = document.createElement('p');
    desc.className = 'task-card__desc';
    desc.textContent = task.desc;

    textContainer.appendChild(projectName);
    textContainer.appendChild(desc);

    const buttonsContainer = document.createElement('section');
    buttonsContainer.className = 'task-card__buttons-container';

    const deleteButton = document.createElement('button');
    deleteButton.className = 'task-card__button button button--red';
    deleteButton.innerHTML = '<i class="fa-solid fa-trash"></i>';
    deleteButton.addEventListener('click', () => {
      TodoList.getProjectById(article.dataset.projectId).removeTaskById(article.dataset.id);
      View.renderTasks();
    });

    const editButton = document.createElement('button');
    editButton.className = 'task-card__button button button--blue';
    editButton.innerHTML = '<i class="fa-solid fa-pencil"></i>';
    editButton.addEventListener('click', () => View.editTask(article));

    buttonsContainer.appendChild(deleteButton);
    buttonsContainer.appendChild(editButton);

    article.appendChild(h3);
    article.appendChild(due);
    article.appendChild(textContainer);
    article.appendChild(buttonsContainer);
    return article;
  }

  static renderTasks() {
    View.resetElement('js-tasks-container');

    const activeProjectId = TodoList.getActiveProjectId();
    let tasks;
    if (activeProjectId === 0) {
      tasks = TodoList.getAllTasksSorted();
    } else {
      tasks = TodoList.getProjectById(activeProjectId).getSortedTasks();
    }

    const container = document.getElementById('js-tasks-container');
    tasks.forEach((task) => container.appendChild(View.createTaskCard(task)));
  }

  static getElementValue(elementId) {
    return document.getElementById(elementId)?.value;
  }

  static setElementValue(elementId, newValue) {
    const element = document.getElementById(elementId);
    if (element) {
      element.value = newValue;
    }
  }

  static resetElement(elementId) {
    document.getElementById(elementId).innerHTML = '';
  }

  static openDialog(dialogId) {
    document.getElementById(dialogId).showModal();
  }

  static closeDialogs() {
    const dialogs = document.querySelectorAll('.dialog');
    dialogs.forEach((dialog) => dialog.close());
  }

  static resetForms() {
    const forms = document.querySelectorAll('.form');
    forms.forEach((form) => form.reset());
  }

  static registerEventHandlers() {
    const addProjectButton = document.getElementById('js-add-project-button');
    const addProjectSubmit = document.getElementById('js-add-project-submit');
    const addTaskButton = document.getElementById('js-add-task-button');
    const addTaskForm = document.getElementById('js-add-task-form');
    const closeButtons = document.querySelectorAll('.js-cancel-button');
    const dialogs = document.querySelectorAll('.dialog');
    const editTaskForm = document.getElementById('js-edit-task-form');

    addProjectButton.addEventListener('click', () => View.openDialog('js-add-project-dialog'));
    addProjectSubmit.addEventListener('click', () => View.addNewProject());
    addTaskButton.addEventListener('click', () => View.openDialog('js-add-task-dialog'));
    addTaskForm.addEventListener('submit', () => View.addNewTask());
    closeButtons.forEach((button) => button.addEventListener('click', () => View.closeDialogs()));
    dialogs.forEach((dialog) => dialog.addEventListener('close', () => View.resetForms()));
    editTaskForm.addEventListener('submit', () => View.saveTask());
  }

  static addNewProject() {
    const name = View.getElementValue('project-name');
    if (name === '') return;

    const project = new Project(name);
    TodoList.addProject(project);
    TodoList.setActiveProjectId(project.getId());
    View.renderProjects();
  }

  static addNewTask() {
    const title = View.getElementValue('task-title');
    const desc = View.getElementValue('task-desc');
    const dueDate = View.getElementValue('task-due');
    const priority = View.getElementValue('task-priority');

    // special handling for the 'All' pseudo-project
    // new tasks should be added to the Default project instead
    let activeProject = TodoList.getActiveProject();
    if (TodoList.getActiveProjectId() === 0) {
      activeProject = TodoList.getDefaultProject();
    }

    activeProject.addTask(new Task(title, desc, dueDate, priority));
    View.renderTasks();
  }

  static editTask(article) {
    const project = TodoList.getProjectById(article.dataset.projectId);
    const task = project.getTaskById(article.dataset.id);

    View.setElementValue('edit-task-title', task.title);
    View.setElementValue('edit-task-desc', View.getDescStr(task.desc));
    View.setElementValue('edit-task-due', dateToString(task.dueDate, 'yyyy-MM-dd'));
    View.setElementValue('edit-task-priority', task.priority);
    View.setElementValue('edit-task-project-id', article.dataset.projectId);
    View.setElementValue('edit-task-id', article.dataset.id);

    View.openDialog('js-edit-task-dialog');
  }

  static saveTask() {
    const title = View.getElementValue('edit-task-title');
    const desc = View.getElementValue('edit-task-desc');
    const dueDate = View.getElementValue('edit-task-due');
    const priority = View.getElementValue('edit-task-priority');
    const projectId = View.getElementValue('edit-task-project-id');
    const taskId = View.getElementValue('edit-task-id');
    const task = TodoList.getProjectById(projectId).getTaskById(taskId);
    task.setValues(title, desc, dueDate, priority);
    View.renderTasks();
  }

  // don't populate the description field if a description was not previously set
  // otherwise this is confusing to the user
  static getDescStr(desc) {
    if (desc === Task.DEFAULT_DESCRIPTION) {
      return '';
    }
    return desc;
  }
}
