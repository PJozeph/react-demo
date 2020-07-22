import React from 'react';

import Styled from 'styled-components';

import Logo from '../../Logo/Logo';
import NavigationItems from '../NavigationItems/NavigationItems';

import Aux from '../../../hoc/Auxalirity';

import BackDrop from '../../UI/Backdrop/Backdrop';

const sideDrawer = (props) => {

    const SideDrawDiv = Styled.div`
    position: fixed;
    width 220px;
    max-width: 70%;
    height: 100%;
    left: 0;
    top: 0;
    z-index: 200;
    background-color: white;
    padding: 32px 16px;
    box-sizing: border-box;
    transition: transform 0.3s ease-out;
    
    @media(min-width: 500px) {
        display: none;
        margin-right: 10px;
    }
    
    ${props.open ? 'transform: translateX(0)' : 'transform: translateX(-100%)'}
    `
    
    return (
        <Aux>
            <BackDrop show={props.open} click={props.click} ></BackDrop>
            <SideDrawDiv open={props.open} onClick={props.click}  >
                <Logo height="11%" />
                <nav>
                    <NavigationItems 
                    isAuthenticated={props.isAuth} />
                </nav>
            </SideDrawDiv>
        </Aux>
    )
}

export default sideDrawer;