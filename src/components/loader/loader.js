import React, { Component } from 'react';
import loaderImg from "../../assets/loadingImg.gif";
import "./loader.css";
class Loader extends Component {
  render() {
    return (
        <img src={loaderImg} alt="loader" className="loader"></img>
      
    );
    
  }
}

export default Loader;
