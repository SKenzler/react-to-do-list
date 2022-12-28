import React from 'react';
import { useState } from 'react';
import { FaMarker } from 'react-icons/fa';
import { RiAddCircleFill, RiEdit2Fill, RiDeleteBin6Fill } from 'react-icons/ri';

const Card = () => {

    const [taskItem, setTaskItem] = useState("");
    const [taskList, setTaskList] = useState([]);

    const handleSubmit = (e) => {
        e.preventDefault();

        if (taskItem !== "") {
            setTaskList([{ id: `${taskItem}-${Date.now()}`, taskItem }, ...taskItem])
            setTaskItem("");
        }
    }

    const handleDelete = (id) => {
        const deleteTask = taskList.filter((k) => k.id !== id);
        setTaskList([...deleteTask]);
    }

    return (
        <div className="card">
           
            <FaMarker size={40} color={'#FFF'} />
            <h1>React To Do List</h1>
            <h2>Add, edit and delete tasks required for completion</h2>
        
            <form className="task-form" onSubmit={handleSubmit}>
                <input type='text' value={taskItem} onChange={(e) => setTaskItem(e.target.value)} />
                <button type='submit' className="btn-add"><RiAddCircleFill size={20} /></button>
            </form>

            <ul className="task-list">

                {taskList.map((t) => (
                    <li className="task-item">
                        <span className="task-text" key={t.id}>{t.taskItem}</span>
                        <button type='button' className="btn-edit"><RiEdit2Fill size={20} /></button>
                        <button type='button' className="btn-delete" onClick={() => handleDelete(t.id)}><RiDeleteBin6Fill size={20} /></button>
                    </li>
                ))}
               
            </ul>

        </div>
    );
};

export default Card;