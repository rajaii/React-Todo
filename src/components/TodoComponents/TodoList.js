// your components will all go in this `component` directory.
// feel free to change this component.js into TodoList.js
import React from 'react';
import Todo from './Todo';



const TodoList = (props) => {
    return (
        <div>
            {props.todoList.map(item => { 
             return  ( 
            <div>
                <Todo todo={item} toggle={props.toggle}/>
             </div>
             );
            }
            )}
        </div>
    );
};






export default TodoList;