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
const navigationItems = () => (

    <NavigationList>
        <NavigationItem link="/" >Burger Builder</NavigationItem>
        <NavigationItem link="/orders"  >Order</NavigationItem>
    </NavigationList>
);

export default navigationItems;