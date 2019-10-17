import React from 'react';



const Todo = (props) => {
    return (
        <div className={`theinfo${props.todo.completed ? ' completed' : ''}`} onClick={() => props.toggle(props.todo.id)}>
        {props.todo.task}
        </div>
    )
};



      
 

export default Todo;