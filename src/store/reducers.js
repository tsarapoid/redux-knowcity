import { combineReducers } from 'redux'

import { authReducer } from './auth-reducer'
import { registrationReducer } from './reg-reducer'

export default combineReducers({
  auth: authReducer,
  registration: registrationReducer
});