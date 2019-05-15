import React from 'react';

/*
const Todo = (props) => {
    return (
        <div onClick={props.clear}>
        {props.todo.task}
        </div>
    )
};
*/

class Todo extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            todoList: this.props.completeStateProp
        }
    }

    handleComplete = (e) => {
        this.setState({
          todoList: {
            completed: !this.state.todoList.completed
          }})
          console.log(this.state)
         
          e.target.style.textDecoration === 'line-through' ? e.target.style.textDecoration = 'none' : e.target.style.textDecoration = 'line-through'; 
        }

    render() {
        return (
            <div className='theinfo' onClick={this.handleComplete}>
            {this.props.todo.task}
            </div>
        )
    }
}

export default Todo;