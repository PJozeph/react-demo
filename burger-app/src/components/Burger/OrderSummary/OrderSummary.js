import React from 'react';


import Aux from '../../../hoc/Auxalirity';

import Button from '../../UI/Button/Button';

const orderSummary = (props) => {


    const ingredientsSummary = Object.keys(props.ingredients)
        .map((key) => {
            return (<li key={key}>
                <span style={{textTransform:'capitalize'}}>{key}</span> : {props.ingredients[key]
                }</li>);
        });

    return (
        <Aux>
            <h3>Your Order</h3>
            <p>The burger with following ingredients:</p>
            <ul>
                {ingredientsSummary}
            </ul>
            <p>Continue to Checkout?</p>
            <Button type='succes'>CONTONIE</Button>
            <Button type='danger'>CANCEL</Button>
        </Aux>
    );

}

export default orderSummary