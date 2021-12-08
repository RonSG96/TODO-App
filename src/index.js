import './styles.css';
import  { Todo, TodoList } from './classes' // busca el index.js por defecto
import { crearTodoHtml } from './js/componentes';




export const todoList = new TodoList();

todoList.todos.forEach(crearTodoHtml);
