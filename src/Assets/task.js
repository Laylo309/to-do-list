import Tasks from './allTasks.js';

export default class Task {
  constructor(description) {
    this.description = description;
    this.completed = false;
    this.index = Tasks.allTasks.length;
  }
}
