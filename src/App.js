import React, { Component } from 'react';

// import './App.css';
import Navbar from "./components/Navbar/Navbar"
import Container from "./components/Container/Container"
import Cards from "./components/Cards/Cards"

class App extends Component {
  render() {
    return (
      
    <div>
      <Navbar />
      <Container />
      <Cards />
     
    </div>
    );
  }
}

export default App;
