import React from 'react';
import {Switch, Route} from 'react-router-dom';
import LandingContainer from "./Landing/LandingContainer";

const Routes = () => (
    <Switch>
        <Route exact path='/' component={LandingContainer} />
    </Switch>
);

export default Routes;
