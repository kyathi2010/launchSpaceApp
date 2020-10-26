import React from "react";
import { Route, BrowserRouter as Router,Switch } from "react-router-dom";
import Home from "./components/home";
export default class AppRoute extends React.Component {
  render() {
    return (
      
	   <Router>
	   <Switch>
        <Route  path="/launchSpaceApp/:year?/:launch?/:landing?" component={Home} />
        <Route  exact path="/launchSpaceApp" component={Home} />
	   </Switch>
			  
	   </Router>
    );
  }
}
