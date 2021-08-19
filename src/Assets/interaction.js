import Task from './task.js';
import allTasks from './allTasks.js';

export default class Interaction {
  static addTask() {
    const inputData = document.getElementById('inputText');
    if (this.hasValue(inputData.value)) {
      const newTask = new Task(inputData.value);
      allTasks.allTasks.push(newTask);
      this.updateList(newTask);
      this.checkList();
    }
  }

  static updateList(task) {
    const ul = document.querySelector('ul');
    let checked = '';
    let style = '';
    if (task.completed) {
      checked = 'checked';
      style = 'class="line"';
    }
    ul.insertAdjacentHTML(
      'beforeend',
      `<li><input type="checkbox" id="${task.index}" ${checked} /> <h3  id="d${task.index}" ${style} >${task.description}</h3><img src="https://img.icons8.com/ios-glyphs/30/000000/menu-2.png"/></li>`,
    );
    this.addCheckListEvent(task);
  }

  static hasValue(input) {
    if (input === '') {
      return false;
    }
    return true;
  }

  static addCheckListEvent(task) {
    const checklists = document.getElementById(task.index);
    checklists.addEventListener('change', () => {
      task.completed = !task.completed;
      const descript = document.getElementById(`d${task.index}`);
      this.checkList();
      descript.classList.toggle('line');
    });
  }

  static checkList() {
    const storageA = this.localStorageA();
    if (storageA) {
      this.HandleData();
    }
  }

  static localStorageA() {
    const test = 'test';
    try {
      localStorage.removeItem(test);
      return true;
    } catch (error) {
      return false;
    }
  }

  static HandleData() {
    localStorage.setItem('data', JSON.stringify(allTasks.allTasks));
  }
}
