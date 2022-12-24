import React from 'react';
import { FaMarker } from 'react-icons/fa';

const Card = () => {

    return (
        <div className="card">
           
            <FaMarker size={40} color={'#FFF'}/>
            <h1>React To Do List</h1>
            <h2>Add, edit and delete tasks required for completion</h2>
        
        </div>
    );
};

export default Card;