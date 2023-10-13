import TaskItem from "./TaskItem";

function TaskLlist(props) {

  const tasks = props.tasks;

  return (
    <div className='task-list'>
      <ul>
        { tasks.map((task) => {
          let index = tasks.indexOf(task);
          return <TaskItem key={index} itemIndex={index} task={task} />;
        }) }
        
      </ul>
    </div>
  );
}

export default TaskLlist;