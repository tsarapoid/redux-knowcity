const REGISTRATION_CHANGE_EMAIL = 'REGISTRATION_CHANGE_EMAIL'
const REGISTRATION_CHANGE_PASSWORD = 'REGISTRATION_CHANGE_PASSWORD'
const REGISTRATION_CHANGE_REPEAT_PASSWORD = 'REGISTRATION_CHANGE_REPEAT_PASSWORD'

export const setEmail = (email) => ({
  type: REGISTRATION_CHANGE_EMAIL,
  payload: email
})

export const setPassword = (password) => ({
  type: REGISTRATION_CHANGE_PASSWORD,
  payload: password
})

export const setRepeatPassword = (password) => ({
  type: REGISTRATION_CHANGE_REPEAT_PASSWORD,
  payload: password
})


const defaultState = {
  email: '',
  password: '',
  repeatPassword: '',
}

export const registrationReducer = (state = defaultState, action) => {
  switch (action.type) {
    case REGISTRATION_CHANGE_EMAIL:
      return { ...state, email: action.payload };
  
    case REGISTRATION_CHANGE_PASSWORD:
      return { ...state, password: action.payload };
    
    case REGISTRATION_CHANGE_REPEAT_PASSWORD:
      return { ...state, repeatPassword: action.payload };
    
    default: return state;
  }
}