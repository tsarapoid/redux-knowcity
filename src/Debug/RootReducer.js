import { combineReducers } from 'redux'

import { authReducer } from '../Auth/AuthReducer'
import { registrationReducer } from '../Registration/RegReducer'

export default combineReducers({
  authorization: authReducer,
  registration: registrationReducer
});