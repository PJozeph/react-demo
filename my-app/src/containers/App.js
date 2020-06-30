import '../containers/App.css';
import Persons from '../components/Persons/Persons'
import React, { Component } from 'react';
import Cokpit from '../components/Cokpit/Cokpit'
import withClass from '../hoc/withClass'
import Aux from '../hoc/Auxiliary';
import AuthConext from '../context/auth-context'


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
    showCokpit: true,
    changeCounter: 0,
    isAuthenticated: false
  }

  static getDrivedStateFromProps(props, state) {
    console.log('App.js getDrivedStateFromProps', props);
    return state;
  }

  componentDidMount() {
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

    // better way to update state when you are depend on old state
    this.setState((prevState, currentProps) => {
      return {
        persons: persons,
        changeCounter: prevState.changeCounter + 1
      }
    });
  }

  loginHandler = () => {
    this.setState({
      isAuthenticated: true
    });
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
            clicked={this.deletePerson}
            isAuthenticated={this.state.isAuthenticated} />
        </div>
      );
    }

    return (
      <Aux classes={'App'}>
        <button onClick={() => {
          this.setState({ showCokpit: false });
        }}>Show Cokpit</button>
        <AuthConext.Provider 
        value={{authenticated : this.state.isAuthenticated, login : this.loginHandler}}>
          {this.state.showCokpit ? <Cokpit
            personsLength={this.state.persons.length}
            title={this.props.appTitle}
            person={this.state.persons}
            toggle={this.togglePersonHandler}
            showPersos={this.state.showPersos} /> : null}
          {persons}
        </AuthConext.Provider>
      </Aux>
    );
  }
}
export default withClass(App, 'App');
