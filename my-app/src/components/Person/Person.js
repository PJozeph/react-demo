import React, {Component} from 'react';
import '../Person/Person.css';
import styled from 'styled-components';


const PersonDiv = styled.div`
    width: 60%;
    margin: 16px auto;
    border: 1px solid #eee;
    box-shadow: 0 2px 3px #ccc;
    padding: 16px;
    text-align: center;
    
    @media(min-width: 500px) {
        width :450px;
    }`;
class Person extends Component {

    render() {
        console.log('[Person.js] rendering....')
        return (
            <PersonDiv>
                <p>I am a person</p>
                <p onClick={this.props.click}>My name is {this.props.name}</p>
                <p>I am {this.props.age} years old</p>
                <p>{this.props.children}</p>
                <input type="text" onChange={this.props.change} value={this.props.name}></input>
            </PersonDiv>
        );
    }

    componentWillUnmount() {
        console.log('[Person.js] componentWillUnmount()')
      }

}
// two way binding
//<input type="text" onChange={props.change} value={props.name}></input>

export default Person;