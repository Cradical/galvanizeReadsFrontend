import React from 'react';
import { Router } from "@reach/router";
import AuthorsPage from './AuthorsPage'
import Home from './Home'

const Routes = () => {
    return(
        <Router>
            <Home path="/" />
            <AuthorsPage path="/authors" />
        </Router>
    )
}

export default Routes