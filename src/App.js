import React, { Component } from 'react';
import Header from './components/Header';
import { Router } from "@reach/router";
import AuthorsPage from './components/AuthorsPage'
import BooksPage from './components/BooksPage'
import AddAuthor from './components/AddAuthor'
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
    addAuthor = (authors) => {
    let addAuthorURL = 'http://localhost:3000/authors'
    fetch(addAuthorURL, {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(authors)
    })
    console.log('hit')
    console.log('authors', authors)
    }


  render() {
    return (
      <div className="App">
        <Header />
          <Router>
            <Home path="/" />
            <AuthorsPage path="/authors" loadAuthors={this.state.authors}/> 
            <BooksPage path="/books" loadBooks={this.state.books} />    
            <AddAuthor path="/addauthor" addAuthor={this.addAuthor}/>
          </Router>
      </div>
    );
  }

  

}

export default App;
