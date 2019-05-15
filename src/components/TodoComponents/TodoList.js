// your components will all go in this `component` directory.
// feel free to change this component.js into TodoList.js
import React from 'react';
import Todo from './Todo';


/*
const TodoList = (props) => {
    return (
        <div onClick={props.clickTask}>
            {props.forButtonAdd.map(todo => { 
             return  ( 
            <div>
                <Todo todo={todo} />
             </div>
             )
            }
            )}
        </div>
    );
};
*/


class TodoList extends React.Component {
    constructor(props) {
        super(props);
        //const completedList = this.props.passForComplete.map(item => item.completed)
        this.state = {
            todoList: props.passForComplete
        }
    }

    /*handleComplete = (e) => {
        this.setState({
          todoList: {
            completed: !this.state.todoList.completed
          }})
          console.log(this.state)
         
          e.target.style.textDecoration === 'line-through' ? e.target.style.textDecoration = 'none' : e.target.style.textDecoration = 'line-through'; 
        }

*/

    render() {
        return (
            <div >
                {this.props.forButtonAdd.map(todo => { 
                 return  ( 
                <div>
                    <Todo todo={todo} clear={this.handleComplete} completeStateProp={this.state.todoList}/>
                 </div>
                 )
                }
                )}
            </div>
        );
    }
}



export default TodoList;