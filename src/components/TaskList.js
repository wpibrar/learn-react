// import TaskItem from "./TaskItem";

function TaskLlist(props) {

  const tasks = props.tasks;

  const pendingTasks = tasks.filter((task) =>  {
    return task.status === 0
  });

  const completedTasks = tasks.filter((task) => {
    return task.status === 1
  });

  let pendingTasksContent;
  let completedTasksContent;

  if( pendingTasks.length === 0 ){
    pendingTasksContent = <p>No pending tasks found.</p>;
  }else{
    pendingTasksContent = <ul>
    { pendingTasks.map((task, index) => {
      return (
        <li key={index}>
            <button onClick={() => props.taskAction('complete', task)}>Mark Complete</button>
            {task.title}
            <button onClick={() => props.taskAction('delete', task)}>Delete</button>
        </li>
      );
    }) }
  </ul>;
  }

  if( completedTasks.length === 0 ){
    completedTasksContent = <p>No completed tasks found.</p>;
  }else{
    completedTasksContent = <ul>
    { completedTasks.map((task, index) => {
      return (
        <li key={index}>
            <button onClick={() => props.taskAction('uncomplete', task)}>Mark Uncomplete</button>
            {task.title}
            <button onClick={() => props.taskAction('delete', task)}>Delete</button>
        </li>
      );
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