import React from 'react';
import './components/TodoComponents/Todo.css';
import TodoForm from './components/TodoComponents/TodoForm';
import TodoList from './components/TodoComponents/TodoList';


const todoData = [
  {
  task: 'Coding Class',
  id: Date.now(),
  completed: false,
},
{
  task: 'BJJ Class',
  id: Date.now(),
  completed: false,
},
{
  task: 'Cook Food',
  id: Date.now(),
  completed: false,
},
{
  task: 'Apply for job',
  id: Date.now(),
  completed: false,
},
]

class App extends React.Component {
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state
  constructor(props) {
    super(props);
    this.state = {
      todoList: todoData,
      todoTask: {
       task: '',
       id: Date.now(),
       completed: false, 
      }
    };
  }
handleChange = (e) => {
  this.setState({
    todoTask: {
      ...this.state.todoList,
      task: e.target.value, 
      id: Date.now(),
      completed: false
    }
  })
  console.log(this.state.todoTask.task);
};

handleClearClick = (e) => {
  let taskVar = [];
  taskVar.push(this.state.todoList);
  console.log(taskVar);
 let tasksToLeaveIn = taskVar.filter(t => t.completed === false);
 console.log(tasksToLeaveIn)
  this.setState({
    todoList: tasksToLeaveIn
  })
}

handleComplete = (e) => {
this.setState({
  todoList: {
    completed: !this.state.todoList.completed
  }})
  e.target.style.textDecoration === 'line-through' ? e.target.style.textDecoration = 'none' : e.target.style.textDecoration = 'line-through'; 
}

handleAddClick = (e) => {
  
  this.setState({
    todoList: [...this.state.todoList, this.state.todoTask],
    todoTask: {
      task: '',
      id: Date.now(),
      completed: false, 
     }
  })
}

  render() {
    return (
      <div className='wholechabang'>
        <h2 className='title'>Welcome to your Todo App!</h2>

        <TodoList forButtonAdd={this.state.todoList} clickTask={this.handleComplete} passForComplete={this.state.todoList}/>
        <TodoForm handleAddClick={this.handleAddClick} task={this.state.todoTask.task} handleChange={this.handleChange} clearClick={this.handleClearClick} />
      </div>

    );
  }
}

export default App;

