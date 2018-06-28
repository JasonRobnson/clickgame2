import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom"
import './App.css';
import Navbar from "./components/navbar/navbar.js"
import Footer from "./components/footer/footer.js"

class App extends Component {
  render() {
    return (
      <Router>
      <div>
           
            <Navbar />
            <Route exact path="/" />
            <Route exact path="/about"/>
            <Route exact path="/discover" />

            <Footer />
    
        </div>
      </Router>
    );
  }
}

export default App;
