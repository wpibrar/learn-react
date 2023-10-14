import React, { useState } from "react";

function AddNewTaskForm(props) {

    const [newTask, setNewTask] = useState({status: 0, title:'', dueDate: ''});

    const updateInputVal = (name, val) => {
        if (name === "title") {
            setNewTask((prevState) => {
                return { ...prevState, ...{ title: val } };
            });
        } else {
            setNewTask((prevState) => {
                return { ...prevState, ...{ dueDate: val } };
            });
        }
    };

    const submitNewTask = (e) => {
        e.preventDefault();
        props.addNewTask(newTask);
    };

    return (
        <div className="add-new-task" id="add-new-task">
            <form onSubmit={submitNewTask}>
                <div className="input-container">
                    <input required="required" value={newTask.title} type="text" name="title" onChange={(e) => updateInputVal("title", e.target.value)} />
                </div>
                <div className="input-container">
                    <input required="required" value={newTask.dueDate} type="date" name="due-date" onChange={(e) => updateInputVal("due-date", e.target.value)} />
                </div>
                <div className="input-container">
                    <input required="required" type="submit" value="Add" />
                </div>
            </form>
        </div>
    );
}

export default AddNewTaskForm;
