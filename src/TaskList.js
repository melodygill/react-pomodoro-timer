import data from "./data.json";
import React, {useState} from 'react';
import ToDoList from "./ToDoList";
import ToDoForm from "./ToDoForm";

//https://www.educative.io/blog/react-hooks-tutorial-todo-list

function TaskList() {
    const[toDoList, setToDoList] = useState(data);

    const handleToggle = (id) => {
        let mapped = toDoList.map(task => {
          return task.id === Number(id) ? { ...task, complete: !task.complete } : { ...task};
        });
        setToDoList(mapped);
    }
    
    const handleFilter = () => {
        let filtered = toDoList.filter(task => {
            return !task.complete;
        });
        setToDoList(filtered);
    }

    const addTask = (userInput) => {
        let copy = [...toDoList];
        copy = [...copy, { id: toDoList.length + 1, task: userInput, complete: false }];
        setToDoList(copy);
      }
    
    return(
        <div className = "TaskList">
            <h1>Task List</h1>
            <ToDoList toDoList = {toDoList}handleToggle={handleToggle} handleFilter={handleFilter}/>
            <ToDoForm addTask={addTask}/>
        </div>

    );

}

export default TaskList;