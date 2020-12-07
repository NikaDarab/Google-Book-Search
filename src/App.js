import Header from './Header';
import Books from './Books';
import React, { Component } from 'react'


export default class App extends Component {
  render() {
    return (
      <div className='App'>
        <Header />
        <Books />
      </div>
    )
  }
}

