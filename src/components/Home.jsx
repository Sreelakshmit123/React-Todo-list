import React, { useState } from 'react'
import Button from 'react-bootstrap/Button';

function Home() {
    const [tasks, setTasks] = useState([]);
    const [newTask, setNewTask] = useState("");

    const handleChange = (e) => {
        setNewTask(e.target.value);
    }
    const addTask = () => {
        if (newTask.trim() !== "") {
            setTasks(task => [...task, newTask]);
            setNewTask("");
        }
    }
    const deleteTask = (index) => {
        const updatedTask = tasks.filter((item, i) => i !== index);
        setTasks(updatedTask);
    }
    const deleteAllTask = () => {
        setTasks([]);
    }
    return (
        <>
            <div className='todo'>
                <div className="container pb-5 p-3  ">
                    <h1 className='Heading mb-4 mt-2'><b>Todo App</b></h1>
                    <div className='textareaButton'>
                        <input type="text" value={newTask} onChange={handleChange} className='inputtext  mb-4' placeholder='Add Your New Todo' />
                        <Button onClick={addTask} className='Addbtn'><i class="fa-solid fa-plus"></i></Button>
                    </div>
                    <p>
                        {tasks.map((task, index) =>
                            <p className='showtask' key={index}>
                                <span className='text m-2'>{task}</span>
                                <Button className='deleteButton' onClick={() => deleteTask(index)}><i class="fa-solid fa-trash"></i> </Button>
                            </p>
    
                        )}
                        {tasks.length > 0 && (
                            <div className='clearalltask p-2'>
                                <p>You have {tasks.length} pending {tasks.length === 1 ? "task" : "tasks"}</p>
                                <Button className='deleteAllButton ms-2' onClick={deleteAllTask}>Delete All</Button>
                            </div>
                        )}

                    </p>

                </div>

            </div>
        </>

    )
}

export default Home