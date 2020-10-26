const launchData = (state = [] , action) => {

    switch(action.type) {
        case 'FETCH_DATA_SUCCESS':
            
            console.log("entered");
            return action.payload.launchData
        default:
            return state
    }
}

export default launchData