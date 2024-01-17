import React, { Component } from "react";
import { 
    Outlet, 
} from 'react-router-dom';

class Layout extends Component {
    render() {
        return (
        <>
            <Outlet />
        </>
        );
    }
}

export default Layout;
