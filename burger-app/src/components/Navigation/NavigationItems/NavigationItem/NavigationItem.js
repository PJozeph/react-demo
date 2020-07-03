import React from 'react';

import Styled from 'styled-components';

const ListItem = Styled.li`
    margin: 10px 0;
    box-sizing: border-box;
    display: block;
    width: 100%;


    @media (min-width: 500px) {
        margin: 0;
        display: flex;
        height: 100%;
        width: auto;
        align-items: center;
    }
`

const Anchore = Styled.a`
    color: #8F5C2C;
    text-decoration: none;
    width: 100%;
    box-sizing: border-box;
    display: block;

    &:hover,
    &:active,
    &.active {
        color: #40A4C8;
    }

    @media (min-width: 500px) {
            color: white;
            height: 100%;
            padding: 16px 10px;
            border-bottom: 4px solid transparent;

            &:hover,
            &:active,
            &.active {
            background-color: #8F5C2C;
            border-bottom: 4px solid #40A4C8;
            color: white;
        }
    }
`
const navigationItem = (props) => (
    <ListItem>
        {props.active ? <Anchore href={props.link}>{props.children}</Anchore> : null}
    </ListItem>
);

export default navigationItem;