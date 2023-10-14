import React, { useState, useEffect } from 'react';
import './App.css';
import TaskList from "./components/TaskList"


function App() {

  let tasksFromStorage;

  if( localStorage.getItem('tasks') ){
    tasksFromStorage = JSON.parse(localStorage.getItem('tasks'))
  }else{
    tasksFromStorage = localStorage.setItem('tasks', JSON.stringify([]))
  }

  const [tasks, setTasks] = useState(tasksFromStorage);

  const formToggler = action => {
    if(action === 'open'){
      console.log('open form')
    }else{
      console.log('close form')
    }
  }

  const [newTask, setNewTask] = useState({status: 0, title:'', dueDate: ''});

  const updateInputVal = (name, val) => {
    if(name === 'title'){
      setNewTask((prevState) => {
        return { ...prevState, ...{title: val} }
      });
    }else{
      setNewTask((prevState) => {
        return { ...prevState, ...{dueDate: val} }
      });
    }
  }

  const submitNewTask = (e) => {
    e.preventDefault();

    setTasks((prevState) => {
      return [...prevState, newTask];
    });
  }

  useEffect(() => {
    localStorage.setItem('tasks', JSON.stringify(tasks))
    setNewTask({status: 0, title:'', dueDate: ''});
  }, [tasks]);


  const taskAction = (action, index) => {
      // console.log(action, index);
      if(action === 'complete'){
        setTasks((prevState) => {
          return [...prevState, newTask];
        });
      }else if('uncomplete'){
        // setTasks((prevState) => {
        //   return [...prevState, newTask];
        // });
      }else{
        // setTasks((prevState) => {
        //   return [...prevState, newTask];
        // });
      }
  }

  return (
    <div className="App">
      <TaskList tasks={tasks} taskAction={taskAction} />
      <div className='add-new-task' id='add-new-task'>
        <form onSubmit={submitNewTask}>
          <div className='input-container'>
            <input required="required" value={newTask.title} type="text" name='title' onChange={(e) => updateInputVal('title', e.target.value)} />
          </div>
          <div className='input-container'>
            <input required="required" value={newTask.dueDate} type="date" name='due-date' onChange={(e) => updateInputVal('due-date', e.target.value)} />
          </div>
          <div className='input-container'>
            <input required="required" type="submit" value='Add' />
          </div>
        </form>
        <button onClick={() => formToggler('open')}>Add New Task</button>
        <button onClick={() => formToggler('close')}>Cancel</button>
      </div>
    </div>      
  );
}

export default App;
