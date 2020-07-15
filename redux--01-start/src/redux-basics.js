const redux = require('redux'); 
const   createStore = redux.createStore;

const initialState = {
    counter : 0
}

//reducer
const rootReducer = (state = initialState, action) =>{
    if(action.type === 'INCREMENT') {
        return {
            ...state,
            counter : state.counter + 1
        }
    }
    return state;
};

// store
const store = createStore(rootReducer);

// subscription
store.subscribe(() => {
    console.log('Subscription', store.getState());
} )


// dispatching action
store.dispatch({type : 'INCREMENT'});
store.dispatch({type : 'ADD', value : 10});


