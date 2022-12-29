import React, { useState } from 'react';
import { FaMarker } from 'react-icons/fa';
import { RiAddCircleFill, RiEdit2Fill, RiDeleteBin6Fill } from 'react-icons/ri';

const Card = () => {

    const [taskItem, setTaskItem] = useState("");
    const [taskList, setTaskList] = useState([]);
    const [editId, setEditId] = useState(0);

    const handleSubmit = (e) => {
        e.preventDefault();

        if (editId) {
            const editTask = taskList.find((i) => i.id === editId);
            const updateTask = taskList.map((t) => t.id === editTask.id ? (t = { id: t.id, taskItem }) : { id: t.id, taskItem: t.taskItem });
            setTaskList(updateTask);
            setEditId(0);
            setTaskItem("");
            return;
        }

        if (taskItem !== '') {
            setTaskList([{ id: `${taskItem}-${Date.now()}`, taskItem }, ...taskList])
            setTaskItem('');
        }
    }

    const handleDelete = (id) => {
        const deleteTask = taskList.filter((k) => k.id !== id);
        setTaskList([...deleteTask]);
    }

    const handleEdit = (id) => {
        const editTask = taskList.find((i) => i.id === id);
        setTaskItem(editTask.taskItem);
        setEditId(id);
    }

    return (
        <div className="card">
           
            <FaMarker size={40} color={'#FFF'} />
            <h1>React To Do List</h1>
            <h2>Add, edit and delete tasks required for completion</h2>
        
            <form className="task-form" onSubmit={handleSubmit}>
                <input type='text' value={taskItem} onChange={(e) => setTaskItem(e.target.value)} />
                <button type='submit' className="btn-add"> {editId ? <RiEdit2Fill size={20} /> : <RiAddCircleFill size={20} />} /></button>
            </form>

            <ul className="task-list">

                {taskList.map((t) => (
                    <li className="task-item" key={t.id}>
                        <span className="task-text">{t.taskItem}</span>
                        <button type='button' className="btn-edit" onClick={() => handleEdit(t.id)}><RiEdit2Fill size={20} /></button>
                        <button type='button' className="btn-delete" onClick={() => handleDelete(t.id)}><RiDeleteBin6Fill size={20} /></button>
                    </li>
                ))}
  
            </ul>

        </div>
    );
};

export default Card;