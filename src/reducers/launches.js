const prevState = {
    isLoading : false
}
const launchData = (state = prevState , action) => {

    switch(action.type) {
        case 'FETCH_DATA_SUCCESS':
            return action.payload.launchData
        default:
            return state
    }
}

export default launchData