/* eslint-disable no-unused-vars */
import _ from 'lodash';
import AddItems from './print';
// import printMe from './print.js';
import './style.css';

const TodoContainer = document.querySelector('.list-items');

const TodoList = [{
  index: 0,
  description: 'Do Kitchen cleaning',
},
{
  index: 1,
  description: 'Visit my friend',
}];

AddItems(TodoList, TodoContainer);