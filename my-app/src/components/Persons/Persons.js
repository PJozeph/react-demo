import React, { PureComponent } from 'react';
import Person from '../../components/Person/Person';

class Persons extends PureComponent {

  // static getDrivedStateFromProps(props, state) {
  //   console.log('[Persons.js] getDrivedStateFromProps()');
  //   return state;
  // }

  // componentWillReceiveProps(props) {
  //   console.log('componentWillReceiveProps(props)', props);
  // }

  // shouldComponentUpdate(nextProps, nextState) {
  //   console.log('[Persons.js shouldComponentUpdate]')
  //    if(nextProps.pesrons !== this.props.persons ||
  //       nextProps.changed !== this.props.changed ||
  //       nextProps.clicked !== this.props.clicked ) {
  //      return true;
  //    } else {
  //      return false;
  //    }
  // }

  // getSnapshotBeforeUpdate(prevProps, prevState) {
  //   console.log('[Person.js] getSnapshotBeforeUpdate()');
  //   return {message: 'Snapshot!'};
  // }

  componentDidUpdate(prevProps, prevState, snapshot) {
    console.log('[Person.js] componentDidUpdate()');
    console.log(snapshot);
  }

  componentWillUnmount() {
    console.log('[Persons.js] componentWillUnmount()')
  }

  render() {
    console.log('[Persons.js rendering....]');
    return this.props.persons.map((person, index) => {
      return (
        <Person
          key={person.id}
          name={person.name}
          age={person.age}
          click={() => this.props.clicked(index)}
          change={(event) => this.props.changed(event, person.id)}
          />
      );
    });
  }
}
export default Persons;