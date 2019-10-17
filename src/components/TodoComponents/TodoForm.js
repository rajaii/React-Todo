import React from 'react';


const TodoForm = (props) => {


    return (
        <div className='btnFlex'>
        <form name='addTodo'>
            <input className='textenter'
                type='text'
                value={props.task}
                placeholder='task'
                name='task'
                onChange={props.handleChange}
            />
            
        </form>
        
        <div className='btn'>
            <button onClick={props.handleAddClick}>Add Todo</button>
            <button onClick={props.clearClick}>Clear Completed</button>
            
            
        </div>
        </div>
    );

};

export default TodoForm;
