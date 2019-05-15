import React from 'react';

const TodoForm = (props) => {


    return (
        <div>
        <form name='addTodo'>
            <input 
                type='text'
                value={props.task}
                placeholder='task'
                name='task'
                onChange={props.handleChange}
            />
        </form>
        <button onClick={props.handleAddClick}>Add Todo</button>
        <button >Clear Completed</button>
        </div>
    );

};

export default TodoForm;
