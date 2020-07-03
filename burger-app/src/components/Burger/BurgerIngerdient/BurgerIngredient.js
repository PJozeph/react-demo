import React, { Component } from 'react';
import Styled from 'styled-components';
import PropTypes from 'prop-types';

let BreadBottom = Styled.div`
    height: 13%;
    width: 80%;
    background: linear-gradient(#F08E4A, #e27b36);
    border-radius: 0 0 30px 30px;
    box-shadow: inset -15px 0 #c15711;
    margin: 2% auto;
`

let BreadTop = Styled.div`
    height: 20%;
    width: 80%;
    background: linear-gradient(#bc581e, #e27b36);
    border-radius: 50% 50% 0 0;
    box-shadow: inset -15px 0 #c15711;
    margin: 2% auto;
    position: relative;
`

let Seeds1 = Styled.div`
    width: 10%;
    height: 15%;
    position: absolute;
    background-color: white;
    left: 30%;
    top: 50%;
    border-radius: 40%;
    transform: rotate(-20deg);
    box-shadow: inset -2px -3px #c9c9c9;

    &:after {
        content: "";
        width: 100%;
        height: 100%;
        position: absolute;
        background-color: white;
        left: -170%;
        top: -260%;
        border-radius: 40%;
        transform: rotate(60deg);
        box-shadow: inset -1px 2px #c9c9c9;
    }

    &:before {
        content: "";
        width: 100%;
        height: 100%;
        position: absolute;
        background-color: white;
        left: 180%;
        top: -50%;
        border-radius: 40%;
        transform: rotate(60deg);
        box-shadow: inset -1px -3px #c9c9c9;  
    }
`

let Seeds2 = Styled.div`
    width: 10%;
    height: 15%;
    position: absolute;
    background-color: white;
    left: 64%;
    top: 50%;
    border-radius: 40%;
    transform: rotate(10deg);
    box-shadow: inset -3px 0 #c9c9c9;

    &:before {
        content: "";
        width: 100%;
        height: 100%;
        position: absolute;
        background-color: white;
        left: 150%;
        top: -130%;
        border-radius: 40%;
        transform: rotate(90deg);
        box-shadow: inset 1px 3px #c9c9c9;   
    }
`
let Meat = Styled.div`
    width: 80%;
    height: 8%;
    background: linear-gradient(#7f3608, #702e05);
    margin: 2% auto;
    border-radius: 15px;
`
let Salad = Styled.div`    
    width: 85%;
    height: 7%;
    margin: 2% auto;
    background: linear-gradient(#228c1d, #91ce50);
    border-radius: 20px;
`
let Chees = Styled.div`    
    width: 90%;
    height: 4.5%;
    margin: 2% auto;
    background: linear-gradient(#f4d004, #d6bb22);
    border-radius: 20px;
`
let Bacon = Styled.div`    
    width: 80%;
    height: 3%;
    background: linear-gradient(#bf3813, #c45e38);
    margin: 2% auto;
`
class BurgerIngredient extends Component {

    render() {
        let ingredient = null;

        switch (this.props.type) {
            case ('bread-bottom'):
                ingredient = <BreadBottom></BreadBottom>;
                break;
            case ('bread-top'):
                ingredient = (
                    <BreadTop>
                        <Seeds1></Seeds1>
                        <Seeds2></Seeds2>
                    </BreadTop>
                );
                break;
            case ('meat'):
                ingredient = <Meat></Meat>
                break;
            case ('chees'):
                ingredient = <Chees></Chees>
                break;
            case ('salad'):
                ingredient = <Salad></Salad>
                break;
            case ('bacon'):
                ingredient = <Bacon></Bacon>
                break;
            default:
                ingredient = null;
        }
        return ingredient;
    }
}

PropTypes.propTypes = {
    type : PropTypes.string.isRequired
}

export default BurgerIngredient;