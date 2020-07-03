import React from 'react';

import Styled from 'styled-components';

import burgerLogo from '../../assets/images/burger-logo.png';

const LogoDiv = Styled.div`
    background-color: white;
    padding: 8px;
    height: ${props => props.height};
    box-sizing: border-box;
    border-radius: 5px;
`
const Image = Styled.img`
    height: 100%;
`
const logo = (props) => (
    <LogoDiv height={props.height} >
        <Image src={burgerLogo} alt="Burger"/>
    </LogoDiv>
);

export default logo;