export default App;import React, {Component} from 'react';
import * as Components from './components'



class ToDoList extends Component {
constructor(){
  super();
  this.state = {
    todos: [],
    currentToDo: "",
    }
  }

  handleChange = event => {
    this.setState({currentToDo: event.target.value});
  }

  addItem = event => {
    event.preventDefault();
    console.log("addItem Method Fired");
    this.setState({
      currentToDo: "",
      todos:[...this.state.todos,this.state.currentToDo]})
  }
  
  addCurrentToDo = event => {
    
  }


  deleteCurrentToDo = index => {
    console.log(index) 
    // this.state.todo.filter(el => el !== name)

  
}


  render() {
    console.log(this.state)
    const theList = this.state.todos.map((todos, index) => <li>{todos}
    <button type ="delete" onClick= {()=>this.deleteCurrentToDo(index)}> Delete completed task</button>
    </li>);
    
    return (
    
    

    // </div> 
    // <Link to = "/examplelink"> Go to examplelink!</Link>
    // let id = this.props.match.params.name -> will match url bar
    //   <div>
      <div>
        <form onSubmit={this.addItem}>
          <label htmlFor="Add To Box">Add To-Do Item:</label>
          <input
            type="text"
            name="currentTodo"
            value={this.state.currentToDo}
            onChange={this.handleChange}
          />
          <button type ="submit" onClick= {this.addCurrentToDo}> Add new task</button>
                       
        </form>

        <div class = 'Show list'>
          
          <ul>
           <h1>{theList}</h1>
           
           
          </ul>

        </div>
    </div>
    );
}

}



    

export default App;