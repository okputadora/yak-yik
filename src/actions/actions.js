import constant from '../constants/constants'

export default {

  zonesReceived: (zones) => {
    type: constants.ZONES_RECEIVED,
    // the payload from the server
    zones: zones
  }
}
