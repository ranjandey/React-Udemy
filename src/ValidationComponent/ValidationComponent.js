import React from 'react';

const validation = (props) =>{

    let message = "Text too short";

    if(props.inputLength>5){
        message = "Text Long enough!";
    }

    return(
        <div>
            <p>{message}</p>
        </div>
    )
};

export default validation;