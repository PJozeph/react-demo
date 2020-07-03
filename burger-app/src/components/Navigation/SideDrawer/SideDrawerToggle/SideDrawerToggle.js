import React from 'react';
import Styled from 'styled-components';

const Menu = Styled.div`
    width: 40px;
    height: 100%;
    display: flex;
    flex-flow: column;
    justify-content: space-around;
    align-items: center;
    padding: 10px 0;
    box-sizing: border-box;
    cursor: pointer;

    @media (min-width: 500px) {
        .DrawerToggle {
            display: none;
        }
    }
    `
const MenuItem = Styled.div`
    width: 90%;
    height: 3px;
    background-color: white;
    `


const sideDrawerToggle = (props) => (
    <Menu onClick={props.click}>
        <MenuItem></MenuItem>
        <MenuItem></MenuItem>
        <MenuItem></MenuItem>
    </Menu>
)

export default sideDrawerToggle;