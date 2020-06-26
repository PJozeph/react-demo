import './App.css';
import Person from './Person/Person'
import React, { Component }  from 'react';

class App extends Component {

  state = {
    persons: [
      { name: 'József', age: 29 },
      { name: 'Anna', age: 25 },
    ], 
    someOtherState : 'just some other value'
  }

  switchNameHandler = (newName) => {
    console.log("button was clicked");
    this.setState({ 
      persons : [
        { name: newName, age: 29 },
        { name: 'Anna Marsh', age: 25 },
      ] });
  }

  nameChangeHandler = (event) => {
    this.setState({ 
      persons : [
        { name: "József", age: 29 },
        { name: event.target.value, age: 25 },
      ] });
  }
 
  render() {
    const style = {
      backgroundColor : 'white',
      font : 'inherit',
      border: '1px solid blue',
      paddig: '8px',
      cursor: 'pointer'
    }
    return (
      <div className='App'>
        <h1>Hi I am React</h1>
        <button
          style={style} 
          onClick={ () => this.switchNameHandler('Jocó')}>Switch name
        </button>
        <Person 
          name={this.state.persons[0].name} 
          age={this.state.persons[0].age}
          click={this.switchNameHandler.bind(this,"Joci")}
          > My hobbies : Crossfit !
          </Person>
        <hr />
        <Person 
          name={this.state.persons[1].name} 
          age={this.state.persons[1].age} 
          click={this.switchNameHandler.bind(this,"Joci")}
          change = {this.nameChangeHandler}
          />
      </div>
    );
  }
}
export default App;
