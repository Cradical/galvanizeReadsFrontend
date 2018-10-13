import React, { Component } from 'react';
import Header from './components/Header';
import { Router } from "@reach/router";
import AuthorsPage from './components/AuthorsPage'
import BooksPage from './components/BooksPage'
import AddAuthor from './components/AddAuthor'
import Home from './components/Home'
import AuthorProfile from './components/AuthorProfile'

class App extends Component {
  constructor(props) {
    super(props)
      this.state = {
        authors : [],
        books: [],
        booksAuthors: [],
        authorId: 1,
        bookId: 1
      }
  }
 
  componentDidMount() {
    let authorURL = 'https://galv-reads-001.herokuapp.com/authors'
    fetch(authorURL)
      .then(response => response.json())
      .then(response => this.setState({ authors : response }))  

    let bookURL = 'https://galv-reads-001.herokuapp.com/books'
    fetch(bookURL)
      .then(response => response.json())
      .then(response => this.setState({ books : response }))

    let booksAuthorsURL = 'http://localhost:3000/booksAuthors'
      fetch(booksAuthorsURL)
        .then(response => response.json())
        .then(response => this.setState({ booksAuthors : response.booksAuthors }))
      }
    addAuthor = (authors) => {
    let addAuthorURL = 'https://galv-reads-001.herokuapp.com/authors'
    fetch(addAuthorURL, {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(authors)
    })

    }

    setAuthorId = (id) => {
      this.setState({
        authorId : id
      })
    }

    setBookId = (id) => {
      console.log('hit after click')
      this.setState({
        bookId : id
      })
    }

    render() {
      console.log('authorId/App.js: ', this.state.authorId)
      console.log('bookId/App.js: ', this.state.bookId)
    return (
      <div className="App">
        <Header />
          <Router>
            <Home path="/" />
            <AuthorsPage path="/authors" loadAuthors={this.state.authors} setAuthorId={this.setAuthorId}/> 
            <BooksPage path="/books" loadBooks={this.state.books} />    
            <AddAuthor path="/addauthor" addAuthor={this.addAuthor}/>
            <AuthorProfile path="/authorProfile"
              authorId={this.state.authorId} 
              bookId={this.state.bookId}
              loadAuthors={this.state.authors}
              booksAuthors={this.state.booksAuthors} />
          </Router>
      </div>
    );
  }

  

}

export default App;
