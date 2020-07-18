import React, { Component } from 'react';

import Order from '../../components/Order/BurgerBuilder';
import Spinner from '../../components/UI/Spinner/Spinner';
import axios from '../../axios-order';
import { connect } from 'react-redux';
import * as actions from '../../store/actions/index';

class Orders extends Component {

    state = {
        orders: [],
        loading: true
    }

    componentDidMount() {
        this.props.onGetAllOrders();
    }

    render() {
        let orders = <Spinner />
        if (!this.props.loading) {
            orders = (<div>
                {this.props.orders.map((order) => {
                    console.log(order.ingredients);
                    return <Order
                        key={order.id}
                        ingredients={order.ingredients}
                        price={+order.totalPrice}
                    />
                })}
            </div>)
        }
        return (
            <div>
                {orders}
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        orders: state.order.orders,
        loading: state.order.loading
    };
};

const mapDispatchToProps = dispatch => {
    return {
        onGetAllOrders: () => dispatch(actions.getAllOrders())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Orders);