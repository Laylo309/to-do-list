import Task from './task';
import allTasks from './allTasks';

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
    ul.insertAdjacentHTML('beforeend',`<li><input type="checkbox" id="${task.index}"><h3  id="d${task.index}">${task.description}</h3><img src="https://img.icons8.com/ios-glyphs/30/000000/menu-2.png"/></li>`);
    this.addCheckListEvent(task);
  }

  static hasValue(input) {
    if (input === '') {
      return false;
    } else {
      return true;
    }
  }

  static addCheckListEvent(task) {
    const checklists = getElementById(task.index);
    checklists.addCheckListEvent('change', () => {
      task.completed = !task.completed;
      const descript = document.getElementById(`d${task.index}`);
      descript.classList.toggle('line');
    });
  }

  static checkList() {
    const storage = this.localStorage;
    if (storage) {
      this.HandleData();
    }
  }

  static localStorageA() {
    const test = 'test';
    try {
      localStorage.setItem('test', test);
      localStorage.removeItem('test');
      return true;
    } catch (error) {
      return false;
    }
  }

  static HandleData() {
    localStorage.setItem('test', JSON.stringify(allTasks.allTasks));
  }
}
