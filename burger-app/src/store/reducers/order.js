import * as actionType from '../actions/actionTypes';

const initialState = {
    orders: [],
    loading: false,
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case actionType.PURCHASE_BURGER_SUCCESS:
            const newOrder = {
                ...action.orderData,
                id: action.orderId
            };
            return {
                ...state,
                loading: false,
                orders: state.orders.concat(newOrder),
            }
        case actionType.PURCHASE_BURGER_FAIL:
            return {
                ...state,
                loading: false,
                error: action.error
            }
        case actionType.PURCHASE_BURGER_START:
            return {
                ...state,
                loading: true,
            }
        case actionType.GET_ALL_ORDERS:
            return {
                ...state,
                loading: true,
            }
        case actionType.GET_ALL_ORDERS_FAIL:
            return {
                ...state,
                loading: false,
            }
        case actionType.GET_ALL_ORDERS_SUCCESS:
            return {
                ...state,
                loading: false,
                orders: action.allOrders
            }
        default: return state;
    }
}
export default reducer;