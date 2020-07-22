import React, { Component } from 'react';

import Order from '../../components/Order/BurgerBuilder';
import Spinner from '../../components/UI/Spinner/Spinner';
import { connect } from 'react-redux';
import * as actions from '../../store/actions/index';

class Orders extends Component {

    state = {
        orders: [],
        loading: true
    }

    componentDidMount() {
        this.props.onGetAllOrders(this.props.token, this.props.userId);
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
        loading: state.order.loading,
        token : state.auth.token,
        userId : state.auth.userId
    };
};

const mapDispatchToProps = dispatch => {
    return {
        onGetAllOrders: (token, userId) => dispatch(actions.getAllOrders(token, userId))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Orders);