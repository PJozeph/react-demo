import React from 'react';
import Burger from '../Burger/Burger';

import Button from '../UI/Button/Button';

import Styled from 'styled-components';

const Checkout = Styled.div`
    text-align: center;
    width: 80%;
    margin: auto;

    @media(min-width: 600px) {
        width: 500px;
    }
`

const checkoutSummary = (props) => {

    return(
        <Checkout>
            <h1>We hope it tastes well</h1>
            <div style={{width: '100%', margin: 'auto'}} >
                <Burger ingredients={props.ingredients} />
             </div>
             <Button 
             type='success'
             clicked = {props.checkoutContinue}
             >CONTINUE</Button>
             <Button 
             type='danger'
             clicked = {props.checkoutCancel}
             >CANCEL</Button>
        </Checkout>
    );

}
export default checkoutSummary;