import React, { Component } from 'react';
import Header from './components/Header';
import Author from './components/Author';
import Books from './components/Books'

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
        <Author />
        <Books />
      </div>
    );
  }

  

}

export default App;
