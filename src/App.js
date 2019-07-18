import React, {Component} from 'react';
import './index.css';



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

      //prevent user from entering empty space
      // if(this.state.currentToDo !=="") {this.setState/{ 
      //   todos:[...this.state.todos, this.state.currentToDo],};
      //   deleteItem=()=>{}
      //   console.log(event)

  }
  
  addCurrentToDo = event => {
    
  }


  deleteToDo = index => {
    console.log(index); 
    this.setState({
      todos: this.state.todos.filter(el =>{
        return el !== index;
      })
    })

    // let newArray = this.state.todos.filter
    // return newArray
    // // function filterItems(index){
    // return arrayExpression.filter(function(el)){
    //   return (el.toDoList()indexOf(query.toDoList()) !== -1);
   
  }
  
  render(){
  console.log(this.state)
  
  const theList = this.state.todos.map((index) => <li key={index}>{index}
  <button type ="delete" onClick= {()=>this.deleteToDo(index)}> Task Done </button>
  </li>);
  
  return (
    <div>
      {/* console.log(this.state)
      const theList = this.state.todos.map((todos, index) => <li>{todos}
      <button type ="delete" onClick= {()=>this.deleteCurrentToDo(index)}> Task Done </button>
      </li>); */}
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

    <div className="container">
      <div className = 'Show list'>
        
        <ul>
         <h1>{theList}</h1>
         
         <li></li>
                    
        </ul>

      </div>
  </div>
    </div>

  );
  
}
}


  // render() 
  //   console.log(this.state)
  //   const theList = this.state.todos.map((todos, index) => <li>{todos}
  //   <button type ="delete" onClick= {()=>this.deleteCurrentToDo(index)}> Task Done </button>
  //   </li>);
    
  //   return (
  //     <div>
  //       <form onSubmit={this.addItem}>
  //         <label htmlFor="Add To Box">Add To-Do Item:</label>
  //         <input
  //           type="text"
  //           name="currentTodo"
  //           value={this.state.currentToDo}
  //           onChange={this.handleChange}
  //         />
  //         <button type ="submit" onClick= {this.addCurrentToDo}> Add new task</button>
                       
  //       </form>

  //     <container>
  //       <div class = 'Show list'>
          
  //         <ul>
  //          <h1>{theList}</h1>
           
  //          <li></li>
                      
  //         </ul>

  //       </div>
  //   </container>
  //     </div>

  //   );



  export default ToDoList