import React, { Component } from 'react';

class BookList extends Component {
    render() { 
        return ( 
            <div className = "book-list">
                <ul>
                    <li>Book 1</li>
                    <li>Book 2</li>
                    <li>Book 3</li>
                </ul>
            </div>
         );
    }
}
 
export default BookList;