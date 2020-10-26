import axios from 'axios'

/*asynchronous thunk action creator
  calls the api, then dispatches the synchronous action creator
*/
export const fetchAllData =  () => {
    return async dispatch => {
        try {
            let launchData = await axios.get('https://api.spacexdata.com/v3/launches?limit=100')
            dispatch({
				type: 'FETCH_DATA_SUCCESS',
				payload: { launchData }
			})
        }
        catch(e){
            console.error(e)
        }
    }
}
export const fetchSelectedYearData =  (selectedYear,selectedLanding,selectedLaunch) => {
    return async dispatch => {
        try {
            let landSelected = selectedLanding === undefined ? "" : "&land_success="+selectedLanding;
            let launchSelected = selectedLaunch === undefined ? "" : "&launch_success="+selectedLaunch;
            let yearSelected = selectedYear === undefined? "" : "&launch_year="+selectedYear;
            let launchData = await axios.get('https://api.spacexdata.com/v3/launches?limit=100'+landSelected+launchSelected+yearSelected);
            console.log('urlllll is '+'https://api.spacexdata.com/v3/launches?limit=100'+landSelected+launchSelected+yearSelected);
            dispatch({
				type: 'FETCH_DATA_SUCCESS',
				payload: { launchData }
            })
        }
        catch(e){
            console.error(e)
        }
    }
}
export const fetchSelectedLandingData =  (selectedLanding,selectedLaunch) => {
    return async dispatch => {
        try {
            let launchData;
            if(selectedLanding === "") {
                launchData = await axios.get('https://api.spacexdata.com/v3/launches?limit=100&launch_success='+selectedLaunch)
            }
            else {
                launchData = await axios.get('https://api.spacexdata.com/v3/launches?limit=100&launch_success='+selectedLaunch+'&land_success='+selectedLanding)
            }
            dispatch({
				type: 'FETCH_DATA_SUCCESS',
				payload: { launchData }
            })
        }
        catch(e){
            console.error(e)
        }
    }
}