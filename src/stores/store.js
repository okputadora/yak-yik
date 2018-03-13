// this collects the reducers and is pretty much boiler plate

import { createStore, combineReducers, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import  zone  from '../reducers/zone'

var store;

export default {

  configureStore: (initial) => {
    const reducers = combineReducers({
      zone: zone
    })

    store = createStore(
      reducer,
      applyMiddleware(thunk)
    )
    return store
  }
}
