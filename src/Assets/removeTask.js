import Interaction from './interaction.js'

export default class removeCompleted(task){
	const list = Interaction.addCheckListEvent();

	list.splice(task,1);
	Interation.updateList(list);
}