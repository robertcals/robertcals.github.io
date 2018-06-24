import React, { Component } from 'react';
import NavBar from '../Components/Nav/NavBar.js';
import Header from '../Components/Header/Header.js';
import About from '../Components/About/About.js';
import Portfolio from '../Components/Portfolio/Portfolio.js';
import Tools from '../Components/Tools/Tools.js';
import Contact from '../Components/Contact/Contact.js';
import Footer from '../Components/Footer/Footer.js';
import './App.css';


class App extends Component {
  render() {
    return (
      <div className="App">
        <NavBar />
        <Header />
        <About />
        <Portfolio />
        <Tools />
        <Contact />
        <Footer />
      </div>
    );
  }
}

export default App;
