import Header from './Header';
import List from './List';

const Task = () => {
    
  
  return (
    <div className='List'>
      <div className='container'>
         <Header  text = 'TodoList'/>
          <List />
      </div>
    </div>
  )
}

export default Task
