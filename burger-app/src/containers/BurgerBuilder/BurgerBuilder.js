import React, { Component } from 'react';
import Aux from '../../hoc/Auxalirity';
import Burger from '../../components/Burger/Burger'
import BuildControls from '../../components/Burger/BuildControls/buildControls'
import Modal from '../../components/UI/Modal/Modal'
import OrderSummary from '../../components/Burger/OrderSummary/OrderSummary'
import axios from '../../axios-order';
import Spinner from '../../components/UI/Spinner/Spinner';
import withErrorHandler from '../../hoc/withErrorHandler/withErrorHandler';
import * as actionType from '../../store/actions';
import { connect } from 'react-redux';

class BurgerBuilder extends Component {

    state = {
        purchasing: false,
        loading: false,
        error: false,
    }

    componentDidMount() {
        // axios.get('ingredients.json')
        //     .then((response) => {
        //         this.setState({
        //             ingredients: response.data,
        //             loading : false
        //         });
        //     }).catch((error) => {
        //         this.setState({
        //             error : true
        //         });
        //     })
    }

    // addIngredientHandler = (type) => {
    //     const oldCount = this.state.ingredients[type];
    //     const updatedCount = oldCount + 1;
    //     const updatedIngredients = { ...this.state.ingredients };
    //     updatedIngredients[type] = updatedCount;

    //     const priceAddition = INGREDIENT_PRICES[type];
    //     const oldPrice = this.state.totalPrice;
    //     const newPrice = oldPrice + priceAddition;

    //     this.setState({
    //         totalPrice: newPrice,
    //         ingredients: updatedIngredients
    //     });

    //     this.updatePurchasableState(updatedIngredients);
    // }

    // removeIngredientHandler = (type) => {
    //     const oldCount = this.state.ingredients[type];
    //     if (oldCount <= 0) {
    //         return;
    //     }
    //     const updatedCount = oldCount - 1;
    //     const updateIngredients = { ...this.state.ingredients };
    //     updateIngredients[type] = updatedCount;

    //     const minusPrice = INGREDIENT_PRICES[type];
    //     const oldTotalPrice = this.state.totalPrice;
    //     const newTotalPrice = oldTotalPrice - minusPrice;

    //     this.setState({
    //         ingredients: updateIngredients,
    //         totalPrice: newTotalPrice
    //     });

    //     this.updatePurchasableState(updateIngredients);
    // }

    updatePurchasableState(ingredients) {
        const sum = Object.keys(ingredients).map(
            key => { return ingredients[key] }
        ).reduce((sum, element) => {
            return sum + element;
        }, 0)
        return  sum > 0;
    }

    purchaseHandler = () => {
        this.setState({
            purchasing: true
        });
    }

    purchaseCancelHandler = () => {
        this.setState({
            purchasing: false
        });
    }

    purchaseContinueHandler = () => {
        this.props.history.push('/checkout');
    }

    render() {
        const disabledInfo = {
            ...this.props.ingredients
        }

        for (let key in disabledInfo) {
            disabledInfo[key] = disabledInfo[key] <= 0
        }

        let orderSummary = null;
        let burger =  this.state.error ? <p>Ingredients can not loaded </p> : (<Spinner />)
        if (this.props.ingredients) {
            burger = (
                <Aux>
                    <Burger ingredients={this.props.ingredients} />
                    <BuildControls
                        ingredientRemoved={this.props.onRemoveIngredient}
                        ingredientAdded={this.props.onAddIngredient}
                        disabled={disabledInfo}
                        price={this.props.totalPrice}
                        purchaseable={this.updatePurchasableState(this.props.ingredients)}
                        ordered={this.purchaseHandler}
                    />
                </Aux>
            );
            orderSummary = (<OrderSummary
                ingredients={this.props.ingredients}
                cancel={this.purchaseCancelHandler}
                continue={this.purchaseContinueHandler}
                totalPrice={this.props.totalPrice}></OrderSummary>);
        }

        if (this.state.loading) {
            orderSummary = (<Spinner />)
        }

        return (
            <Aux>
                <Modal show={this.state.purchasing} modalClose={this.purchaseCancelHandler}>
                    {orderSummary}
                </Modal>
                {burger}
            </Aux>
        );
    }
}

const mapStateToProps = state => {
    return {
        ingredients: state.ingredients,
        totalPrice: state.totalPrice
    };
};

const mapDispatchToProps = dispatch => {
    return {
        onAddIngredient: (name) => dispatch({ type: actionType.ADD_INGREDIENT , ingredientName : name}),
        onRemoveIngredient: (name) => dispatch({ type: actionType.REMOVE_INGREDIENT, ingredientName : name })
    }
}

export default withErrorHandler(connect(mapStateToProps, mapDispatchToProps)(BurgerBuilder), axios);