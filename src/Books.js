import React, { Component } from "react";
import Search from "./Search";
import BookList from "./Booklist";

export default class Books extends Component {
  constructor(props) {
    super(props);
    this.state = {
      books: [],
      searchField: "",
      isLoaded: false,
      err: null
    };
  }
// 
handleSubmit=(e)=> {
    e.preventDefault();
    let url = `https://www.googleapis.com/books/v1/volumes?q=${this.state.searchField}&key=AIzaSyDl7p4DIfhrx-AkMUIWpzmR48-v1Kdr4W0`
    fetch(url)
    .then(res => res.json())
    .then((data) => {
        console.log(data)
    })
}
handleSearch = (e) => {
    this.setState({
        searchField: e.target.value
    })
} 

  render() {
      return (
        <>
          <Search handleSubmit={this.handleSubmit} handleSearch={this.handleSearch}/>
          <BookList />
        </>
      );
  }
}
