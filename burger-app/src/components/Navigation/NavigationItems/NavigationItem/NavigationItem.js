import React from 'react';

import Styled from 'styled-components';
import {NavLink} from 'react-router-dom';
import './LinkItem.css';

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
const navigationItem = (props) => (
    <ListItem >
        <NavLink className='LinkItem' to={props.link} activeClassName="active" exact>
            {props.children}
        </NavLink>
    </ListItem>
);

export default navigationItem;