import React, { Component }  from 'react';
import Search from './Search'
import BookList from './Booklist'


export default class Books extends Component {
    render() {
        {
            return (
                <>
                    <Search />
                    <BookList />
                </>
            )
        }
    }
     
}
