import constants from '../constants/constants'

var initialState = {
  list: []
}

// when an action is dispatched this is the function that will fire
export default (state = initialState, action) => {
  // do different things based on the action received
  switch (action.type){
    case constants.ZONES_RECEIVED:
      console.log("ZONES_RECEIVED")
      // state mgmt happens here
      let updatedState = Object.assign({}, state)
      updatedState['list'] = action.zones
      // this is the equivalent of setState in redux...this will
      // trigger the re rendering of components
      return updatedState
    default:
      return state
  }
}
