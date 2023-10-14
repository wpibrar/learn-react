import React, { useState, useEffect } from "react";
import "./App.css";
import TaskList from "./components/TaskList";
import AddNewTaskForm from "./components/AddNewTaskForm";

function App() {
    let tasksFromStorage;

    if (localStorage.getItem("tasks")) {
        tasksFromStorage = JSON.parse(localStorage.getItem("tasks"));
    } else {
        tasksFromStorage = localStorage.setItem("tasks", JSON.stringify([]));
    }

    const [tasks, setTasks] = useState(tasksFromStorage);

    useEffect(() => {
        localStorage.setItem("tasks", JSON.stringify(tasks));
        console.log("updated 2");
    }, [tasks]);

    const addNewTask = (newTask) => {
        setTasks((prevState) => {
            return [...prevState, newTask];
        });
    };

    const taskAction = (action, task) => {
        let currentTasksArray = tasks;
        console.log(tasks);
        console.log(action, task);

        if (action === "delete") {
            let toDelete = tasks.indexOf(task);
            currentTasksArray.splice(toDelete, 1);
            setTasks(currentTasksArray)

        }
    };

    

    return (
        <div className="App">
            <TaskList tasks={tasks} taskAction={taskAction} />
            <AddNewTaskForm addNewTask={addNewTask} />
        </div>
    );
}

export default App;
