import React, { Component, lazy } from 'react';
import { Link, Route } from 'react-router-dom    '

import Users from './containers/Users';

const Pizza = lazy(() => import('./containers/Pizza'));

class App extends Component {
    render() {
        return (
            <div>
                <div>
                    <Link to='/'>Users</Link>
                    <Link to='/pizza'>Pizza</Link>
                </div>
                <div>
                    <Route path='/' component={Users}/>
                    <Route path='/pizza' component={Pizza}/>
                </div>
            </div>
        )
    }
}