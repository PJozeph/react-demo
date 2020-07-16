import * as actionType from './actionTypes'

const saveResult = (result) => {
    const updatedResult = result * 2;
    return {
        type : actionType.STORE_RESULTS,
        result : updatedResult
    }
}

export const storeResult = (result) => {
    return (dispatch, getState) => {
        setTimeout( ()=> {
            // const oldCounter = getState().ctr.counter;
            // console.log(oldCounter);
            dispatch(saveResult(result));
        },2000);
    }
}

export const removeResult = (id) => {
    return {
        type : actionType.REMOVE_RESULT,
        resultId: id
    }
}