import React from 'react';
import Styled from 'styled-components';

import BurgerIngredient from '../Burger/BurgerIngerdient/BurgerIngredient';

const Burger = Styled.div`
    width: 100%;
    margin: auto;
    height: 250px;
    overflow: scroll;
    text-align: center;
    font-weight: bold;
    font-size: 1.2rem;

    @media(min-width: 1000px) and (min-height: 700px) {
        width: 700px;
        height: 600px;
    }

    @media(min-width: 500px) and (min-height: 400px) {
        width: 300px;
        height: 500px;
`
const burger = (props) => {
    let transformedIngredients = Object.keys(props.ingredients)
    .map(ingredientKey => {
        return [...Array(props.ingredients[ingredientKey])].map((_,i) => {
            return <BurgerIngredient key={ingredientKey + i } type={ingredientKey} />;
        })
    })
    .reduce((previusValue, currentValue)=> {
        return previusValue.concat(currentValue);
    },[]);

    if(transformedIngredients.length === 0) {
        transformedIngredients = <p>Please start adding ingredients</p>
    }

    return (
            <Burger>
                <BurgerIngredient type="bread-top" />
                {transformedIngredients}
                <BurgerIngredient type="bread-bottom" />
            </Burger>
    );
}

export default burger;