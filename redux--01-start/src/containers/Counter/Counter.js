import React, { Component } from 'react';

import CounterControl from '../../components/CounterControl/CounterControl';
import CounterOutput from '../../components/CounterOutput/CounterOutput';

import * as resultAction from '../../store/actions/result';
import * as counterAction from '../../store/actions/counter';

import { connect } from 'react-redux'

class Counter extends Component {
    state = {
        counter: 0
    }

    render() {
        return (
            <div>
                <CounterOutput value={this.props.ctr} />
                <CounterControl label="Increment" clicked={() => this.props.onIncrementCounter()} />
                <CounterControl label="Decrement" clicked={() => this.props.onDecrementCounter()} />
                <CounterControl label="Add 5" clicked={() => this.props.onAddCounter()} />
                <CounterControl label="Subtract 5" clicked={() => this.props.onSubtractCounter()} />
                <hr />
                <button onClick={() =>this.props.onStoreCounter(this.props.ctr)}>Store Result</button>
                <ul>
                    {this.props.results.map(result => (
                        <li key={result.id} onClick={() => this.props.onDeleteCounter(result.id)}>{result.value}</li>
                    ))}
                </ul>
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        ctr: state.ctr.counter,
        results: state.res.results
    };
};

const mapDispatchToProps = dispatch => {
    return {
        onIncrementCounter: () => dispatch(counterAction.increment()),
        onDecrementCounter: () => dispatch(counterAction.decrement()),
        onAddCounter: () => dispatch(counterAction.add(10)),
        onSubtractCounter: () => dispatch(counterAction.subtract(5)),
        onStoreCounter: (result) => dispatch(resultAction.storeResult(result)),
        onDeleteCounter: (id) => dispatch(resultAction.removeResult(id))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Counter);