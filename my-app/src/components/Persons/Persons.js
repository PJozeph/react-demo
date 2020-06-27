import React from 'react';
import Person from '../../components/Person/Person'
import person from '../../components/Person/Person';

const persons = (props) => (
    props.persons.map((person, index) => {
        return <Person
          key={person.id}
          name={person.name}
          age={person.age}
          click={() => props.clicked(index)}
          change={(event) => props.changed(event, person.id)} />
      })
    );
export default persons;