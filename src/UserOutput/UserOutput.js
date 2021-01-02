import React from 'react';
import './UserOutput.css';

const userOutput = (props) =>{
    return(
        <div className='UserOutput'>
            <p>{props.name} Started Learning React</p>
            <p>React Course Needs to be completed by March</p>
        </div>
    )
};

export default userOutput;