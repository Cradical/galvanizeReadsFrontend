import React, { Component } from 'react';
import Header from './components/Header';
import { Router } from "@reach/router";
import AuthorsPage from './components/AuthorsPage'
import Home from './components/Home'

class App extends Component {
  constructor(props) {
    super(props)
      this.state = {
        data : []
      }
  }
 
  componentDidMount() {
    let apiURL = 'http://localhost:3000/authors'
    fetch(apiURL)
      .then(response => response.json())
      .then(response => this.setState({ data : response }))  
  }


  render() {
    return (
      <div className="App">
        <Header />
          <Router>
            <Home path="/" />
            <AuthorsPage path="/authors" loadAuthors={this.state.data}/>      
          </Router>
      </div>
    );
  }

  

}

export default App;
