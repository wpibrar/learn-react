// import TaskItem from "./TaskItem";

function TaskLlist(props) {

  const tasks = props.tasks;

  const pendingTasks = tasks.filter((task) =>  task.status === 0);
  const completedTasks = tasks.filter((task) =>  task.status === 1);

  console.log(pendingTasks.length);
  console.log(completedTasks.length);

  let pendingTasksContent;
  let completedTasksContent;

  if( pendingTasks.length === 0 ){
    pendingTasksContent = <p>No pending tasks found.</p>;
  }else{
    pendingTasksContent = <ul>
    { pendingTasks.map((task, index) => {
      if( task.status === 0 ){
        return (
        <li key={index}>
            <button onClick={() => props.taskAction('complete', index)}>Mark Complete</button>
            {task.title}
            <button onClick={() => props.taskAction('delete', index)}>Delete</button>
        </li>
        );
      }
    }) }
  </ul>;
  }

  if( completedTasks.length === 0 ){
    completedTasksContent = <p>No completed tasks found.</p>;
  }else{
    completedTasksContent = <ul>
    { completedTasks.map((task, index) => {
      if( task.status === 0 ){
        return (
          <li key={index}>
              <button onClick={() => props.taskAction('uncomplete', index)}>Mark Uncomplete</button>
              {task.title}
              <button onClick={() => props.taskAction('delete', index)}>Delete</button>
          </li>
        );
      }
    }) }
  </ul>;
  }

  return (
    <>
      <div className='task-list'>
        <h3>Pending Tasks</h3>
        {pendingTasksContent}
      </div>
      <div className='task-list'>
        <h3>Completed Tasks</h3>
        {completedTasksContent}
      </div>
    </>
  );
}

export default TaskLlist;