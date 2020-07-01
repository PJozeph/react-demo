import React, { Component } from 'react';
import Aux from '../../hoc/Auxalirity';
import Burger from '../../components/Burger/Burger'
import BuildControls from '../../components/Burger/BuildControls/buildControls'

const INGREDIENT_PRICES = {
    salad: 0.5,
    chees: 0.4,
    meat: 1.3,
    bacon: 0.7
}

class BurgerBuilder extends Component {

    state = {
        ingredients: {
            salad: 0,
            bacon: 0,
            chees: 0,
            meat: 0
        },
        totalPrice: 4
    }

    addIngredientHandler = (type) => {
        const oldCount = this.state.ingredients[type];
        const updatedCount = oldCount + 1;
        const updatedIngredients = { ...this.state.ingredients };
        updatedIngredients[type] = updatedCount;

        const priceAddition = INGREDIENT_PRICES[type];
        const oldPrice = this.state.totalPrice;
        const newPrice = oldPrice + priceAddition;

        this.setState({
            totalPrice: newPrice,
            ingredients: updatedIngredients
        });
    }

    removeIngredientHandler = (type) => {
        const oldCount = this.state.ingredients[type];
        console.log('old count');
        console.log(oldCount);
        console.log('type')
        console.log(type)
        if(oldCount <= 0) {
            return;
        }
        const updatedCount = oldCount - 1;
        const updateIngredients = { ...this.state.ingredients };
        updateIngredients[type] = updatedCount;

        const minusPrice = INGREDIENT_PRICES[type];
        const oldTotalPrice = this.state.totalPrice;
        const newTotalPrice = oldTotalPrice - minusPrice;

        this.setState({
            ingredients: updateIngredients,
            totalPrice: newTotalPrice
        });

    }

    render() {
        const disabledInfo = {
            ...this.state.ingredients
        }

        for(let key in disabledInfo){
            disabledInfo[key] = disabledInfo[key] <= 0
        }
        
        return (
            <Aux>
                <Burger ingredients={this.state.ingredients} />
                <BuildControls
                    ingredientRemoved={this.removeIngredientHandler}
                    ingredientAdded={this.addIngredientHandler}
                    disabled={disabledInfo}
                />
            </Aux>
        );
    }
}

export default BurgerBuilder;