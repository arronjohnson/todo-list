import { intlFormatDistance as getRemainingTime } from 'date-fns';
import TodoList from './todo-list.js';

export default class View {
  static currentDate = new Date();

  static createProjectItem(project) {
    const button = document.createElement('button');
    button.className = 'sidebar__btn btn';
    button.textContent = project.name;
    return button;
  }

  static renderProjects() {
    View.resetElement('js-projects-container');

    const container = document.getElementById('js-projects-container');
    const allBtn = document.createElement('button');
    allBtn.className = 'sidebar__btn btn';
    allBtn.textContent = 'All';
    container.appendChild(allBtn);

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

    const deleteBtn = document.createElement('button');
    deleteBtn.className = 'task-card__btn btn btn--red';
    deleteBtn.innerHTML = '<i class="fa-solid fa-trash"></i>';
    deleteBtn.addEventListener('click', () => {
      TodoList.getProjectById(article.dataset.projectId).removeTaskById(article.dataset.id);
      View.renderTasks();
    });

    const editBtn = document.createElement('button');
    editBtn.className = 'task-card__btn btn btn--blue';
    editBtn.innerHTML = '<i class="fa-solid fa-pencil"></i>';
    editBtn.addEventListener('click', () => {
      const dialog = document.getElementById('js-edit-task-dialog');
      dialog.showModal();
    });

    buttonsContainer.appendChild(deleteBtn);
    buttonsContainer.appendChild(editBtn);

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
    const addProjectBtn = document.getElementById('js-add-project-btn');
    addProjectBtn.addEventListener('click', () => View.addNewProject());

    const addTaskBtn = document.getElementById('js-add-task-btn');
    addTaskBtn.addEventListener('click', () => View.addNewTask());
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
