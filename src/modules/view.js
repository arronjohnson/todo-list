import { intlFormatDistance as getRemainingTime } from 'date-fns';
import TodoList from './todo-list.js';

export default class View {
  static currentDate = new Date();

  static createProjectItem(project) {
    const button = document.createElement('button');
    button.textContent = project.name;
    return button;
  }

  static renderProjects() {
    View.resetContainer('.sidebar');

    const container = document.querySelector('.sidebar');
    const allBtn = document.createElement('button');
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
    h3.textContent = task.title;

    const p = document.createElement('p');
    p.textContent = `Due ${getRemainingTime(task.dueDate, View.currentDate, { unit: 'day' })}`;

    const deleteBtn = document.createElement('button');
    deleteBtn.textContent = 'Delete';
    deleteBtn.addEventListener('click', () => {
      TodoList.getProjectById(article.dataset.projectId).removeTaskById(article.dataset.id);
      View.renderTasks();
    });

    article.appendChild(h3);
    article.appendChild(p);
    article.appendChild(deleteBtn);
    return article;
  }

  static renderTasks() {
    View.resetContainer('.task-container');

    const container = document.querySelector('.task-container');
    const allTasks = TodoList.getAllTasksSorted();
    allTasks.forEach((task) => container.appendChild(View.createTaskCard(task)));
  }

  static resetContainer(className) {
    const container = document.querySelector(className);
    container.innerHTML = '';
  }
}
