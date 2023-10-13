function TaskItem(props) {

    const task = props.task;
    // console.log(props);

    const merkComplete = index => {
        // console.log(index);
    }

    return (
        <li>
            {task.title}
            <button onClick={() => merkComplete(props.itemIndex)}>Completed</button>
        </li>
    );
}

export default TaskItem;