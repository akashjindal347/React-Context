import React, { Component } from 'react';
import {ThemeContext} from '../contexts/ThemeContext'
import {AuthContext} from '../contexts/AuthContext';

class Navbar extends Component {
    static contextType = ThemeContext;
    render() { 
        const {isLightTheme,light,dark} = this.context;
        const theme = isLightTheme ? light : dark;

        return (
            <AuthContext>{(authContext) =>{
                const {isAuthenticated, toggleAuth} = authContext;
                return(
                    <nav style = {{background: theme.ui, color: theme.syntax}} >
                    <h1>Context App</h1>
                    <ul>
                    <li>Home</li>
                    <li>About</li>
                    <li>Contact</li>
                    </ul>
                    <div style ={{cursor: 'pointer'}} onClick = {toggleAuth} >
                        {isAuthenticated ? 'Logged in' : 'Logged out'}
                    </div>
                    </nav>
                    
                );

            }
            }</AuthContext>
          );
    }
}
 
export default Navbar;