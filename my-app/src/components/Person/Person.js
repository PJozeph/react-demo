import React, { PureComponent } from 'react';
import '../Person/Person.css';
import styled from 'styled-components';
import Aux from '../../hoc/Auxiliary';
import PropTypes from 'prop-types';
import AuthContext from '../../context/auth-context';

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

class Person extends PureComponent {

    // shouldComponentUpdate(nextProps, nextState) {
    //     if (nextProps.pesrons !== this.props.persons) {
    //         return true;
    //     } else {
    //         return false;
    //     }
    // }
    // <React.Fragment>  same as Aux.js

    constructor(props) {
        super(props);
        this.inputElementRef = React.createRef();
    }

    static contextType = AuthContext;

    componentDidMount() {
        // this.inputElement.focus();
        this.inputElementRef.current.focus();
        console.log(this.context.authenticated);
    }


    render() {
        console.log('[Person.js] rendering....')
        return (
            <Aux>
                <PersonDiv>
                    {
                        this.context.authenticated ?
                            <p>Authorized</p> : <p>Log in</p>
                    }

                    <p>I am a person</p>
                    <p onClick={this.props.click}>My name is {this.props.name}</p>
                    <p>I am {this.props.age} years old</p>
                    <p>{this.props.children}</p>
                    <input
                        // ref={(inputElement) => {this.inputElement = inputElement}}
                        ref={this.inputElementRef}
                        type="text"
                        onChange={this.props.change}
                        value={this.props.name}>
                    </input>
                </PersonDiv>
            </Aux>
        );
    }

    componentWillUnmount() {
        console.log('[Person.js] componentWillUnmount()')
    }

}
// two way binding
//<input type="text" onChange={props.change} value={props.name}></input>

Person.propTypes = {
    click: PropTypes.func,
    change: PropTypes.func,
    name: PropTypes.string,
    age: PropTypes.number
}

export default Person;