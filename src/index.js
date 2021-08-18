import _ from 'lodash';
import './style.css';

const tasksList = [
  {
    description: 'Do homework',
    completed: false,
    index: null,
  },
  {
    description: 'Attend Microverse classes',
    completed: false,
    index: null,
  },
  {
    description: 'Wash dishes',
    completed: false,
    index: null,
  },
  {
    description: 'Do my bed',
    completed: false,
    index: null,
  },
];


const checkTasks = () => {
  const ul = document.querySelector('ul')
  for(let i = 0; i < tasksList.length; i+=1) {
    tasksList[i].index = i;
    ul.innerHTML += `<li><input type="checkbox"><h3>${tasksList[i].description}</h3><img src="https://img.icons8.com/ios-glyphs/30/000000/menu-2.png"/></li>`;
  }
};

checkTasks()