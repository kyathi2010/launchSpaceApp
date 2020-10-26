import React, { Component } from 'react';
import './filters.css';
import { fetchSelectedYearData,fetchSelectedLandingData } from '../../actions/launchAction';
import { connect } from 'react-redux';
import {
  Link
} from 'react-router-dom';
class Filters extends Component {
 
  constructor(props){
    super(props);
    this.state={
      selectedYearButton :"",
      selectedLaunchToggle :"",
      selectedLandingToggle :""
    }
   
  }
  yearFilterClicked(event) {
    this.setState({
      selectedYearButton :event.target.dataset.value
    });
    this.props.fetchSelectedYearData(event.target.dataset.value);
    this.setState({
      selectedLandingToggle :"",
      selectedLaunchToggle:""
    });
    
    
  }
  launchFilterClicked(event) {
    this.props.fetchSelectedLandingData(this.state.selectedLandingToggle,event.target.dataset.value);
    this.setState({
      selectedYearButton :""
    });
    this.setState({
      selectedLaunchToggle :event.target.dataset.value
    });
    
  }
  landingFilterClicked(event) {
    this.props.fetchSelectedLandingData(event.target.dataset.value,this.state.selectedLaunchToggle);
    this.setState({
      selectedYearButton :""
    });
    this.setState({
      selectedLandingToggle :event.target.dataset.value
    });
    
  }
  
  render() {
    
    const years =[2006,2007,2008,2009,2010,2011,2012,2013,2014,2015,2016,2017,2018,2019,2020];
    const boolValues =[true,false];
    return (
      <div className="filterContainer">
        
        <b className="filterHeading">Filters</b>
        <div className="launchYear">
          <p>Launch Year</p></div>
          <div className="yearFilters">
            {
                years.map((year,index)=>(
                  <Link to="filterYear"  data-value={year} key={index} className={parseInt(this.state.selectedYearButton) === year ?"selectedYear":"notSelected"} onClick={this.yearFilterClicked.bind(this)}>{year}</Link>
                ))
            }
          </div>
          <div className="launchYear">
          <p>Successful Launch</p></div>
           <div className="successLaunchFilters">
            {
                boolValues.map((value,index)=>(
                  <Link to="filterLaunch" params={{ selectedLaunchToggle: value }} data-value={value} key={index} className={this.state.selectedLaunchToggle === value.toString() ?"selectedYear":"notSelected"} onClick={this.launchFilterClicked.bind(this)}>{value?"True":"False"}</Link>
                ))
            }
          </div>
          <div className="launchYear">
          <p>Successful Landing</p></div>
           <div className="successLandFilters">
            {
                boolValues.map((value,index)=>(
                  <Link  to="filterLanding" params={{ selectedLandingToggle: value }} data-value={value} key={index} className={this.state.selectedLandingToggle === value.toString() ?"selectedYear":"notSelected"} onClick={this.landingFilterClicked.bind(this)}>{value?"True":"False"}</Link>
                ))
            }
          </div>
      </div>
     
    );
    
  }
}
const mapDispatchToProps = {
  fetchSelectedYearData,
  fetchSelectedLandingData
 };
 
export default connect(null,mapDispatchToProps)(Filters);
