import React, { useState, useEffect } from 'react';
import './App.css';
import TaskList from "./components/TaskList"


function App() {

  let tasksFromStorage;

  if( localStorage.getItem('tasks') ){
    tasksFromStorage = JSON.parse(localStorage.getItem('tasks'))
    console.log('found')
  }else{
    tasksFromStorage = localStorage.setItem('tasks', JSON.stringify([]))
    console.log('not found')
  }

  console.log(tasksFromStorage)

  const [tasks, setTasks] = useState(tasksFromStorage);

  const formToggler = action => {
    if(action === 'open'){
      get
    }else{

    }
  }

  return (
    <div className="App">
      <TaskList tasks={tasks} />
      <div className='add-new-task' id='add-new-task'>
        <form style={{display: 'none'}}>
          <div className='input-container'>
            <input type="text" name='title' />
          </div>
          <div className='input-container'>
            <input type="date" name='due-date' />
          </div>
          <div className='input-container'>
            <input type="submit" value='Add' />
          </div>
        </form>
        <button onClick={() => formToggler('open')}>Add New Task</button>
        <button onClick={() => formToggler('close')}>Cancel</button>
      </div>
    </div>      
  );
}

export default App;
