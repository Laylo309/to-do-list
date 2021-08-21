/*eslint-disable*/
import _ from 'lodash'; /*eslint-disable*/
import './style.css';
import { CRUD } from './Assets/CRUD.js';

const taskContainer = document.getElementById('task-container');
const submitButton = document.getElementById('addButton');
window.onload = function windowReady() {
  submitButton.onclick = function () {
    CRUD.createTask();
    
  }; 


  taskContainer.addEventListener('click', (e) => {
    if (e.target !== null && e.target !== 'NaN' && e.target !== '') {
      if (e.target.className === 'checkbox-class') {
        const ids = e.target.id.replace('checkbox-', '');
        const description = document.getElementById('d' + ids);
        const data = CRUD.getAllTasks();
        const index = parseInt(ids, 10);

        if (data !== []) {
          if (data[index].completed) {
            data[index].completed = false;
            description.style.textDecoration = 'none';
          } else {
            data[index].completed = true;
            description.style.textDecoration = 'line-through';
          }
          CRUD.updateTask(data);
        }
        console.log(data[index].completed);
      }
    }
  });
 
};

CRUD.showTask();
