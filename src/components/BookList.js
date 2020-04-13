import React, { Component } from 'react';
import {ThemeContext} from '../contexts/ThemeContext'

class BookList extends Component {
    render() { 
        
        return(
        <ThemeContext.Consumer>{(context)=>{
            const {isLightTheme,light,dark} = context;
            const theme = isLightTheme ? light : dark;
            return ( 
                <div className = "book-list" style = {{background: theme.bg, color: theme.syntax}}>
                    <ul>
                        <li style = {{background: theme.ui}}>Book 1</li>
                        <li style = {{background: theme.ui}}>Book 2</li>
                        <li style = {{background: theme.ui}}>Book 3</li>
                    </ul>
                </div>
             );

            }}</ThemeContext.Consumer>
        );

       
       
    }
}
 
export default BookList;