import React from 'react';

import Styled from 'styled-components';

import Logo from '../../Logo/Logo';
import NavigationItems from '../NavigationItems/NavigationItems';
import SideDrawerToggle from '../../Navigation/SideDrawer/SideDrawerToggle/SideDrawerToggle';

const StyledHeader = Styled.header`
    height: 56px;
    width: 100%;
    position: fixed;
    top: 0;
    left: 0;
    background-color: #703B09;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 20px;
    box-sizing: border-box;
    z-index: 90 ;

    @media(max-width: 499px) {
        .DesktopOnly {
            display: none;
        }
    }
`
const StyledNav = Styled.nav`
    height: 100%;
    `
const toolbar = (props) => (
    <StyledHeader>
        <SideDrawerToggle click={props.open}></SideDrawerToggle>
        <Logo height="80%" />
        <StyledNav className="DesktopOnly">
            <NavigationItems isAuthenticated={props.isAuth} />
        </StyledNav>
    </StyledHeader>
);

export default toolbar;