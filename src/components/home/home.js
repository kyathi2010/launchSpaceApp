import React, { Component } from 'react';
import Filters from '../filters';
import Launches from '../launches';
import  './home.css';
class Home extends Component {
  componentDidMount(){
    document.body.style.backgroundColor = "#80808040";
  }
  render() { 
    return (
      <div className="App">
        <header className="App-header">
          <b>SpaceX Launch Programsssss</b>
        </header>
        <Filters />
        <Launches />
        <footer>
          <b>Developed by:</b>
          <p className="developerName">Kyathi Kanumuri</p>
        </footer>
      </div>
    );
  }
}

export default Home;

