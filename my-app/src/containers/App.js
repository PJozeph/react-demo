import '../containers/App.css';
import Persons from '../components/Persons/Persons'
import React, { Component } from 'react';
import Cokpit from '../components/Cokpit/Cokpit'

class App extends Component {

  constructor(props) {
    super(props);
    console.log('App.js constacture');
  }

  state = {
    persons: [
      { id: '0', name: 'József', age: 29 },
      { id: '1', name: 'Anna', age: 25 },
      { id: '2', name: 'Mária', age: 29 },
    ],
    someOtherState: 'just some other value',
    showPersos: false,
    showCokpit: true
  }

  static getDrivedStateFromProps(props, state) {
    console.log('App.js getDrivedStateFromProps', props);
    return state;
  }

  componentDidMount(){
    console.log('[App.js] componentDidMount()')
  }

  togglePersonHandler = () => {
    const show = this.state.showPersos;
    this.setState({
      showPersos: !show
    })
  }

  deletePerson = (index) => {
    // const persons = this.state.persons.slice();
    const persons = [...this.state.persons];
    persons.splice(index, 1);
    this.setState({ persons: persons });
  }

  shouldComponentUpdate(nextProps, nextState) {
    console.log('[App.js] shouldComponentUpdate');
    return true;
  }

  componentDidUpdate() {
    console.log('[App.js] componentDidUpdate()')
  }

  nameChangeHandler = (event, index) => {
    const personIndex = this.state.persons.findIndex(p => {
      return p.id === index;
    });

    const person = {
      ...this.state.persons[personIndex]
    }

    person.name = event.target.value;
    const persons = [...this.state.persons];
    persons[personIndex] = person;
    this.setState({ persons: persons });
  }

  render() {
    console.log('[App.js] rendering...')
    let persons = null;
    if (this.state.showPersos) {
      persons = (
        <div>
          <Persons 
            persons={this.state.persons} 
            changed={this.nameChangeHandler} 
            clicked={this.deletePerson}/>
        </div>
      );
    }

    return (
      <div className='App'>
        <button onClick={() => {
          this.setState({showCokpit: false});
        }}>Show Cokpit</button>
        {this.state.showCokpit ? <Cokpit
        persons={this.state.persons}
        title={this.props.appTitle} 
        person={this.state.persons}
        toggle={this.togglePersonHandler}
        showPersos={this.state.showPersos}/> : null}
        {persons}
      </div>
    );
  }
}
export default App;
