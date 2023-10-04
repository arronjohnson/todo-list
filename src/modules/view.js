import { intlFormatDistance as getRemainingTime, format as dateToString } from 'date-fns';
import Project from './project';
import Storage from './storage';
import Task from './task';
import TodoList from './todo-list';

export default class View {
  static currentDate = new Date();

  static ALL_PROJECT_ID = 0;

  static init() {
    View.renderProjects();
    View.renderTasks();
    View.registerEventHandlers();
  }

  // we don't want to let the user delete the 'all' and 'default' projects
  static checkIfProjectDeletable(id) {
    return Number(id) !== View.ALL_PROJECT_ID && id !== Storage.getDefaultProjectId();
  }

  static checkIfViewingAll(id = Storage.getActiveProjectId()) {
    return Number(id) === View.ALL_PROJECT_ID;
  }

  static handleProjectButtonClick(event, id) {
    // user clicked on delete icon
    if (event.target.classList.contains('sidebar__button-icon')) {
      // make sure we set a new active project before deleting the current one, otherwise
      // we'll run into errors
      if (Storage.getActiveProjectId() === id) {
        Storage.setActiveProjectId(Storage.getDefaultProjectId());
      }
      TodoList.removeProjectById(id);
      View.renderProjects();
    } else {
      Storage.setActiveProjectId(id);
      View.hideSidebar();
      View.displayActiveProject();
    }
  }

  static createProjectDeleteIcon(button, id) {
    if (!View.checkIfProjectDeletable(id)) return;

    const deleteIcon = document.createElement('i');
    deleteIcon.className = 'sidebar__button-icon fa-solid fa-xmark';
    deleteIcon.setAttribute('aria-hidden', true);

    const deleteSpan = document.createElement('span');
    deleteSpan.className = 'fa-sr-only';
    deleteSpan.textContent = 'Delete project';

    button.appendChild(deleteIcon);
    button.appendChild(deleteSpan);
  }

  static createProjectButton(name, id) {
    const button = document.createElement('button');
    button.className = 'sidebar__button button';
    button.dataset.projectId = id;
    button.textContent = name;
    button.addEventListener('click', (e) => View.handleProjectButtonClick(e, id));
    View.createProjectDeleteIcon(button, id);
    return button;
  }

  static resetActiveProject() {
    const projectButtons = document.querySelectorAll('#js-projects-container .button');
    projectButtons.forEach((button) => button.classList.remove('sidebar__button--active'));
  }

  static setProjectText(projectId) {
    const heading = document.getElementById('js-project-heading');
    const projectName = View.checkIfViewingAll(projectId)
      ? 'All'
      : TodoList.getProjectById(projectId).name;

    heading.innerText = `Viewing ${projectName}`;
  }

  static displayActiveProject() {
    View.resetActiveProject();

    const projectId = Storage.getActiveProjectId();
    const projectButton = document.querySelector(`[data-project-id="${projectId}"]`);
    projectButton.classList.add('sidebar__button--active');

    View.setProjectText(projectId);
    View.renderTasks();
    Storage.save();
  }

  static renderProjects() {
    View.resetElement('js-projects-container');

    const container = document.getElementById('js-projects-container');
    // 'all' is essentially a fake project, for the purposes of displaying all tasks
    const allButton = View.createProjectButton('All', View.ALL_PROJECT_ID);
    container.appendChild(allButton);

    const projects = TodoList.getProjects();
    projects.forEach((project) =>
      container.appendChild(View.createProjectButton(project.name, project.getId())),
    );

    View.displayActiveProject();
  }

  static createTaskCard(task) {
    const article = document.createElement('article');
    const h3 = document.createElement('h3');
    const due = document.createElement('p');
    const textContainer = document.createElement('section');
    const projectName = document.createElement('p');
    const desc = document.createElement('p');
    const buttonsContainer = document.createElement('section');
    const deleteButton = document.createElement('button');
    const editButton = document.createElement('button');

    article.className = 'task-card';
    article.dataset.id = task.getId();
    article.dataset.priority = task.priority;
    article.dataset.projectId = task.getProjectId();
    h3.className = 'task-card__heading';
    h3.textContent = task.title;
    due.className = 'task-card__due-date';
    due.textContent = `Due ${getRemainingTime(task.dueDate, View.currentDate, { unit: 'day' })}`;

    textContainer.className = 'task-card__text-container';
    projectName.className = 'task-card__project-name task-card__project-name--hidden';
    desc.className = 'task-card__desc';
    desc.textContent = task.desc;

    // we don't need to display the project name if we're not in the 'All' view
    if (View.checkIfViewingAll()) {
      projectName.classList.toggle('task-card__project-name--hidden');
      projectName.textContent = TodoList.getProjectById(task.getProjectId()).name;
    }

    buttonsContainer.className = 'task-card__buttons-container';
    deleteButton.className = 'task-card__button button button--red';
    deleteButton.innerHTML = `
      <i class="fa-solid fa-trash" aria-hidden="true"></i>
      <span class="fa-sr-only">Delete task</span>`;
    editButton.className = 'task-card__button button button--blue';
    editButton.innerHTML = `
      <i class="fa-solid fa-pencil" aria-hidden="true"></i>
      <span class="fa-sr-only">Edit task</span>`;

    deleteButton.addEventListener('click', () => {
      TodoList.getProjectById(article.dataset.projectId).removeTaskById(article.dataset.id);
      View.renderTasks();
    });
    editButton.addEventListener('click', () => View.editTask(article));

    textContainer.appendChild(projectName);
    textContainer.appendChild(desc);
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

    const activeProjectId = Storage.getActiveProjectId();
    let tasks;
    if (View.checkIfViewingAll(activeProjectId)) {
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

  static hideSidebar() {
    const sidebar = document.querySelector('.sidebar');
    sidebar.classList.remove('sidebar--expanded');
  }

  static toggleSidebar() {
    const sidebar = document.querySelector('.sidebar');
    sidebar.classList.toggle('sidebar--expanded');
  }

  static registerEventHandlers() {
    const addProjectButton = document.getElementById('js-add-project-button');
    const addProjectForm = document.getElementById('js-add-project-form');
    const addTaskButton = document.getElementById('js-add-task-button');
    const addTaskForm = document.getElementById('js-add-task-form');
    const closeButtons = document.querySelectorAll('.js-cancel-button');
    const dialogs = document.querySelectorAll('.dialog');
    const editTaskForm = document.getElementById('js-edit-task-form');
    const menuButton = document.getElementById('js-menu-button');
    const sidebarCloseButton = document.getElementById('js-sidebar-close-button');

    addProjectButton.addEventListener('click', () => View.openDialog('js-add-project-dialog'));
    addProjectForm.addEventListener('submit', () => View.addNewProject());
    addTaskButton.addEventListener('click', () => View.openDialog('js-add-task-dialog'));
    addTaskForm.addEventListener('submit', () => View.addNewTask());
    closeButtons.forEach((button) => button.addEventListener('click', () => View.closeDialogs()));
    dialogs.forEach((dialog) => dialog.addEventListener('close', () => View.resetForms()));
    editTaskForm.addEventListener('submit', () => View.saveTask());
    menuButton.addEventListener('click', () => View.toggleSidebar());
    sidebarCloseButton.addEventListener('click', () => View.toggleSidebar());
  }

  static addNewProject() {
    const name = View.getElementValue('project-name');
    const project = new Project(name);

    TodoList.addProject(project);
    Storage.setActiveProjectId(project.getId());
    View.hideSidebar();
    View.renderProjects();
    Storage.save();
  }

  static addNewTask() {
    const title = View.getElementValue('task-title');
    const desc = View.getElementValue('task-desc');
    const dueDate = View.getElementValue('task-due');
    const priority = View.getElementValue('task-priority');

    // special handling for the 'All' pseudo-project
    // new tasks should be added to the Default project instead
    let activeProject = TodoList.getActiveProject();
    if (View.checkIfViewingAll()) {
      activeProject = TodoList.getDefaultProject();
    }

    activeProject.addTask(new Task(title, desc, dueDate, priority));
    View.renderTasks();
    Storage.save();
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
    Storage.save();
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
