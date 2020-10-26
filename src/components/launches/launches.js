import React, { Component } from "react";
import "./launches.css";
import { connect } from "react-redux";
import Loader from "../loader";
class Launches extends Component {
  render() {
    
    const {  launches } = this.props;
    const launchData = launches.data;
    const launchDataLength = launchData?JSON.parse(JSON.stringify(launchData.length)):0;
    return (
      
      <div className="launchContainer">
        {launchData ? launchDataLength?
        
          (
          launchData.map((launch, index) => (
            <div key={index} className="tiles">
              <img src={launch.links.mission_patch_small} alt="launcher"></img>
              <p className="missionName">
                {launch.mission_name} #{launch.flight_number}
              </p>
              <div>
                <b>Mission Ids:</b>
              
                {launch.mission_id.map((id, index, arr) => (
                  <span key={index} className="launchData">
                    {id}
                    {index !== arr.length - 1 ? "," : ""}
                  </span>
                ))}
              </div>
              <p>
                <b>Launch Year:</b>
                <span className="launchData">{launch.launch_year}</span>
              </p>
              <p>
                <b>Successful Launch:</b>
                <span className="launchData">{launch.launch_success ? "true" : "false"}</span>
              </p>
              <p>
                <b>Successful Landing:</b>
                <span className="launchData">
                {launch.rocket.first_stage.cores[0].land_success == null
                  ? "null"
                  : launch.rocket.first_stage.cores[0].land_success
                  ? "true"
                  : "false"}
                </span>
              </p>
            </div>
          ))
        ) : (<p className="noData">No Data</p>): (
          <Loader/>
        )}
      </div>
    );
  }
}
export const mapStateToProps = (state, ownProps) => {
	return {
		launches: state.launches
	};
};
export default connect(mapStateToProps)(Launches);
