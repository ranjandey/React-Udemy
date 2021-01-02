import React from 'react';
import './UserOutput.css';

const userOutput = (props) =>{
    return(
        <div className='UserOutput'>
            <p>{props.name} Started Learning React</p>
            <p>By March I will Complete React Course on Udemy!!!</p>
        </div>
    )
};

export default userOutput;