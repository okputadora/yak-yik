import constants from '../constants/constants'

export default {

  zonesReceived: (zones) => {
    return {
      type: constants.ZONES_RECEIVED,
      // the payload from the server
      zones: zones
    }
  }
}
