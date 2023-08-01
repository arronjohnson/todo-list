import { intlFormatDistance as getRemainingTime } from 'date-fns';
import Project from './project.js';
import TodoList from './todo-list.js';

export default class View {
  static currentDate = new Date();

  static createProjectButton(name) {
    const button = document.createElement('button');
    button.className = 'sidebar__button button';
    button.textContent = name;
    return button;
  }

  static renderProjects() {
    View.resetElement('js-projects-container');

    const container = document.getElementById('js-projects-container');
    const allButton = View.createProjectButton('All');
    container.appendChild(allButton);

    const projects = TodoList.getProjects();
    projects.forEach((project) => container.appendChild(View.createProjectButton(project.name)));
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

    const desc = document.createElement('p');
    desc.className = 'task-card__desc';
    desc.textContent = task.desc;

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
    editButton.addEventListener('click', () => {
      const dialog = document.getElementById('js-edit-task-dialog');
      dialog.showModal();
    });

    buttonsContainer.appendChild(deleteButton);
    buttonsContainer.appendChild(editButton);

    article.appendChild(h3);
    article.appendChild(due);
    article.appendChild(desc);
    article.appendChild(buttonsContainer);
    return article;
  }

  static renderTasks() {
    View.resetElement('js-tasks-container');

    const container = document.getElementById('js-tasks-container');
    const allTasks = TodoList.getAllTasksSorted();
    allTasks.forEach((task) => container.appendChild(View.createTaskCard(task)));
  }

  static resetElement(elementId) {
    document.getElementById(elementId).innerHTML = '';
  }

  static openDialog(dialogId) {
    console.log('test');
    document.getElementById(dialogId).showModal();
  }

  static closeDialogs() {
    const dialogs = document.querySelectorAll('.dialog');
    dialogs.forEach((dialog) => dialog.close());
  }

  static resetFormFields() {
    const fields = document.querySelectorAll('.form__input');
    fields.forEach((field) => (field.value = ''));
  }

  static registerEventHandlers() {
    const addProjectButton = document.getElementById('js-add-project-button');
    const addProjectSubmit = document.getElementById('js-add-project-submit');
    const addTaskButton = document.getElementById('js-add-task-button');
    const closeButtons = document.querySelectorAll('.js-cancel-button');
    const dialogs = document.querySelectorAll('.dialog');

    addProjectButton.addEventListener('click', () => View.openDialog('js-add-project-dialog'));
    addProjectSubmit.addEventListener('click', () => View.addNewProject());
    closeButtons.forEach((button) => button.addEventListener('click', () => View.closeDialogs()));
    dialogs.forEach((dialog) => dialog.addEventListener('close', () => View.resetFormFields()));
    addTaskButton.addEventListener('click', () => View.openDialog('js-add-task-dialog'));
  }

  static addNewProject() {
    const name = document.getElementById('project-name');
    if (name.value === '') return;

    TodoList.addProject(new Project(name.value));
    View.renderProjects();
  }

  static addNewTask() {
    const dialog = document.getElementById('js-add-task-dialog');
    dialog.showModal();
  }
}
