import React, {Component} from 'react';
import CheckoutSummary from '../../components/Order/CheckoutSummary';
import ContactData from '../../containers/Checkout/ContactData/ContactData';
import { Route } from 'react-router-dom';

class Checkout extends Component {

    state = {
        ingredients : {} ,
        totalPrice : 0
    }

    componentWillMount() {
        console.log(this.props.location.search)
        const query = new URLSearchParams(this.props.location.search);
        const ingredients = {};
        let price = 0;
        for (let param of query.entries()) {
            // salad : 1
            if(param[0] == 'price') {
                price = param[1];
            } else {
                ingredients[param[0]] = +param[1];
            }
        }
        this.setState({ingredients: ingredients, totalPrice : price});
    }

    checkoutCancel= () => {
        this.props.history.goBack();
    }

    checkoutContinue = () => {
        console.log("@@@")
        console.log(this.props.history);
        this.props.history.replace('/checkout/contact-data');
    }

    render() {
        return(
            <div>
                <CheckoutSummary ingredients={this.state.ingredients}
                checkoutCancel={this.checkoutCancel}
                checkoutContinue={this.checkoutContinue}/>
                <Route 
                    path={this.props.match.path + '/contact-data'} 
                    render={(props)=> <ContactData ingredients={this.state.ingredients} totalPrice={this.state.totalPrice} {...props}  />}/>
            </div>
        );
    }

}

export default Checkout;