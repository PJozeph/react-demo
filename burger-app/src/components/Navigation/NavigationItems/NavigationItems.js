import React from 'react';

import Styled from 'styled-components';

import NavigationItem from '../../Navigation/NavigationItems/NavigationItem/NavigationItem';

const NavigationList = Styled.ul`
    margin: 0;
    padding: 0;
    list-style: none;
    display: flex;
    flex-flow: column;
    align-items: center;
    height: 100%;
    margin-right : 25px;

    @media (min-width: 500px) {
        flex-flow: row;
    }
`
const navigationItems = (props) => (

    <NavigationList>
        <NavigationItem link="/" >Burger Builder</NavigationItem>
        {props.isAuthenticated ? <NavigationItem link="/orders"  >Order</NavigationItem> : null}
        {!props.isAuthenticated ? <NavigationItem link="/auth"  >Login</NavigationItem> :
        <NavigationItem link="/logout"  >Logout</NavigationItem>}
    </NavigationList>
);

export default navigationItems;