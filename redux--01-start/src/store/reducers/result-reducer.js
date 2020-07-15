
import * as actionTypes from '../actions'

const initialState = {
    results: []
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.STORE_RESULTS: {
            return {
                ...state,
                results: state.results.concat({ id: new Date(), value: action.result })
                // concat returns a new array and merge new value into array.
            }
        }
        case actionTypes.REMOVE_RESULT: {
            const updateArray = state.results.filter((result) => result.id !== action.resultId);
            return {
                ...state,
                results: updateArray
            }
        }
    }
    return state;
}

export default reducer;