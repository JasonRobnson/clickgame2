import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import { BrowserRouter as Router, Route } from "react-router-dom"
// import './App.css';
// import Navbar from "./components/navbar/navbar.js"
// import Footer from "./components/footer/footer.js"
// import Container from "./components/container/container.js"

class App extends Component {
  render() {
    return (
      // <Router>
      // <div>
           
      //       <Navbar />
      //       <Route exact path="/" />
      //       <Route exact path="/about"/>
      //       <Route exact path="/discover" />
      //       <Container />

      //       <Footer />
    
      //   </div>
      // </Router>
    <Router>
    <div>
      <div className="header teal lighten-2">
        <div className="row">
          <div className="col m4 brand-logo">
    
            <a href="#" className="brand-logo"><h1>Logo</h1></a>
          </div>
          <div className="col m6">
          <ul>
              <li>
                <Link className="navbar-brand" to="/">
                <h3>The Click Game</h3> 
                </Link>
              </li>
          </ul>
          </div>
        </div>
             
      </div>
      <div className="container">
        <div className="row">
          <div className="col m12">
              <h2>Row 1</h2>
          </div>
        </div>
        <div className="row">
          <div className="col m12">
              <h3>Row 2</h3>
          </div>
        </div>
        <div className="row">
          <div className="col m12">
            <h3>Row 3 </h3>
          </div>
        </div>
      </div>
      </div>
    </Router>
    );
  }
}

export default App;
