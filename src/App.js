import React, { Component } from 'react';
import Header from './components/Header';
import { Router } from "@reach/router";
import AuthorsPage from './components/AuthorsPage'
import BooksPage from './components/BooksPage'
import Home from './components/Home'

class App extends Component {
  constructor(props) {
    super(props)
      this.state = {
        authors : [],
        books: []
      }
  }
 
  componentDidMount() {
    let authorURL = 'http://localhost:3000/authors'
    fetch(authorURL)
      .then(response => response.json())
      .then(response => this.setState({ authors : response }))  
      console.log('dtat: ', this.state.authors)

    let bookURL = 'http://localhost:3000/books'
    fetch(bookURL)
      .then(response => response.json())
      .then(response => this.setState({ books : response }))
  }


  render() {
    return (
      <div className="App">
        <Header />
          <Router>
            <Home path="/" />
            <AuthorsPage path="/authors" loadAuthors={this.state.authors}/> 
            <BooksPage path="/books" loadBooks={this.state.books} />    
          </Router>
      </div>
    );
  }

  

}

export default App;
