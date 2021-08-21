/*eslint-disable*/
export  class CRUD {
  static createTask() {
    const inputData = document.getElementById('inputText').value;
    console.log(inputData);
    const saveData = document.getElementById('formText');
    const storage = this.getAllTasks().length;
    const task = [{ description: inputData, completed: false, index: storage }];
    this.saveTask(task);
    this.showTask();
    saveData.reset();
  }

  static updateTask(newDatas) {
    localStorage.clear();
    localStorage.setItem('data', JSON.stringify(newDatas));
  }

  static showTask() {
    const div = document.querySelector('#todo-container');
    div.innerHTML = '';
    this.getAllTasks().forEach((task) => {
      let checked = '';
      let style = '';
      let styleDescription = '';
      if (task.completed) {
        styleDescription = 'style="text-decoration: line-through"';
        checked = 'checked';
        style = 'class="line"';
      }
      div.innerHTML += `<li><input class="checkbox-class" type="checkbox" id="checkbox-${task.index}" ${checked} /> <h3  id="d${task.index}" ${style} ${styleDescription} >${task.description}</h3><button type="button" id="editButton"></button><button type="button" class="deleteButton" id="${task.index}"></button></li>`;
    });
  }

  static removeTask(index) {
    if (index > -1) {
      const newData = this.getAllTasks();
      newData.splice(index, 1);
      for (let i = index; i < this.getAllTasks().length - 1; i += 1) {
        newData[i].index = String(i, 10);
      }
      this.updateTask(newData);
      this.showTask();
    }
  }

  static saveTask(todo) {
    if (this.getAllTasks().length !== 0) {
      localStorage.setItem(
        'data',
        JSON.stringify(this.getAllTasks().concat(todo)),
      );
    } else {
      localStorage.setItem('data', JSON.stringify(todo));
    }
  }

  static getAllTasks() {
    if (localStorage.getItem('data')) {
      return JSON.parse(localStorage.getItem('data'));
    }
    return [];
  }
}
