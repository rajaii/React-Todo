import React from 'react';
import './components/TodoComponents/Todo.css';
import TodoForm from './components/TodoComponents/TodoForm';
import TodoList from './components/TodoComponents/TodoList';
import SearchForm from './components/TodoComponents/SearchForm';



const todoList = [
  {
  task: 'Coding Class',
  id: 1,
  completed: false,
},
{
  task: 'BJJ Class',
  id: 2,
  completed: false,
},
{
  task: 'Cook Food',
  id: 3,
  completed: false,
},
{
  task: 'Apply for job',
  id: 4,
  completed: false,
},
];


class App extends React.Component {
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state
  constructor(props) {
    super(props);
    this.state = {
      todoList,
      todoTask: {
       task: '',
       id: '',
       completed: '', 
      },
      error: '',
    };
  } 
handleChange = (e) => {
  this.setState({
    ...this.state.todoList,
    todoTask: {
      task: e.target.value, 
      id: Date.now(),
      completed: false
    }
  })
  console.log(this.state.todoTask.task);
};

handleClearClick = (e) => {
  e.preventDefault();
  this.setState({
    todoList: this.state.todoList.filter(item => !item.completed)
  });
};

handleComplete = itemId => {
  console.log('item Id: ', itemId);
   this.setState({
     id: Date.now(),
     todoList: this.state.todoList.map(item => {
       if (itemId === item.id) {
         return {
           ...item,
           completed: !item.completed
         };
       }
       return item;
     })
   });
};


searchUtilityStep1 = (e) => {
  this.setState({
    ...this.state.todoList,
    todoTask: {
      task: e.target.value,
      id: Date.now(),
      completed: false,
    }
  })
}


searchUtilityStep3() {
  this.setState({
    todoList: [...this.state.todoList, this.state.todoTask],
    todoTask: {
      task: '',
      id: Date.now(),
      completed: false,
    }
  });

};

searchUtilityStep2 = (e) => {
  let potentialAnswer = this.state.todoList.filter(item => 
    item.task === e.target.value 
  )
  console.log(potentialAnswer)
  if (potentialAnswer.length > 0) {
  this.setState({
    todoList: [this.state.todoList, this.state.todoTask],
    todoTask: {
      task: '',
      id: Date.now(),
      completed: false,
    }
  });
 } else { 
  this.setState({
   error: 'wrong search option',
    
  })
  
  this.searchUtilityStep3();
 
 
 };



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
}

  render() {
    return (
      <div className='wholechabang'>
        <h2 className='title'>Welcome to your Todo App!</h2>

        <TodoList todoList={this.state.todoList} mark={this.markCompleted} toggle={this.handleComplete}/>
        <TodoForm handleAddClick={this.handleAddClick} task={this.state.todoTask.task} handleChange={this.handleChange} clearClick={this.handleClearClick} />
        <SearchForm sU1={this.searchUtilityStep1} searchUtility={this.searchUtilityStep2} list={this.state.todoTask.task}/>
      </div>

    );
  }
}

export default App;
