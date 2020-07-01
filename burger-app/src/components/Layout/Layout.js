import React from 'react';
import Aux from '../../hoc/Auxalirity';
import Styled from 'styled-components';

let MainContent = Styled.main`
    margin-top: 15px;
`;

const layout = (props) => (
    <Aux>
        <div>
            Toolbar, SideDrawer, Backdop
    </div>
        <MainContent>
            {props.children}
        </MainContent>
    </Aux>
);

export default layout;