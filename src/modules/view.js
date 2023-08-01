import { intlFormatDistance as getRemainingTime } from 'date-fns';
import TodoList from './todo-list.js';

export default class View {
  static currentDate = new Date();

  static createProjectItem(project) {
    const button = document.createElement('button');
    button.className = 'sidebar__button button';
    button.textContent = project.name;
    return button;
  }

  static renderProjects() {
    View.resetElement('js-projects-container');

    const container = document.getElementById('js-projects-container');
    const allButton = document.createElement('button');
    allButton.className = 'sidebar__button button';
    allButton.textContent = 'All';
    container.appendChild(allButton);

    const projects = TodoList.getProjects();
    projects.forEach((project) => container.appendChild(View.createProjectItem(project)));
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
    const element = document.getElementById(elementId);
    element.innerHTML = '';
  }

  static registerEventHandlers() {
    const addProjectButton = document.getElementById('js-add-project-button');
    addProjectButton.addEventListener('click', () => View.addNewProject());

    const addTaskButton = document.getElementById('js-add-task-button');
    addTaskButton.addEventListener('click', () => View.addNewTask());
  }

  static addNewProject() {
    const dialog = document.getElementById('js-add-project-dialog');
    dialog.showModal();
  }

  static addNewTask() {
    const dialog = document.getElementById('js-add-task-dialog');
    dialog.showModal();
  }
}
