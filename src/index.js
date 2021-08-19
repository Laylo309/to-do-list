/*eslint-disable*/
import _ from 'lodash'; /*eslint-disable*/
import './style.css';
import Interaction from './Assets/interaction.js';
import allTasks from './Assets/allTasks.js';

document.querySelector('#addButton').addEventListener('click', () => {
  Interaction.addTask();
});

document.querySelector('#formText').addEventListener('submit', () => {
  Interaction.addTask();
});

const checkInput = () => {
  const data = JSON.parse(localStorage.getItem('data'));
  let newData = [];
  if (data !== null) {
    allTasks.startTasks(data);
    for (let i = 0; i < data.length; i += 1) {
      if (Interaction.hasValue(data[i])) {
        Interaction.updateList(data[i]);
      }
      newData.push(data[i]);
    }

    localStorage.setItem('data', JSON.stringify(allTasks.allTasks));
  }
};

checkInput();
