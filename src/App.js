import React, { Component } from 'react';
import Header from './components/Header';
import Routes from './components/Router'


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
        <Routes />
       
      </div>
      
    );
  }

  

}

export default App;
