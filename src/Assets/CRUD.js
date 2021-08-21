export class CRUD {
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
    const ul = document.querySelector('ul');
    ul.innerHTML = `  <li class="input">
    <h2 onchange="">Today's To Do</h2>
    <img
      src="https://img.icons8.com/windows/32/000000/synchronize.png"
      alt="synchronize-button"
    />
  </li>
  <li class="input2">
    <form class="input"  id="formText" action="#">
      <input
        type="text"
        id="inputText"
        placeholder="Add to your list..."
      >
      <button type="button" id="addButton"></button>
    </form>
  </li>`;
    this.getAllTasks().forEach((task) => {
      let checked = '';
    let style = '';
    let styleDescription = '';
      if (task.completed) {
        styleDescription = 'style="text-decoration: line-through"';
        checked = 'checked';
        style = 'class="line"';
      }
      ul.innerHTML += `<li><input class="checkbox-class" type="checkbox" id="checkbox-${task.index}" ${checked} /> <h3  id="d${task.index}" ${style} ${styleDescription} >${task.description}</h3><button type="button" id="threeDots"></button><button type="button" class="deleteButton" id="${task.index}"></button></li>`;
    });
  }

  static removeTask(index) {
    if (index > -1) {
      let newData;
      newData = this.getAllTasks();
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
        JSON.stringify(this.getAllTasks().concat(todo))
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
