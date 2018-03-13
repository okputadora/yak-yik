import constants from '../constants/constants'

var initialState = {
  list: []
}

export default (state = initialState, action) => {
  // do different things based on the action received
  switch (action.type){
    case constants.ZONES_RECEIVED:
      console.log("ZONES_RECEIVED")
      // state mgmt happens here
      let updatedState = Object.assign({}, state)
      updatedState['list'] = action.zones
      return updatedState
    default:
      return state
  }
}
