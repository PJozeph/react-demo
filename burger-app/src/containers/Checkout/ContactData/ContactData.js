import React, { Component } from 'react'
import Button from '../../../components/UI/Button/Button';
import Styled from 'styled-components';

import axios from '../../../axios-order';

import Spinner from '../../../components/UI/Spinner/Spinner';

const ContactDataContainer = Styled.div`
    margin: 20px auto;
    width: 80%;
    text-align: center;
    box-shadow: 0 2px 3px #ccc;
    border: 1px solid #eee;
    padding: 10px;
    box-sizing: border-box;

    @media(min-width: 600px) {
        width: 500px;
    }
`
const FormContainer = Styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    Input {
        width : 250px;
        margin 2px;
    }
`
class ContactData extends Component {

    state = {
        name: '',
        email: '',
        address: {
            street: '',
            postalCode: ''
        },
        loading: false
    }

    componentDidMount() {
        console.log("contact data mounted")
    }

    orderHandler = (event) => {
        event.preventDefault();
        this.setState({ loading: true });
        const order = {
            ingredients: this.props.ingredients,
            totalPrice: this.props.totalPrice,
            customer: {
                name: 'Pallagi József',
                address: 'Testing',
                email: 'eamil@email.com'
            }
        }

        axios.post("orders.json", order)
            .then((response) => { 
                this.setState({ loading: false });   
                this.props.history.push('/');
            })
            .catch((error) => { this.setState({ loading: false }); })
    }

    render() {
        let form = (
            <form>
                <FormContainer>
                    <input type="text" name="name" placeholder="Your Name" />
                    <input type="email" name="email" placeholder="Your Email" />
                    <input type="text" name="street" placeholder="Street" />
                    <input type="text" name="postal" placeholder="Postal Code" />
                </FormContainer>
                <Button type='success' clicked={this.orderHandler}>ORDER</Button>
            </form>
        );

        if (this.state.loading) {
            form = <Spinner />
        }
        return (
            <ContactDataContainer>
                <h4>Enter your Contact Data</h4>
                {form}
            </ContactDataContainer>
        );
    }

}

export default ContactData;