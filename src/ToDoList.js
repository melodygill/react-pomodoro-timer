import React from 'react';
import ToDo from './ToDo';
import './form.css'
 
const ToDoList = ({toDoList, handleToggle, handleFilter}) => {
   return (
       <div>
           {toDoList.map(todo => {
               return (
                    <ToDo todo={todo} handleToggle={handleToggle} handleFilter={handleFilter}/>
                )
           })}
           <button class="form-btn" style={{margin: '20px'}} onClick={handleFilter}>Delete finished tasks</button>
       </div>
   );
};
 
export default ToDoList;