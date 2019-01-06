import React, { Component } from 'react';
// import logo from './logo.svg';
import './menu/navbar.jsx';
import './App.css';
import Navbar from './menu/navbar.jsx';
import logo from './home-school.png';
import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faIgloo } from '@fortawesome/free-solid-svg-icons';
library.add(faIgloo)


class App extends Component {
  render() {
    return (
      <div height="100%" className="App">
        <Navbar />
        <div className="container">
          <div className="col-md-4 item">
            <p>teste</p>
            <p>teste</p>
            <p>teste</p>
            <p>teste</p>

          </div>
          <div className="col-md-4 item">
            <p>teste</p>
            <p>teste</p>
            <p>teste</p>
            <p>teste</p>

          </div>

        </div>
      </div>
    );
  }
}

export default App;
