import React from "react";
import { Route, BrowserRouter as Router } from "react-router-dom";
import Home from "./components/home";
export default class AppRoute extends React.Component {
  componentDidCatch(error, log) {
    console.log("error is " + error);
  }
  render() {
    return (
      
	   <Router>
	   <div>
			<Route  path="/" component={Home} />
	   </div>
			  
	   </Router>
    );
  }
}
