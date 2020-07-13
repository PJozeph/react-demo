import React from 'react';

import Styled from 'styled-components';

const OrderContainer = Styled.div`
    width: 80%;
    border: 1px solid #ccc;
    box-shadow: 0 2px 3px #ccc;
    padding: 10px;
    margin: 10px auto;
    box-sizing: border-box;
`
const order = (props) => {

    const ingredients = [];
    for (let ingredientName in props.ingredients) {
        ingredients.push({
            name: ingredientName,
            amount: props.ingredients[ingredientName]
        });
    }

    const ingredientResult = ingredients.map((ingredient) => {
        return <span
         key={ingredient.name}> 
         {ingredient.name} 
         ({ingredient.amount}) 
         </span>
    }
    );

    return (
        <OrderContainer>
            {ingredientResult}
            <p>Ingredients : {props.name} ({props.amount}) </p>
            <p>Price <strong>USD {props.price.toFixed(2)}</strong></p>
        </OrderContainer>
    );
}

export default order;