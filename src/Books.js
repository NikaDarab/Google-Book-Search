import React, { Component } from "react";
import Search from "./Search";
import BookList from "./Booklist";

export default class Books extends Component {
  constructor(props) {
    super(props);
    this.state = {
      books: [],
      searchField: "",
    };
  }
handleSearch = (e) => {
    console.log('handle search cllicked')
    this.setState({
        searchField: e.target.value
    })
}

  render() {
    {
      return (
        <>
          <Search handleSearch={this.handleSearch}/>
          <BookList />
        </>
      );
    }
  }
}
