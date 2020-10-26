import React, { Component } from "react";
import "./launches.css";
import { connect } from "react-redux";

class Launches extends Component {
  render() {
    const {  launches } = this.props;
    console.log(this.props.match+"is success");
    const launchData = launches.data;
    const launchDataLength = launchData?JSON.parse(JSON.stringify(launchData.length)):0;
    return (
      
      <div className="launchContainer">

        {launchData ? launchDataLength?
        
          (
          launchData.map((launch, index) => (
            <div key={index} className="tiles">
              <img src={launch.links.mission_patch_small} alt="launcher"></img>
              <p>
                {launch.mission_name} #{launch.flight_number}
              </p>
              <div>
                <b>Mission Ids:</b>

                {launch.mission_id.map((id, index, arr) => (
                  <span key={index}>
                    {id}
                    {index !== arr.length - 1 ? "," : ""}
                  </span>
                ))}
              </div>
              <p>
                <b>Launch Year:</b>
                {launch.launch_year}
              </p>
              <p>
                <b>Successful Launch:</b>
                {launch.launch_success ? "true" : "false"}
              </p>
              <p>
                <b>Successful Landing:</b>
                {launch.rocket.first_stage.cores[0].land_success == null
                  ? "null"
                  : launch.rocket.first_stage.cores[0].land_success
                  ? "true"
                  : "false"}
              </p>
            </div>
          ))
        ) : (<p>No Data</p>): (
          <p>Loading</p>
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
