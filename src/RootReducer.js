import { combineReducers } from 'redux'

import { authorizationReducer } from './Authorization/AuthReducer'
import { registrationReducer } from './Registration/RegReducer'


export default combineReducers({
  authorization: authorizationReducer,
  registration: registrationReducer,
});