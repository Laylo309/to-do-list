/*eslint-disable*/
import _ from 'lodash'; /*eslint-disable*/
import './style.css';
import { CRUD } from './Assets/CRUD.js';

const taskContainer = document.getElementById('task-container');
const submitButton = document.getElementById('addButton');
const clearAllDone = document.getElementById('clearComplete');
let editButtonStats=false;

window.onload = function windowReady() {
  CRUD.showTask();
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
      }
    }
  });
// ! EDTING 

   taskContainer.addEventListener('click', (e) => {
    if (e.target !== null && e.target !== 'NaN' && e.target !== '') {
      if (e.target.className === 'editButton') {
        const ids = e.target.id.replace('editBttn-', '');
        let description = document.getElementById('d' + ids);
        let data = CRUD.getAllTasks();
        console.log(data);
        const index = parseInt(ids, 10);
        let editInput = document.getElementById('edit-'+ ids);

        if (editButtonStats !== false) {
          data[index].description=editInput.value;
          description.style.display='none';
          editInput.style.display='block';
          CRUD.updateTask(data);
          editButtonStats = false;
         
        }else{
          editButtonStats = true;
          description.style.display='block';
          editInput.style.display='none';
        }
      }
    }
   
  });
  CRUD.showTask();

  taskContainer.addEventListener('click', (e) => {
    if (e.target !== null && e.target !== 'NaN' && e.target !== '') {
      if (e.target.className === 'deleteButton') {
        const ids = e.target.id.replace('delete-', '');
        const data = CRUD.getAllTasks();
        const index = parseInt(ids, 10);
        if (data !== []) {
          CRUD.removeTask(index);
        }
      }
    }
  });

  clearAllDone.addEventListener('click',(e)=>{
   const data= CRUD.getAllTasks();
   const storage=data.filter((todo)=>todo.completed===false);
   for(let i=0; i<storage.length; i=+1) {
     storage[i].index=i+1;
   }
   CRUD.updateTask(storage);
  })

};
