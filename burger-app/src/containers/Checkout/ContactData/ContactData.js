import React, { Component } from 'react'
import Button from '../../../components/UI/Button/Button';
import Styled from 'styled-components';
import Input from  '../../../components/UI/Input/Input';
import axios from '../../../axios-order';

import Spinner from '../../../components/UI/Spinner/Spinner';
import { connect } from 'react-redux';

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
`
class ContactData extends Component {

    state = {
        orderForm : { 
            name: {
                elementType : 'input',
                elementConfig: {
                    type: 'text',
                    placeholder: 'Your Name',
                }, 
                value : '', 
                validation : { 
                    required : true
                },
                valid : false,
                touched: false
            },
            street: {
                elementType : 'input',
                elementConfig: {
                    type: 'text',
                    placeholder: 'Your Street',
                }, 
                value : '' , 
                validation : {
                    required : true
                },
                valid : false,
                touched: false
            },
            zipCode: {
                elementType : 'input',
                elementConfig: {
                    type: 'text',
                    placeholder: 'Your Zip Code' ,
                }, 
                value : '' ,
                validation : {
                    required : true,
                    minLength : 5,
                    maxLength : 5,
                },
                valid : false,
                touched: false
            },
            country: {
                elementType : 'input',
                elementConfig: {
                    type: 'text',
                    placeholder: 'Your Country'
                }, 
                value : '',
                validation : {
                    required : true
                },
                valid : false,
                touched: false
            },
            email: {
                elementType : 'input',
                elementConfig: {
                    type: 'text',
                    placeholder: 'Your Email'
                }, 
                value : '',
                validation : {
                    required : true
                },
                valid : false,
                touched: false
            },
            orderType: {
                elementType : 'select',
                elementConfig: {
                    options : [
                        {value : 'fastest', display: 'Fastest'},
                        {value : 'cheapest', display: 'Cheapest'}
                    ]
                },
                valid: true, 
                value : '',
                validation : {}
            },

        },
        formIsValid: false,
        loading: false
    }

    checkValidity(value, rules, touched) {
        let isValid = true;

        if(rules.required && touched) {
            isValid = value.trim() !== '' && isValid;
        }

        if(rules.minLength  && touched) {
            isValid = value.length >= rules.minLength && isValid;
        }

        if(rules.maxLength  && touched) {
            isValid = value.length <= rules.maxLength && isValid;
        }
        return isValid;
    } 

    orderHandler = (event) => {
        event.preventDefault();
        this.setState({ loading: true });

        const formData = {};
        for(let formElementIdentifier in this.state.orderForm) {
            formData[formElementIdentifier] = this.state.orderForm[formElementIdentifier].value;
        }

        const order = {
            ingredients: this.props.ingredients,
            totalPrice: this.props.totalPrice,
            orderData: formData
        }
        axios.post("orders.json", order)
            .then((response) => { 
                this.setState({ loading: false });   
                this.props.history.push('/');
            })
            .catch((error) => { 
                this.setState({ loading: false });
             })
    }

    inputChangedHandler = (event, inputIdentifier) => {
        const updatedForm = {...this.state.orderForm};
        const updatedOrderFormElement = {...updatedForm[inputIdentifier]};
        
        updatedOrderFormElement.value = event.target.value;
        updatedOrderFormElement.valid = this.checkValidity(updatedOrderFormElement.value ,updatedOrderFormElement.validation, updatedOrderFormElement.touched);
        updatedOrderFormElement.touched = true;
        updatedForm[inputIdentifier] = updatedOrderFormElement;

        let formIsValid = true;
        for (let inputIdentifier in updatedForm) {
            formIsValid = updatedForm[inputIdentifier].valid && formIsValid;
        }

        this.setState({orderForm: updatedForm, formIsValid : formIsValid});
    }

    render() {
        // turn OrderForm into array
        const formElementsArray = [];
        for (let key in this.state.orderForm) {
            formElementsArray.push({
                id: key,
                config : this.state.orderForm[key]
            });
        }
        
        let form = (
            <form onSubmit={this.orderHandler}>
                <FormContainer>
                    {formElementsArray.map((element) => (
                        <Input
                        key={element.id} 
                        elementType={element.config.elementType} 
                        elementConfig={element.config.elementConfig} 
                        value={element.config.value} 
                        changed={(event)=> this.inputChangedHandler(event,element.id)}
                        invalid={element.config.valid}
                        touched={element.config.touched}/>
                    ) )}
                </FormContainer>
                <Button type='success' clicked={this.orderHandler} disabled={!this.state.formIsValid} >ORDER</Button>
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

const mapStateToProps = state => {
    return {
        ingredients: state.ingredients,
        totalPrice : state.totalPrice
    };
};

export default connect(mapStateToProps)(ContactData);