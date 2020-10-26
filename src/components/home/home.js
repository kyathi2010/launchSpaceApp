import React, { Component } from 'react';
import Filters from '../filters';
import Launches from '../launches';
import  './home.css';
class Home extends Component {
  componentDidMount(){
    document.body.style.backgroundColor = "#80808040";
  }
  render() { 
    const {year,landing,launch} =this.props.match.params ;
  
    return (
      <div className="App">
        <header className="App-header">
          <b>SpaceX Launch Programs</b>
        </header>
        <Filters year={year} launch={launch} landing={landing}/>
        <Launches year={year} launch={launch} landing={landing}/>
        <footer>
          <b>Developed by:</b>
          <p className="developerName">Kyathi Kanumuri</p>
        </footer>
      </div>
    );
  }
}

export default Home;

