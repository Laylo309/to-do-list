export  class CRUD {
  static createTask() {
    const inputData = document.getElementById('inputText').value;
    const saveData = document.getElementById('formText');
    const storage = this.getAllTasks().length;
    const task = [{ description: inputData, completed: false, index: storage }];
    this.saveTask(task);
    this.showTask();
    saveData.reset();
  }}

  