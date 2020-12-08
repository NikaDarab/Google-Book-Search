import React, { Component } from "react";
import Search from "./Search";
import BookList from "./Booklist";

export default class Books extends Component {
  constructor(props) {
    super(props);
    this.state = {
      books: [],
      searchField: "",
      err: null,
      sort: "",
    };
  }
  handleSubmit = (e) => {
    e.preventDefault();
    let url = `https://www.googleapis.com/books/v1/volumes?q=${this.state.searchField}&filter=${this.state.sort}&key=AIzaSyDl7p4DIfhrx-AkMUIWpzmR48-v1Kdr4W0`;
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        if ((this.state.sort = "")) {
        } else {
          console.log(data);
          this.setState({
            books: [...data.items],
          });
        }
      });
  };
  handleSearch = (e) => {
    this.setState({
      searchField: e.target.value,
    });
  };

  handleFilter = (e) => {
    console.log(e.target.value);
    this.setState({
      sort: e.target.value,
    });
  };

  render() {
    return (
      <>
        <Search
          handleSubmit={this.handleSubmit}
          handleSearch={this.handleSearch}
          handleFilter={this.handleFilter}
          handleType={this.handleType}
        />
        <BookList books={this.state.books} />
      </>
    );
  }
}
