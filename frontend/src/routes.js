import React from 'react';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';
import { toast } from 'react-toastify';

import {isAuthenticated} from './services/auth';

import Logon from './pages/Logon';
import Register from './pages/Register';
import Profile from './pages/Profile';
import Newincident from './pages/Newincident';

export default function Routes() {
    return(
        <BrowserRouter>
            <Switch>
                <Route path="/" exact component={Logon} />
                <Route path="/register" component={Register} />
                <PrivateRoute path="/profile" component={Profile} />
                <PrivateRoute path="/incidents/new" component={Newincident} />
            </Switch>
        </BrowserRouter>
    );
}

const PrivateRoute = ({ component: Component, ...rest }) => (
    <Route {...rest}
        render={props =>
            isAuthenticated() ? 
            (
                <Component {...props} />
            ) : (<>
                {toast.warn('Sessão finalizada.')}
                <Redirect to={{ pathname: "/", state: { from: props.location } }} />
            </>)
        }
    />
);