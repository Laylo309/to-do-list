import Tasks from './allTasks';

export default class Task {
	constructor(description){
		this.description = description;
		this.completed = false;
		this.index=Tasks.allTasks.length;
	}
}