import React, { Component } from 'react';
import Aux from '../Auxalirity';
import Styled from 'styled-components';
import Toolbar from '../../components/Navigation/Toolbar/Toolbar'
import SideDraw from '../../components/Navigation/SideDrawer/SideDrawer';

let MainContent = Styled.main`
    margin-top: 75px;
    `;

class Layout extends Component {

    state = {
        showSideDrawer: false
    }

    sideDrawerClosed = () => {
        this.setState({
            showSideDrawer: false
        });
    }

    sideDrawerOpen = () => {
        this.setState((previousState) => {
            return { showSideDrawer: !previousState.showSideDrawer }
        });
    }

    render() {
        return (
            <Aux>
                <Toolbar open={this.sideDrawerOpen} />
                <SideDraw
                    open={this.state.showSideDrawer}
                    click={this.sideDrawerClosed} />
                <MainContent>
                    {this.props.children}
                </MainContent>
            </Aux>
        );
    }
}

export default Layout;