import * as actionTypes from './actionTypes';
import axios from '../../axios-order'

export const purchaseBurgerSuccess = (id, orderData) => {
    return {
        type: actionTypes.PURCHASE_BURGER_SUCCESS,
        orderId: id,
        orderData: orderData
    }
}

export const purchaseBurgerFail = (error) => {
    return {
        type: actionTypes.PURCHASE_BURGER_FAIL,
        error: error
    }
}

export const purchaseBurgerStart = () => {
    return {
        type: actionTypes.PURCHASE_BURGER_START
    }
}

export const purchaseBurger = (orderData, token) => {
    return dispatch => {
        dispatch(purchaseBurgerStart());
        axios.post("orders.json?auth=" + token, orderData)
            .then((response) => {
                dispatch(purchaseBurgerSuccess(response.data.name, orderData))
            })
            .catch((error) => {
                dispatch(purchaseBurgerFail(error))
            })
    }
}

export const getAllOrdersSuccess = (orders) => {
    return {
        type: actionTypes.GET_ALL_ORDERS_SUCCESS,
        allOrders: orders
    }
}

export const getAllOrdersFail = () => {
    return {
        type: actionTypes.GET_ALL_ORDERS_FAIL,
    }
}

export const getAllOrders = (token) => {
    return dispatch => {
        axios.get('orders.json?auth=' + token)
            .then((response) => {
                // return Object into Array
                const fetchedOrder = [];
                for (let key in response.data) {
                    fetchedOrder.push({
                        ...response.data[key],
                        id: key
                    });
                }
                dispatch(getAllOrdersSuccess(fetchedOrder))
            })
            .catch((error) => { dispatch(getAllOrdersFail()) })
    }
}
