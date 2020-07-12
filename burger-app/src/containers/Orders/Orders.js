import React, { Component } from 'react';

import Order from '../../components/Order/Order';
import Spinner from '../../components/UI/Spinner/Spinner';
import axios from '../../axios-order';

class Orders extends Component {

    state = {
        orders: [],
        loading : true
    }

    componentDidMount() {
        console.log('Orders did mount')
        axios.get('orders.json')
        .then( (response) => {
            console.log(response.data) // return Object into Array
            const fetchedOrder = [];
            for (let key in response.data) {
                fetchedOrder.push({
                    ...response.data[key],
                    id : key 
                });
            }
            this.setState({loading: false, orders: fetchedOrder})
        })
        .catch((error) => {
            this.setState({loading: false})
        })
    }

    render() {
        let orders = <Spinner />
        if(!this.state.loading) {
          orders = ( <div>
                {this.state.orders.map((order) =>{
                    console.log(order.ingredients);
                    return <Order 
                    key={order.id}
                    ingredients={order.ingredients}
                    price ={+order.totalPrice}
                     />
                } )}
            </div>)
        }
        return (
        <div>
            {orders}
        </div>
        );
    }

}

export default Orders;