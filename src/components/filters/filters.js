import React, { Component } from 'react';
import './filters.css';
import { fetchSelectedYearData,fetchSelectedLandingData } from '../../actions/launchAction';
import { connect } from 'react-redux';
import {
  withRouter
} from 'react-router-dom';
class Filters extends Component {
 
  constructor(props){
    super(props);
    this.state={
      selectedYearButton :undefined,
      selectedLaunchToggle :undefined,
      selectedLandingToggle :undefined
    }
   
  }
  componentDidMount(){
    let {year,launch,landing} = this.props;
    year = year === "undefined" ? undefined : year;
    launch = launch === "undefined" ? undefined : launch;
    landing = landing === "undefined" ? undefined : landing;
    this.setState({
      selectedYearButton:year,
      selectedLaunchToggle:launch,
      selectedLandingToggle:landing
    });
  }
  yearFilterClicked(event) {
    this.setState({
      selectedYearButton :event.target.dataset.value
    });
    this.props.fetchSelectedYearData(event.target.dataset.value,this.state.selectedLandingToggle,this.state.selectedLaunchToggle); 
    this.props.history.push("/launchSpaceApp/"+event.target.dataset.value+"/"+this.state.selectedLaunchToggle+"/"+this.state.selectedLandingToggle);
  }
  launchFilterClicked(event) {
    this.props.fetchSelectedYearData(this.state.selectedYearButton,this.state.selectedLandingToggle,event.target.dataset.value);

    this.setState({
      selectedLaunchToggle :event.target.dataset.value
    });
    this.props.history.push("/launchSpaceApp/"+this.state.selectedYearButton+"/"+event.target.dataset.value+"/"+this.state.selectedLandingToggle);
  }
  landingFilterClicked(event) {
    this.props.fetchSelectedYearData(this.state.selectedYearButton,event.target.dataset.value,this.state.selectedLaunchToggle);

    this.setState({
      selectedLandingToggle :event.target.dataset.value
    });
    this.props.history.push("/launchSpaceApp/"+this.state.selectedYearButton+"/"+this.state.selectedLaunchToggle+"/"+event.target.dataset.value);
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
                  <div  data-value={year} key={index} className={parseInt(this.state.selectedYearButton) === year ?"selectedYear":"notSelected"} onClick={this.yearFilterClicked.bind(this)}>{year}</div>
                ))
            }
          </div>
          <div className="launchYear">
          <p>Successful Launch</p></div>
           <div className="successLaunchFilters">
            {
                boolValues.map((value,index)=>(
                  <div  params={{ selectedLaunchToggle: value }} data-value={value} key={index} className={this.state.selectedLaunchToggle === value.toString() ?"selectedYear":"notSelected"} onClick={this.launchFilterClicked.bind(this)}>{value?"True":"False"}</div>
                ))
            }
          </div>
          <div className="launchYear">
          <p>Successful Landing</p></div>
           <div className="successLandFilters">
            {
                boolValues.map((value,index)=>(
                  <div  params={{ selectedLandingToggle: value }} data-value={value} key={index} className={this.state.selectedLandingToggle === value.toString() ?"selectedYear":"notSelected"} onClick={this.landingFilterClicked.bind(this)}>{value?"True":"False"}</div>
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
 
export default withRouter(connect(null,mapDispatchToProps)(Filters));
