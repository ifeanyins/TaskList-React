import { SetStateAction, useEffect, useState } from 'react';
import {FaTimes} from 'react-icons/fa';
import TodoForm from './TodoForm';
import Todo from './Todo';

const List = () => {
  
  const [tasks, setTasks] = useState(() => {
    const localVal = localStorage.getItem("ITEMS");
    if(localVal == null) return [];
    return JSON.parse(localVal)
  });
  

  useEffect(() => {
    localStorage.setItem("ITEMS", JSON.stringify(tasks))
  }, [tasks]);

  const delTask = (id) => {
    const filteredTasks = tasks.filter(e => e.id !== id);
    setTasks(filteredTasks);
  }

  const AddTodo = (title) => {
    setTasks(t =>[...t, {title, id:crypto.randomUUID(), completed:false}]);
  }


  return (
    <>
      <TodoForm nsagba={AddTodo}/>
       <Todo tasks={tasks} delTask={delTask}/>
    </>
  ) 
}
// get each index for tasks

// render the todo check
// add remainder 
// delete button check
// local storage 
export default List
