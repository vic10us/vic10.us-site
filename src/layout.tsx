import React, { Component } from "react";
import { Helmet, HelmetProvider } from 'react-helmet-async';
import { 
    Outlet, 
} from 'react-router-dom';

const helmetContext = {};

class Layout extends Component {
    render() {
        return (
        <HelmetProvider context={helmetContext}>
            <Outlet />
        </HelmetProvider>
        );
    }
}

export default Layout;
